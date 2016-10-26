# tabson-cli

> CLI to convert a tab file (TSV) to JSON

[![npm](https://img.shields.io/npm/v/tabson-cli.svg?style=flat-square)](https://www.npmjs.com/package/tabson-cli)
[![npm](https://img.shields.io/npm/dt/tabson-cli.svg?style=flat-square)](https://www.npmjs.com/package/tabson-cli)

## Install

Install it using NPM:

```
$ npm install -g tabson-cli
```

## Usage

```
$ tabson [TAB_FILE] [JSON_FILE]
```

## Example

```
$ cat input.txt
col1	col2	col3	col4
element1.1	element1.2	element1.3	element1.4
element2.1	element2.2	element2.3	element2.4
element3.1	element3.2	element3.3	element3.4

$ tabson input.txt output.json

$ cat output.json
[
  {"col1":"element1.1","col2":"element1.2","col3":"element1.3","col4":"element1.4"},
  {"col1":"element2.1","col2":"element2.2","col3":"element2.3","col4":"element2.4"},
  {"col1":"element3.1","col2":"element3.2","col3":"element3.3","col4":"element3.4"}
]
```


## Related

- [tabson](https://github.com/jmjuanes/tabson): API for this CLI.

## License

[MIT LICENSE](./LICENSE) &copy; Josemi Juanes.
