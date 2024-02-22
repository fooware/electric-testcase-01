import { useEffect, useState } from "react";

import { LIB_VERSION } from "electric-sql/version";
import { makeElectricContext, useLiveQuery } from "electric-sql/react";
import { genUUID, uniqueTabId } from "electric-sql/util";
import { ElectricDatabase, electrify } from "electric-sql/wa-sqlite";

import { authToken } from "./auth";
import { Electric, House, schema } from "./generated/client";

import "./Example.css";

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
  const { db } = useElectric()!;
  const { results } = useLiveQuery(db.house.liveMany());

  useEffect(() => {
    const syncItems = async () => {
      // Resolves when the shape subscription has been established.
      const shape = await db.house.sync({
        include: {
          room: {
            include: {
              person: true,
              room_user: true,
              box: { include: { stuff: true, box_user: true } },
            },
          },
        },
      });

      // Resolves when the data has been synced into the local database.
      await shape.synced;
    };

    syncItems();
  }, [db.house]);

  const addItem = async () => {
    const id = genUUID();
    await db.house.create({
      data: {
        id: id,
        name: "house " + id.toString(),
      },
    });
  };

  const clearItems = async () => {
    await db.house.deleteMany();
  };

  const items: House[] = results ?? [];

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
      <div className="controls">
        <button className="button" onClick={addItem}>
          Start adding stuff
        </button>
        <button className="button" onClick={clearItems}>
          Remove everything
        </button>
      </div>
      {items.map((house: House, index: number) => (
        <p key={index} className="item">
          <code>{house.name}</code>
        </p>
      ))}
    </div>
  );
};
