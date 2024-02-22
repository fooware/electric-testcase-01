/* This is an example of an SQL DDL migration. It creates an `items` table and
 * then calls an `electric.electrify` procedure to expose the table to the
 * ElectricSQL replication machinery.
 *
 * Note that these statements are applied directly to the *Postgres* database.
 * Electric then handles keeping the local SQLite database schema in sync with
 * the electrified subset of your Postgres database schema.
 *
 * See https://electric-sql.com/docs/usage/data-modelling for more information.
 */


BEGIN;

CREATE TABLE
  "house" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "house_pkey" PRIMARY KEY ("id")
  );

CREATE TABLE
  "room" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "house_id" UUID NOT NULL,
    "owner_id" UUID,
    CONSTRAINT "level_one_pkey" PRIMARY KEY ("id")
  );

CREATE TABLE
  "box" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "room_id" UUID NOT NULL,
    CONSTRAINT "box_pkey" PRIMARY KEY ("id")
  );

CREATE TABLE
  "thing" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "box_id" UUID NOT NULL,
    CONSTRAINT "thing_pkey" PRIMARY KEY ("id")
  );

CREATE TABLE
  "person" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "person_pkey" PRIMARY KEY ("id")
  );

CREATE TABLE
  "room_user" (
    "id" UUID NOT NULL,
    "person_id" UUID NOT NULL,
    CONSTRAINT "room_user_pkey" PRIMARY KEY ("id", "person_id")
  );

CREATE TABLE
  "box_user" (
    "id" UUID NOT NULL,
    "person_id" UUID NOT NULL,
    CONSTRAINT "box_user_pkey" PRIMARY KEY ("id", "person_id")
  );

-- Create indexes
CREATE INDEX "room_user_person_id_idx" ON "room_user" ("person_id");

CREATE INDEX "box_user_person_id_idx" ON "box_user" ("person_id");

-- Setup foreign key constraints
ALTER TABLE "room" ADD CONSTRAINT "room_house_id_fkey" FOREIGN KEY ("house_id") REFERENCES "house" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "room" ADD CONSTRAINT "room_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "person" ("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "box" ADD CONSTRAINT "box_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "room" ("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "thing" ADD CONSTRAINT "thing_box_id_fkey" FOREIGN KEY ("box_id") REFERENCES "box" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "room_user" ADD CONSTRAINT "room_user_id_fkey" FOREIGN KEY ("id") REFERENCES "room" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "room_user" ADD CONSTRAINT "room_user_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "box_user" ADD CONSTRAINT "box_user_id_fkey" FOREIGN KEY ("id") REFERENCES "box" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "box_user" ADD CONSTRAINT "box_user_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "person" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Electrify all the rebel_v1 tables
ALTER TABLE "house" ENABLE ELECTRIC;

ALTER TABLE "room" ENABLE ELECTRIC;

ALTER TABLE "box" ENABLE ELECTRIC;

ALTER TABLE "thing" ENABLE ELECTRIC;

ALTER TABLE "person" ENABLE ELECTRIC;

ALTER TABLE "box_user" ENABLE ELECTRIC;

ALTER TABLE "room_user" ENABLE ELECTRIC;

COMMIT;
