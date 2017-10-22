/**
 * System imports
 */
import express              from 'express';
import io                   from 'socket.io';
import http                 from 'http';
import bodyParser           from 'body-parser';
import morgan               from 'morgan';
import cors                 from 'cors';

/**
 * Project imports
 */
import routes               from './routes';
import responder            from './responder'
import config               from './config';
import Database             from './database'

/**
 * Server
 */
class Server {

    constructor() {
        express.response    = responder;

        this.port           = config.get('/server/port');
        this.host           = config.get('/server/host');
        this.nodeEnv        = config.get('/node/nodeEnv');

        this.app            = express();
        this.http           = http.Server(this.app);
        this.socket         = io(this.http);
        this.database       = Database;
    }

    appConfig() {
        //use body-parser so we can grab information from POST requests
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

        //configure our app to handle CORS requests
        this.app.use(
            cors()
        );

        //log all requests to the console
        this.app.use(morgan('dev'));
    }

    dbConnect() {
        this.database.connect();
    }

    setupRoutes() {
        this.app.use(routes);
    }

    start() {
        this.appConfig();
        this.dbConnect();
        this.setupRoutes();

        this.app.listen(this.port, this.host, () => {
            console.log(`Server started at "${this.nodeEnv}" env on ${this.host}:${this.port}`)
        });
    }
}

/**
 * Run server
 */
const app = new Server();
app.start();

