const {Router} = require ('express');
const authenticate = require ('../middlewares/auth.middleware');
const { getStock, create, createProduct } = require('../controllers');

const router = Router ();

/**
 * @openapi
 * /api/v1/products/create:
 *   post:
 *     summary: Create a product to sell 
 *     tags: [Product]
 *     requestBody:
 *       description: To create a new product to sell you need a name, price, image, quantity, status and a id
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/products"
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
 *                     $ref: "#/components/schemas/create"
 * /api/v1/products:
 *   get:
 *     summary: Get all products to buy 
 *     tags: [Product]
 *     requestBody:
 *       description: To get and see all the products 
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/products"
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
 *                     $ref: "#/components/schemas/getStock"
 */

router.post('/products/create',authenticate, createProduct);
router.get('/products',authenticate, getStock);


module.exports = router;