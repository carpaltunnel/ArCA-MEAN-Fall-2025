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
