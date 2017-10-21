import { Database } from "./database";
import { Mongo } from "./mongo";

export default class Db {
    static connect() {
        const db = new Database(new Mongo());
        db.connect();
    }
}