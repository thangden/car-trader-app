const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

async function setupDB() {
	const db = await sqlite.open({
		filename: 'cars.sqlite',
		driver: sqlite3.Database,
	});

	await db.migrate({ force: 'last' });

	const faqs = await db.get('SELECT COUNT(*) as count FROM FAQ');
	console.log('Total Faqs', faqs.count);

	const cars = await db.get('SELECT COUNT(*) as count FROM Car');
	console.log('Total Cars', cars.count);
}

setupDB();
