# [SnowyOwls.ca](https://www.snowyowls.ca)

[![Begin build status](https://buildstatus.begin.app/friend-3ps/status.svg)](https://begin.com)

- Production: https://www.snowyowls.ca
- Staging: https://staging.snowyowls.ca

## Setup

```
npm install
```

You also need to install dependencies for the HTTP functions:

```
cd src/http/get-recent
npm install

cd src/http/post-analytics
npm install
```

## eBird Token

You need to request an [eBird API Token](https://ebird.org/api/keygen). Set the
value of your token in a new file, `.arc-env`:

```
@testing
API_KEY your-token-here
```

## Development

To start a local development server:

```
npm run dev
```

Navigate to http://localhost:3000. Use `ctrl+c` twice to kill the two servers.

## Testing

To run linting and tests:

```
npm run lint
npm test
```

## Building

To build a production bundle in `out/`:

```
npm run build
```

## Deploying

To deploy to staging, push to the `main` branch. [Staging](https://staging.snowyowls.ca) is always running what's on `main`.

To deploy to production, create a tag:

```
git tag -a 1.x.y -m "v1.x.y"
git push origin 1.x.y
```

## Notes

- if new HTTP functions are added to `src/http/*`, remember to also add rewrite rules to the custom dev server for local development: [dev.js](dev.js)
- make sure the entire dev environment stays under ~500M. Use `npm run size` to check it.
