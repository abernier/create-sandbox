[![NPM version](https://img.shields.io/npm/v/@abernier/create-sandbox.svg?style=flat)](https://www.npmjs.com/package/@abernier/create-sandbox)

> It's codesandox but as a local command-line!

Command to create a standard CRA, but:
- with a random project-name (if no-one given)
- launch VScode automatically on `src/App.js`
- choose a random port between `[3000..4000]` to launch the localhost hot-reload server

# Usage

The following command will create a new `random-name-2345` project into `.`

```
$ npm init @abernier/sandbox
```

or

```
$ yarn create @abernier/sandbox
```

## Alternative usage

### Specify a existing folder

```
$ npm init @abernier/sandbox ~/tmp
```

A `random-name-2345` will be created inside `~/tmp` and your CRA created into.

### Specify a non-existing folder

```
$ npm init @abernier/sandbox ~/code/rosie
```

A `rosie` folder will be created and your CRA created into.

NB: no random name here as you specify a non-existing folder name

### `npx`

Alternatively to you could just:

```
$ npx @abernier/create-sandbox
```

but this is less cool

# Publish to NPM

Ready to publish a new version to NPM registry?

## Manually

1. bump the `package.json` version
2. `npm login` if not already
3. `npm publish`

If successful, you should want to tag the version:
```shell
$ git add package.json
$ git commit -m "bump version"
$ git tag v1.0.1
$ git push --tags
```

## Using [CI](https://github.com/abernier/create-sandbox/actions?query=workflow%3Aci) workflow

Pre-requisite:
1. Generate a new NPM access token on [npmjs.com](https://www.npmjs.com/) (you need a NPM account and be logged-in)
2. Set it as `NPM_TOKEN` secret (in `Settings > Secrets` and as referenced into [`ci.yml`](https://github.com/abernier/create-sandbox/blob/master/.github/workflows/ci.yml#L37) file)

---

Then, to release a new version on [npm](https://www.npmjs.com/package/create-sandbox):
1. bump the [`package.json` version](https://github.com/abernier/create-sandbox/edit/master/package.json)
2. then, create [a new realese](https://github.com/abernier/create-sandbox/releases/new) and wait for the [ci](https://github.com/abernier/create-sandbox/actions?query=workflow%3Aci) publish it :)
   ![](https://assets.codepen.io/67030/release.png)
