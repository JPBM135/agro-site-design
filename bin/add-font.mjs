import { readFileSync, writeFileSync } from 'node:fs';
import Readline from 'node:readline/promises';
import scaper from 'metadata-scraper';

const font = Readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const fontName = await font.question('Font url: ');
font.close();

if (!fontName) {
	console.log('Please enter a font url');
	process.exit(1);
}

console.log('Extracting metadata...');

const scraped = await scaper(fontName);

console.log('Metadata extracted!', scraped);

const database = readFileSync('./public/fonts-metadata.json', 'utf8');

const json = JSON.parse(database);

json.push({
	...scraped,
	url: fontName
});

console.log('Saving metadata...');

writeFileSync('./public/fonts-metadata.json', JSON.stringify(json, null, 2));
