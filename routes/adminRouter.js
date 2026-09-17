const express = require('express')
const _ = express.Router()
const {allUserController,singalUserController,activeUserController,deactiveUserController,updateUserController,deleteUserController} = require('../controllers/adminController')



_.get('/all-user',allUserController)
_.get('/user/:id',singalUserController)
_.get('/active/user',activeUserController)
_.get('/deactive/user',deactiveUserController)
_.post('/update/user/:id',updateUserController)
_.delete('/delete/user/:id',deleteUserController)

// swagger for all user
/**
 * @swagger
 * /auth/all-user:
 *   get:
 *     summary: Get all users
 *     description: Retrieve a list of all registered users.
 *     tags:
 *       - Users
 *
 *     responses:
 *       200:
 *         description: Users retrieved successfully.
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
 *                   example: Users retrieved successfully
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *
 *       404:
 *         description: No users found.
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
 *                   example: No users found
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
_.get("/all-user", allUserController);
// swager for singal user
/**
 * @swagger
 * /auth/user/{id}:
 *   get:
 *     summary: Get a single user
 *     description: Retrieve a specific user by their ID.
 *     tags:
 *       - Users
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the user.
 *         schema:
 *           type: string
 *         example: "64f123456789"
 *
 *     responses:
 *       200:
 *         description: User retrieved successfully.
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
 *                   example: User retrieved successfully
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *
 *       400:
 *         description: Invalid user ID.
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
 *                   example: Invalid user ID
 *
 *       404:
 *         description: User not found.
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
 *                   example: User not found
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
_.get("/user/:id", singalUserController);
// swagger for active user
/**
 * @swagger
 * /auth/active/user:
 *   get:
 *     summary: Get active users
 *     description: Retrieve all users who are currently active.
 *     tags:
 *       - Users
 *
 *     responses:
 *       200:
 *         description: Active users retrieved successfully.
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
 *                   example: Active users retrieved successfully
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *
 *       404:
 *         description: No active users found.
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
 *                   example: No active users found
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
_.get("/active/user", activeUserController);
// Swagger for active users
/**
 * @swagger
 * /active/user:
 *   get:
 *     summary: Get active users
 *     description: Retrieve all currently active users.
 *     tags:
 *       - Users
 *
 *     responses:
 *       200:
 *         description: Active users retrieved successfully.
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
 *                   example: Active users retrieved successfully
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *
 *       404:
 *         description: No active users found.
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
 *                   example: No active users found
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
_.get("/active/user", activeUserController);
// swagger for deactive users
/**
 * @swagger
 * /deactive/user:
 *   get:
 *     summary: Get deactivated users
 *     description: Retrieve all users who are currently deactivated.
 *     tags:
 *       - Users
 *
 *     responses:
 *       200:
 *         description: Deactivated users retrieved successfully.
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
 *                   example: Deactivated users retrieved successfully
 *                 users:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *
 *       404:
 *         description: No deactivated users found.
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
 *                   example: No deactivated users found
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
_.get("/deactive/user", deactiveUserController);
// swagger for update user
/**
 * @swagger
 * /update/user/{id}:
 *   post:
 *     summary: Update user
 *     description: Update an existing user's information by user ID.
 *     tags:
 *       - Users
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the user to update.
 *         schema:
 *           type: string
 *         example: "64f123456789"
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name.
 *                 example: "Md Hanif"
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address.
 *                 example: "hanif@example.com"
 *               phone:
 *                 type: string
 *                 description: User's phone number.
 *                 example: "+8801700000000"
 *               password:
 *                 type: string
 *                 format: password
 *                 description: New password, if you want to change it.
 *                 example: "NewPassword123!"
 *
 *     responses:
 *       200:
 *         description: User updated successfully.
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
 *                   example: User updated successfully
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *
 *       400:
 *         description: Invalid user ID or invalid request data.
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
 *                   example: Invalid user data
 *
 *       404:
 *         description: User not found.
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
 *                   example: User not found
 *
 *       409:
 *         description: Email already exists.
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
 *                   example: Email already exists
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
_.post("/update/user/:id", updateUserController);
// swagger for delete
/**
 * @swagger
 * /delete/user/{id}:
 *   delete:
 *     summary: Delete user
 *     description: Delete a user permanently using their user ID.
 *     tags:
 *       - Users
 *
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Unique ID of the user to delete.
 *         schema:
 *           type: string
 *         example: "64f123456789"
 *
 *     responses:
 *       200:
 *         description: User deleted successfully.
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
 *                   example: User deleted successfully
 *
 *       400:
 *         description: Invalid user ID.
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
 *                   example: Invalid user ID
 *
 *       404:
 *         description: User not found.
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
 *                   example: User not found
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
_.delete("/delete/user/:id", deleteUserController);




module.exports = _