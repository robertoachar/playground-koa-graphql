import config from './config';
import logger from './logger';

logger.info('Hello Config');
Object.keys(config).map((key) => logger.info(`${key}: ${config[key]}`));
