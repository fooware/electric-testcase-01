# Test cases for Electric-SQL

This repository contains some test cases created to assist the Electric-SQL team.

## 1. Incorrect Types in generated client

See [GitHub issue 1001](https://github.com/electric-sql/electric/issues/1001) for details.

Reproducible in commit [10e5ff75b4fc92852ef04cbff69c167024aac7d1](https://github.com/fooware/electric-testcase-01/commit/10e5ff75b4fc92852ef04cbff69c167024aac7d1) on main. Fixed by upgrading to Electric 0.9.6 in the [following commit](https://github.com/fooware/electric-testcase-01/commit/3ea7a134d10baa2c1ae66139952a40362328a9e8).

## 2. Failing referential integrity (discussed in Discord)

Failing referential integrity when doing overlapping deletes and inserts, [Discussed in Discord](https://discord.com/channels/933657521581858818/1202273462593532004). Test case and instructions can be found in the [electric_8_1 branch](https://github.com/fooware/electric-testcase-01/tree/electric_8_1).

## ********************* Officials docs below *********************

This is a web application using ElectricSQL in the browser with [wa-sqlite](https://electric-sql.com/docs/integrations/drivers/web/wa-sqlite).

## Pre-reqs

You need [NodeJS >= 16.11 and Docker Compose v2](https://electric-sql.com/docs/usage/installation/prereqs).

## Install

Install the dependencies:

```sh
npm install
```

## Setup

Start Postgres and Electric using Docker (see [running the examples](https://electric-sql.com/docs/examples/notes/running) for more options):

```shell
npm run backend:up
# Or `npm run backend:start` to foreground
```

Note that, if useful, you can connect to Postgres using:

```shell
npm run db:psql
```

Setup your [database schema](https://electric-sql.com/docs/usage/data-modelling):

```shell
npm run db:migrate
```

Generate your [type-safe client](https://electric-sql.com/docs/usage/data-access/client):

```shell
npm run client:generate
# or `npm run client:watch`` to re-generate whenever the DB schema changes
```

## Run

Start your app:

```sh
npm run dev
```
<!-- see https://vitejs.dev/config/server-options#server-port for default Vite port -->
Open [localhost:5173](http://localhost:5173) in your web browser.

## Develop

This template contains the basic Electric code which you can adapt to your use case. For more information see the:

- [Documentation](https://electric-sql.com/docs)
- [Quickstart](https://electric-sql.com/docs/quickstart)
- [Usage guide](https://electric-sql.com/docs/usage)

If you need help [let us know on Discord](https://discord.electric-sql.com).
