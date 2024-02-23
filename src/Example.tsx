import { useEffect, useState } from "react";

import { LIB_VERSION } from "electric-sql/version";
import {
  makeElectricContext,
  useConnectivityState,
  useLiveQuery,
} from "electric-sql/react";
import { genUUID, uniqueTabId } from "electric-sql/util";
import { ElectricDatabase, electrify } from "electric-sql/wa-sqlite";

import { authToken } from "./auth";
import { Electric, House, schema } from "./generated/client";

import "./Example.css";
import { set } from "zod";

const { ElectricProvider, useElectric } = makeElectricContext<Electric>();

export const Example = () => {
  const [electric, setElectric] = useState<Electric>();

  useEffect(() => {
    let isMounted = true;

    const init = async () => {
      const config = {
        debug: import.meta.env.DEV,
        url: import.meta.env.ELECTRIC_SERVICE,
        auth: {
          token: authToken(),
        },
      };

      const { tabId } = uniqueTabId();
      const scopedDbName = `basic-${LIB_VERSION}-${tabId}.db`;

      const conn = await ElectricDatabase.init(scopedDbName, "/sqlite/");
      const electric = await electrify(conn, schema, config);

      if (!isMounted) {
        return;
      }

      setElectric(electric);
    };

    init();

    return () => {
      isMounted = false;
    };
  }, []);

  if (electric === undefined) {
    return null;
  }

  return (
    <ElectricProvider db={electric}>
      <ExampleComponent />
    </ElectricProvider>
  );
};

const ExampleComponent = () => {
  const { connectivityState } = useConnectivityState();

  const [addingHouses, setAddingHouses] = useState(false);
  const [addedHouses, setAddedHouses] = useState(0);
  const [addedRooms, setAddedRooms] = useState(0);
  const [addedBoxes, setAddedBoxes] = useState(0);

  const { db } = useElectric()!;
  const query = useLiveQuery(
    db.house.liveMany({
      include: {
        room: true,
      },
    })
  );

  const { results } = query;

  useEffect(() => {
    const syncItems = async () => {
      // Resolves when the shape subscription has been established.
      const shape = await db.house.sync({
        include: {
          room: {
            include: {
              person: true,
              room_user: true,
              box: { include: { thing: true, box_user: true } },
            },
          },
        },
      });

      // Resolves when the data has been synced into the local database.
      await shape.synced;
    };

    syncItems();
  }, [db.house]);

  const addItems = async () => {
    setAddingHouses(true);
    setAddedHouses(0);
    setAddedRooms(0);
    setAddedBoxes(0);
    let housesAdded = 0;
    let roomsAdded = 0;
    let boxesAdded = 0;
    for (let i = 0; i < 10; i++) {
      setAddedHouses(++housesAdded);
      const houseId = genUUID();
      await db.house.create({
        data: {
          id: houseId,
          name: "house " + houseId.toString(),
        },
      });
      for (let i = 0; i < 3; i++) {
        setAddedRooms(++roomsAdded);
        const roomId = genUUID();
        await db.room.create({
          data: {
            id: roomId,
            name: "room " + roomId.toString(),
            house_id: houseId,
          },
        });
        for (let i = 0; i < 5; i++) {
          setAddedBoxes(++boxesAdded);
          const boxId = genUUID();
          await db.box.create({
            data: {
              id: boxId,
              name: "box " + boxId.toString(),
              room_id: roomId,
            },
          });
        }
      }
    }
    setAddingHouses(false);
  };

  const clearItems = async () => {
    // First remove the rooms, as they ON DELETE RESTRICT on the house.
    // Removing the rooms will ON DELETE CASCADE the boxes in the rooms.
    await db.room.deleteMany();
    await db.house.deleteMany();
  };

  const houses: House[] = results ?? [];

  return (
    <div>
      <p>
        This test case will stress test the referential integrity of the
        ElectricSQL by simultaneously adding and removing items from the
        database in two different tabs.
      </p>
      <p>
        To start the test, open this page in two different tabs and click the
        add button in one tab and then randomly smash the remove button in the
        other tab, keep an eye out for any errors in the console.
      </p>
      <h5>Server {connectivityState}</h5>
      {addingHouses && (
        <h5>
          Adding stuff...
          <br />
          {`${addedHouses} houses, ${addedRooms} rooms, ${addedBoxes} boxes`}
        </h5>
      )}
      {!addingHouses && (
        <div className="controls">
          <button className="button" onClick={addItems}>
            Start adding stuff
          </button>
          <button className="button" onClick={clearItems}>
            Remove everything
          </button>
        </div>
      )}

      <p>
        {`House table last updated ${query.updatedAt?.toLocaleDateString()} at ${query.updatedAt?.toLocaleTimeString()} and contains ${
          houses.length
        } houses.`}
      </p>
      {houses.map((house: House, index: number) => (
        <p key={index} className="item">
          {house.name}
          <br />
          {"room" in house && Array.isArray(house.room)
            ? `Number of rooms: ${house.room.length}`
            : "House is empty"}

          <br />
        </p>
      ))}
    </div>
  );
};
