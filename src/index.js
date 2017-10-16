/**
 * System imports
 */
import express              from 'express';
import io                   from 'socket.io';
import bodyParser           from 'body-parser';
import morgan               from 'morgan';
import Config               from './config';

/**
 * Project imports
 */
import routes               from './routes';
import responder            from './responder'

/**
 * ----------------------------------------------------------------
 * Express application configuration
 * ----------------------------------------------------------------
 */
express.response = responder;

const app = express();

//use body-parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configure our app to handle CORS requests
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next()
});

//log all requests to the console
app.use(morgan('dev'));

//routes for our API
app.use(...routes);

//start server
const server = app.listen(Config.get('/server/port'), () => {
    console.log(`Server started at "${Config.get('/node/nodeEnv')}" env on port ${Config.get('/server/port')}`)
});

/**
 * ----------------------------------------------------------------
 * Socket.io configurations
 * ----------------------------------------------------------------
 */
io(server);

