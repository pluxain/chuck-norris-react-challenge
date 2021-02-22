# Chuck Norris React Challenge

## First steps

First of all you need to clone this repository locally.

Then you can run `npm install` locally.

To have the share api server running, you need to go in the `server` folder and copy the `db.sample.json` to `db.json`. You will also need `.env.development` and `.env.production` files at the root of the project for it to run. You can copy the `.env.sample` which contains the required environment settings for this project.

## Development

To launch the development version you need a `.env.development` file at the root of the project. You can copy the `.env.sample` file to `.env.development` and run `npm start`.

You can run all tests with `npm run test:full` command.

## Production

To make a production build, run `npm run build`.

To try a production build, run `npm run run:build`. Please note that the share api server will not be triggered by this (You can then see errors displayed when sharing a joke). You can launch the local share api server by runnin `npm run api:share`.
