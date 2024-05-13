require('dotenv').config();

const name = process.env.MY_NAME || 'Oresti';
const city = process.env.MY_CITY || 'Epinal';
const language = process.env.MY_LANGUAGE || 'JS';

console.log(`I am ${name}, wilder in ${city}, and I love ${language}.`);