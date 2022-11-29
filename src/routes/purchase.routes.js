const {Router} = require('express');
const { purchase, getAll } = require('../controllers');
const authenticate = require('../middlewares/auth.middleware');

const router = Router();

/**
 * @openapi
 * /api/v1/purchase/{userId}:
 *   post:
 *     summary: Buy products in cart
 *     tags: [Purchase]
 *     responses:
 *       200:
 *         description: Accepted
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   schema:
 *                     $ref: "#/components/schemas/purchase"
 * /api/v1/purchases/{userId}:
 *   get:
 *     summary: Get all your purchases
 *     tags: [Purchase]
 *     parameters:
 *       - name: userId
 *         in: path
 *         description: inserta user id
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   schema:
 *                     $ref: "#/components/schemas/getAllPurchases"
 */

router.post('/purchase/:userId', authenticate, purchase);
router.get('/purchases/:userId', authenticate,  getAll);



module.exports = router;