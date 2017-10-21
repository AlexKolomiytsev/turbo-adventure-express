/**
 * System imports
 */
import express              from 'express';
import io                   from 'socket.io';
import http                 from 'http';
import bodyParser           from 'body-parser';
import morgan               from 'morgan';

/**
 * Project imports
 */
import routes               from './routes';
import responder            from './responder'
import config               from './config';

/**
 * Server
 */
class Server {

    constructor() {
        this.express = express;
        this.express.response = responder;

        this.port = config.get('/server/port');
        this.host = config.get('/server/host');
        this.nodeEnv = config.get('/node/nodeEnv');

        this.app = this.express();

        this.http = http.Server(this.app);
        this.socket = io(this.http);
    }

    appConfig() {
        //use body-parser so we can grab information from POST requests
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

        //configure our app to handle CORS requests
        this.app.use((req, res, next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
            next()
        });

        //log all requests to the console
        this.app.use(morgan('dev'));
    }

    setupRoutes() {
        this.app.use(...routes);
    }

    start() {
        this.appConfig();
        this.setupRoutes();

        this.app.listen(this.port, this.host, () => {
            console.log(`Server started at "${this.nodeEnv}" env on ${this.host}:${this.port}`)
        });
    }
}

/**
 * Run server
 */
new Server().start();

