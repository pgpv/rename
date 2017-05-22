# rename-property

> Renames properties. Work in objects or arrays.

## Install

```
$ npm install --save rename-property
```

## Usage

```js
const rename = require('rename-property');

thisismyobject = { thisisaproperty: "abc" };
rename.property( thisismyobject, "thisisaproperty", "thisisanotherproperty" );

-> thisismyobject = { thisisanotherproperty: "abc" }
```

## License

ISC
