import express from 'express';
const router = express.Router();

/*
 * GET users listing.
 */
router.get('/', (req, res) => {
  res.send('respond with a users resource');
});

export default router;
