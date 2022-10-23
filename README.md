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

## Examples/Scenarios

### Scenario #1 - Keeping it within the same controller

In this scenario we work within the same controller. Starting with version 1 we have a route `/v1/stuff` that calls `getStuff`that returns a string. For some reason we need to break compability and return an array of strings instead. So we create `getStuffV2` (feel free to use a better name) in the same controller that returns an array instead and keep the old `getStuff` function around.

The example controller shows a few different ways of going about this. The controller `multi-version-same-controller` shows how one could go about having multiple versions in the same controller. Either explicit using the `@Version` attribute for each function or falling back on the `defaultVersion: ['2', '1']` definition in `main.ts`.

The route `/stuff` has versions explicitly declared.
The route `/same-implicit` works with both versions by the `defaultVersion: ['2', '1']` defined in main.ts.
The route `/same-explicit` works with both version by explicitly declare it `@Version(['2', '1'])` on the function.
The route `/only-version-2` is available only under the v2 route.

#### Version 1

```bash
GET http://localhost:3030/v1/multi-version-same-controller/stuff
GET http://localhost:3030/v1/multi-version-same-controller/same-implicit
GET http://localhost:3030/v1/multi-version-same-controller/same-explicit
```

####Version 2

```bash
GET http://localhost:3030/v2/multi-version-same-controller/stuff
GET http://localhost:3030/v2/multi-version-same-controller/same-implicit
GET http://localhost:3030/v2/multi-version-same-controller/same-explicit
GET http://localhost:3030/v2/multi-version-same-controller/only-version-2
```

### Scenario #2 - A new controller

In this scenario we start with a controller: `version-one` with two routes: `/v1/foo` and `/v1/bar`. We tie this to the version on the controller level: `@Controller({ path: 'different-controllers', version: '1' })`.

Then we encounter business requirements that makes us have to break compability. In this scenario we create a new controller `version-two` that also have foo & bar but with different version prefix in the path: `/v2/foo` and `/v2/bar` by using the controll level attribute: `@Controller({ path: 'different-controllers', version: '2' })`

To show another example we also add `/baz` to the VersionTwoController and "back port" it to version 1 as well using `@Version(['2], [1])`.

#### Version 1

```bash
GET http://localhost:3030/v1/different-controllers/foo  # Returns a string
GET http://localhost:3030/v1/different-controllers/bar  # Returns a string
GET http://localhost:3030/v1/different-controllers/baz  # ONLY AVAILABLE AFTER WE IMPLEMENTED VersionTwoController  !!
```

#### Version 2

```bash
GET http://localhost:3030/v2/different-controllers/foo  # Returns an array strings
GET http://localhost:3030/v2/different-controllers/bar  # Returns a number
GET http://localhost:3030/v2/different-controllers/baz  # Same for both versions
```

### Scenario #3 - Version neutral

Sometimes routes that does not adhere to versioning are needed. Routes like `/health` or `/metrics`. Then one can use the `VERSION_NEUTRAL` version.

```bash
GET http://localhost:3030/health
```

## License

None
