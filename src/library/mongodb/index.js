// const {dbConfig} = require("../../config/index");
const apolloConfig = require("../apollo")
const mongoose = require("mongoose");

// const { MongoClient } = require("mongodb");


module.exports = async (app, Log) => {
	const apolloConf = await apolloConfig();
	const item = process.env.NODE_ENV == "dev" ? "devdb" : "prddb";
	const dbConfig = apolloConf[item]
	const { url, user, password, database, auth } = dbConfig;
	const connectUrl = `mongodb://${user}:${password}@${url}/${database}?authSource=${auth}`;

	console.log("connectUrl----", connectUrl);
	mongoose.set("useCreateIndex", true);
	mongoose.connect(
		`${connectUrl}`,
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		},
		(err, db) => {
			if (err) {
				Log("white", `\n---- 数据库链接失败 start-- - \n`);
				Log("cyan", `${err} `);
				Log("cyan", `\n---- 数据库链接失败 end-- - \n`);
			} else {
				// 打印 +URL
				Log("white", "\n ----  数据库  Running At --- \n");
				Log("cyan", ` - Mongodb: ${connectUrl}  \n`);
				// Log("cyan", ` - db: ${db}  \n`);

				//
			}
		},
	);

	// const client = new MongoClient(connectUrl);
	// async function main() {
	// 	// Use connect method to connect to the server
	// 	await client.connect();
	// 	console.log("Connected successfully to server");
	// 	const db = client.db("httpinfo_monitor_ebs_grs");
	// 	const collection = db.collection("documents");
	// 	console.log("db---", db);
	// 	const stats = db.collection.dataSize();
	// 	// the following code examples can be pasted here...

	// 	return stats;
	// }

	// main()
	// 	.then(console.log)
	// 	.catch(console.error)
	// 	.finally(() => client.close());

	// Log("white", "\n ----  数据库  MongoClient err --- \n", err);
	// Log("white", "\n ----  数据库  MongoClient At --- \n");
	// const collection = db.collection("httpinfo_monitor_ebs_grs");

	// // 使用stats()方法获取集合大小
	// const stats = collection.stats();
	// console.log(`Collection size: ${stats.size} bytes`);

	// // 使用dataSize()方法获取集合大小
	// const dataSize = collection.dataSize();
	// console.log(`Collection size: ${dataSize} bytes`);

	// // 使用totalSize()方法获取集合总大小
	// const totalSize = collection.totalSize();
	// console.log(`Collection total size: ${totalSize} bytes`);
};
