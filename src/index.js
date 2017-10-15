/**
 * System imports
 */
import express              from 'express';
import bodyParser           from 'body-parser';
import morgan               from 'morgan';
import Config               from './config';

/**
 * Project imports
 */
import routes               from './routes';
import responder            from './responder'

/**
 * Express application configuration
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
app.listen(8080, () => {
    console.log(`Listening to 8080`);
});