This is a sample repo to show that generated `package.json` file for Node apps will include imported dependencies, including ones from workspace dependencies.

```shell
npm i
npx nx build api
cat dist/apps/api/package.json
```

That should result in the following content:

```json
{
  "name": "api",
  "version": "0.0.1",
  "dependencies": {
    "express": "4.18.3",
    "lodash": "4.17.21",
    "morgan": "1.10.0",
    "pg": "8.12.0"
  },
  "main": "./main.js",
  "type": "commonjs"
}
```

Where, `morgan` and `pg` are imported in `apps/api/src/main.ts` as direct dependencies, and `lodash` is in `util/src/index.ts` as a dependency of a workspace dependency.

