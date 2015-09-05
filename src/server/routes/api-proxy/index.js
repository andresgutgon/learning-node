import express from 'express';

import users from './users';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.use('/users', users);

export default router;
