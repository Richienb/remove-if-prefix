# Remove if prefix [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/remove-if-prefix/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/remove-if-prefix)

Remove an item from an object or array of objects if the key starts with a specific character.

[![NPM Badge](https://nodei.co/npm/remove-if-prefix.png)](https://npmjs.com/package/remove-if-prefix)

## Install

```sh
npm install remove-if-prefix
```

## Usage

```js
const removeIfPrefix = require("remove-if-prefix");

removeIfPrefix(
    {
        a: {
            _a: "a",
            b: 1
        },
        _b: ["b"]
    },
    "_"
);
//=> { a: { b: 1 } }
```

## API

### removeIfPrefix(obj, prefix)

#### obj

Type: `object or array`

The object or array to handle.

#### prefix

Type: `string`

The prefix to check for.
