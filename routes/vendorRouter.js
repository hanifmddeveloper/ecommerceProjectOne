const express = require('express')
const _ = express.Router()
const {vendorController} = require('../controllers/vendorController')



_.post('/create/product',vendorController)
// swagger for vendor can create product
/**
 * @swagger
 * /create/product:
 *   post:
 *     summary: Create a product
 *     description: Create a new product for the authenticated vendor.
 *     tags:
 *       - Products
 *
 *     security:
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *                 description: Product name.
 *                 example: "Wireless Headphones"
 *
 *               description:
 *                 type: string
 *                 description: Product description.
 *                 example: "High quality wireless headphones with noise cancellation."
 *
 *               price:
 *                 type: number
 *                 format: float
 *                 description: Product price.
 *                 example: 59.99
 *
 *               category:
 *                 type: string
 *                 description: Category ID.
 *                 example: "65a123456789"
 *
 *               quantity:
 *                 type: integer
 *                 description: Available product quantity.
 *                 example: 50
 *
 *               image:
 *                 type: string
 *                 description: Product image URL.
 *                 example: "https://example.com/images/headphones.jpg"
 *
 *     responses:
 *       201:
 *         description: Product created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Product created successfully
 *                 product:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "65b123456789"
 *                     name:
 *                       type: string
 *                       example: "Wireless Headphones"
 *                     description:
 *                       type: string
 *                       example: "High quality wireless headphones with noise cancellation."
 *                     price:
 *                       type: number
 *                       example: 59.99
 *                     category:
 *                       type: string
 *                       example: "65a123456789"
 *                     quantity:
 *                       type: integer
 *                       example: 50
 *                     image:
 *                       type: string
 *                       example: "https://example.com/images/headphones.jpg"
 *
 *       400:
 *         description: Invalid product data.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Product name, price and category are required
 *
 *       401:
 *         description: Unauthorized. Authentication token is required.
 *
 *       404:
 *         description: Category not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Category not found
 *
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Internal server error
 */
_.post("/create/product", vendorController);




module.exports = _