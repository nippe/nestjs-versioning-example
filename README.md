# Sample using NestJS URI versioning

## Description

A small sample app showing how URI versioning can be implemented using [NestJS](https://docs.nestjs.com/).

## Installation

Clone the repository.

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

No tests are implemented just hit the routes using [HTTPie](https://httpie.io/cli), [Postman](https://www.postman.com/), [curl](https://curl.se/) or the weapon of your choise.

## Routes

```bash
# Different versions
GET http://localhost:3030/v1/cats
GET http://localhost:3030/v2/cats

# Same verions
GET http://localhost:3030/v1/dogs
GET http://localhost:3030/v2/dogs

# Version neutral
GET http://localhost:3030/health

```

## License

None
