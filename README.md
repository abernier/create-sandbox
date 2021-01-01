Command to create a standard CRA, but:
- with a random name
- open VScode automatically on it
- choose a random port between `[3000..4000]`

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