export class Database {
    constructor(connection) {
        this.connection = connection;
    }

    connect() {
        this.connection.connect();
    }
}