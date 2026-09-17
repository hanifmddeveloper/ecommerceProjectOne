const express = require('express')
const _ = express.Router()
const {userController,createCategogyController,getAllCategoryController,updatCategoryController,deleteUserController} = require('../controllers/userController')



_.get('/user/product',userController)
_.post('/create/category',createCategogyController)
_.get('/all/category',getAllCategoryController)
_.post('/update/category/:id',updatCategoryController)
_.delete('/delete/category/:id',deleteUserController)

// swagger for user can create progut
/**
 * @swagger
 * /user/product:
 *   get:
 *     summary: Get user products
 *     description: Retrieve all products associated with the authenticated user.
 *     tags:
 *       - Products
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: User products retrieved successfully.
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
 *                   example: User products retrieved successfully
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "65a123456789"
 *                       name:
 *                         type: string
 *                         example: "Product One"
 *                       description:
 *                         type: string
 *                         example: "Product description"
 *                       price:
 *                         type: number
 *                         example: 99.99
 *                       quantity:
 *                         type: integer
 *                         example: 10
 *
 *       401:
 *         description: Unauthorized. Authentication token is required.
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
 *                   example: Unauthorized
 *
 *       404:
 *         description: No products found for this user.
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
 *                   example: No products found
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
_.get("/user/product", userController);
// swagger for create category 
/**
 * @swagger
 * /create/category:
 *   post:
 *     summary: Create a category
 *     description: Create a new product category.
 *     tags:
 *       - Categories
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
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the category.
 *                 example: "Electronics"
 *               description:
 *                 type: string
 *                 description: Description of the category.
 *                 example: "Electronic devices and accessories"
 *
 *     responses:
 *       201:
 *         description: Category created successfully.
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
 *                   example: Category created successfully
 *                 category:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "65a123456789"
 *                     name:
 *                       type: string
 *                       example: "Electronics"
 *                     description:
 *                       type: string
 *                       example: "Electronic devices and accessories"
 *
 *       400:
 *         description: Invalid category data.
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
 *                   example: Category name is required
 *
 *       409:
 *         description: Category already exists.
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
 *                   example: Category already exists
 *
 *       401:
 *         description: Unauthorized. Authentication token is required.
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
_.post("/create/category", createCategogyController);
// swagger for get all category
/**
 * @swagger
 * /all/category:
 *   get:
 *     summary: Get all categories
 *     description: Retrieve a list of all product categories.
 *     tags:
 *       - Categories
 *
 *     security:
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Categories retrieved successfully.
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
 *                   example: Categories retrieved successfully
 *                 categories:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "65a123456789"
 *                       name:
 *                         type: string
 *                         example: "Electronics"
 *                       description:
 *                         type: string
 *                         example: "Electronic devices and accessories"
 *
 *       404:
 *         description: No categories found.
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
 *                   example: No categories found
 *
 *       401:
 *         description: Unauthorized. Authentication token is required.
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
_.get("/all/category", getAllCategoryController);




module.exports = _