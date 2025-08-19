# Script Parameters
Parameters, or command line arguments, are how we pass user defined settings into our scripts.  This functionality is available natively via the `process` module in the `argv` property.

## Native
`process.argv` will contain all of the arguments passed into your script.  Note that it contains every bit of the command executed, including `node` and the name or path of your script.  So, you can always expect to find those and likely can ignore them.  

```javascript
console.log(process.argv);
// Invoke with `node script.js param1 param2 param3`
```

Most people are familiar with passing command line flags to indicate the purpose of the parameter and to allow any order like `node script.js --database test --username myuser --password superSecretPassword`.  When using argv, every one of these will be an individual parameter, including the flags like `--database`.  You could write the logic to parse these... or you could let a module do it for you.

## Third Party Modules
There are a multitude of third party modules that provide extra functionality to argv.  You can, of course, use the native implementation to avoid package bloat but these will do a lot of the boilerplate work for you.  These are in no particular order and I don't necessarily recommend one over the others - it depends on what your use case is.

### [command-line-args](https://www.npmjs.com/package/command-line-args)
The simplest parameter helper module is probably [command-line-args](https://www.npmjs.com/package/command-line-args).  It's straightforward, easy to use, and does what you need.  Like the others, it allows you to support descriptive (--database) and simple (-d) parameters interchangeably.  Rather than parsing all of the parameters manually, you define an array of supported params and let it do the work for you.

```javascript
const commandLineArgs = require('command-line-args');
const optionDefinitions = [
    { name: 'database', alias: 'd', type: String },
    { name: 'username', alias: 'u', type: String },
    { name: 'password', alias: 'p', type: String },
    { name: 'numberOfConnections', alias: 'n', type: Number, defaultOption: 5 },
];
const params = commandLineArgs(optionDefinitions);
console.log(`Database param is ${params.database}, user is ${params.username}, pw is ${params.password}, and number of connections is ${params.numberOfConnections}`);

```

### [yargs](https://www.npmjs.com/package/yargs)
[yargs](https://www.npmjs.com/package/yargs) is more widely used and has more built in functionality... plus it's pirate themed.
```javascript
import yargs from 'yargs';
import { writeFileSync } from 'fs';

const argv = yargs(process.argv.slice(2))
.scriptName('yargs')
.usage('Usage: $0 --filename ./testfile.txt --numberOfItems 14 --json')
.example('Usage: $0 --filename ./testfile.txt --numberOfItems 14 --json')
.option('filename', {
  alias: 'f',
  type: 'string',
  description: 'Filename to store data',
  demandOption: '--filename is a required parameter',
})
.option('numberOfItems', {
  alias: 'n',
  type: 'number',
  description: 'Number of items to write to the file',
  default: 10,
})
.option('json', {
  alias: 'j',
  type: 'boolean',
  description: 'If specified, write data in JSON format',
})
.parse()
.showHelpOnFail();

// Destructure from argv
const { filename, numberOfItems, json } = argv;

console.log(`filename: ${filename}, numberOfItems : ${numberOfItems}, json : ${json}`)

const output = [];

for (let x = 0; x < numberOfItems; x += 1) {
  output.push(`${x}`);
}

let outputData = '';
if (json) {
  outputData = JSON.stringify(output, null, 2);
} else {
  outputData = output.join(',');
}

writeFileSync(filename, outputData, { encoding: 'utf8' });
```



### [Commander](https://www.npmjs.com/package/commander)
[Commander](https://www.npmjs.com/package/commander) is the most commonly used but doesn't differ much from yargs for general usage.

```javascript
const commander = require('commander');
const program = new commander.Command();

program
    .requiredOption('-d, --database <db>', 'Database to connect to')
    .requiredOption('-u, --username <un>', 'Username to connect with')
    .requiredOption('-p, --password <pw>', 'Password for username')
    .option('-n, --numberOfConnections <num>', 'Number of concurrent connections', 5);

program.parse();

console.log(`Database param is ${program.opts().database}, user is ${program.opts().username}, pw is ${program.opts().password}, and number of connections is ${program.opts().numberOfConnections}`);
```

## Closing
As you can see, they all do effectively the same thing but in slightly different ways.  Take a look at the full documentation and decide which one works best for your application.
