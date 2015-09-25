import express from 'express';

import Login from './login';
import Signups from './signups';
import DefaultCall from './default-call';

const router = express.Router();

router.use('/login', Login);
router.use('/signups', Signups);
router.use('/*', DefaultCall);

export default router;
