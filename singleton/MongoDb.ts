export default class MongoDb {

    private constructor() {
    }

    private static instance: MongoDb;

    public static getInstance(): MongoDb {

        if (!MongoDb.instance)
            MongoDb.instance = new MongoDb();

        return MongoDb.instance;
    }

    connect() {
        console.log('MongoDb Connected...');
    }

}