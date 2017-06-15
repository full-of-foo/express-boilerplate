import {Router} from 'express';
import config from '../../../config';

const apiRouter = Router();

apiRouter.get('/', (req, res) => {
    res.json({
        version: config.version,
        env: config.env
    });
});

export default apiRouter;
