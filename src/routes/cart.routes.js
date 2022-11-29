const {Router} = require ('express');
const authenticate = require ('../middlewares/auth.middleware');
const { addToCart, getAllProductsInCart } = require('../controllers');

const router = Router ();

/**
 * @openapi
 * /api/v1/cart/{userId}:
 *   post:
 *     summary: Add a product to cart 
 *     tags: [Cart]
 *     requestBody:
 *       description: To add a product to cart you need the quantity and the product id
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/cart"
 *     responses:
 *       201:
 *         description: Created
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
 *                   items:
 *                     $ref: "#/components/schemas/addToCart"
 * /api/v1/cart/products/{userId}:
 *   get:
 *     summary: Get all products in cart 
 *     tags: [Cart]
 *     requestBody:
 *       description: To get and see all the products in cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/cart"
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
 *                   items:
 *                     $ref: "#/components/schemas/getAllProductsInCart"
 */

router.post('/cart/:userId',authenticate, addToCart);
router.get('/cart/products/:userId',authenticate, getAllProductsInCart);


module.exports = router;