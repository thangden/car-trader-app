const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setupDB() {
	const db = await sqlite.open({
		filename: 'cars.sqlite',
		driver: sqlite3.Database,
	});

	await db.migrate({ force: 'last' });

	const faqs = await db.all('SELECT * FROM FAQ ORDER BY createdDate DESC');
	console.log('Total Faqs', faqs.length);

	const cars = await db.all('SELECT * FROM Car');
	console.log('Total Cars', cars.length);
}

setupDB();
