# Forest Admin Demo with a Mongodb database

This project is a demo of a liana integration on an Express server using Mongoose ORM.

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

## Community

👇 Join our Slack community of +1000 developers

[![Slack Status](http://community.forestadmin.com/badge.svg)](https://community.forestadmin.com)
