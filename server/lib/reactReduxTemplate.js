import {MongoClient} from 'mongodb';
import logger from './logger';

const reactReduxTemplate = () => {
    const url = 'mongodb://localhost:27017/react-redux-template';
    const options = { useNewUrlParser: true };

    logger('react-redux-template', 'Initializing database');

    return MongoClient.connect(url, options);
};

export default reactReduxTemplate;
