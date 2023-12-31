const usualString = 'some string';
const base64String = Buffer.from(usualString).toString('base64');

console.log(base64String);