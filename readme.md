# Forest Mongoose sample project

## Installation

### Install project dependencies
* `yarn --ignore-engines`

### Database setup
* `docker-compose up -d`

Once container is running seed the database

* `yarn db:seed`

## Environment

### Development
* `cp .env-example .env`
* Configure api keys

## Run
* `nodemon`
* Visit your app at [http://localhost:3000](http://localhost:3000)
