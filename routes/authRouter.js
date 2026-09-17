const express = require('express')
const _ = express.Router()
const {registrationController,loginController,verifyEmailController,forgotPassword,resetPassword} = require('../controllers/authController')



_.post('/registration',registrationController)
_.post('/login',loginController)
_.post('/verify/:token',verifyEmailController)
_.post('/forgot-password',forgotPassword)
_.post('/reset-password/:token',resetPassword)

// swagger for registrartion 
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user account.
 *     tags:
 *       - Authentication
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterRequest'
 *
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *
 *       400:
 *         description: Validation error or email already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
_.post("/registration", registrationController);

// swager for login
/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     description: Authenticate a user and return a JWT token.
 *     tags:
 *       - Authentication
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginRequest'
 *
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *
 *       401:
 *         description: Invalid email or password
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
_.post("/login",loginController);
// swagger for verify token
/**
 * @swagger
 * /auth/verify/{token}:
 *   get:
 *     summary: Verify user email
 *     description: Verify a user's email address using the verification token.
 *     tags:
 *       - Authentication
 *
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: Email verification token
 *         schema:
 *           type: string
 *         example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *
 *     responses:
 *       200:
 *         description: Email verified successfully
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
 *                   example: Email verified successfully
 *
 *       400:
 *         description: Invalid or expired verification token
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
 *                   example: Invalid or expired verification token
 *
 *       404:
 *         description: User not found
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
 *         description: Internal server error
 */
_.get("/verify/:token", verifyEmailController);
// swagger for forgot password
/**
 * @swagger
 * /auth/forgot-password:
 *   post:
 *     summary: Request password reset
 *     description: Send a password reset link/token to the user's email address.
 *     tags:
 *       - Authentication
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email address associated with the account
 *                 example: "hanif@example.com"
 *
 *     responses:
 *       200:
 *         description: Password reset request processed successfully
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
 *                   example: Password reset link sent successfully
 *
 *       400:
 *         description: Invalid email or validation error
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
 *                   example: Please provide a valid email address
 *
 *       404:
 *         description: User not found
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
 *         description: Internal server error
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
_.post("/forgot-password",forgotPassword );

// seagger for reset-password
/**
 * @swagger
 * /auth/reset-password/{token}:
 *   post:
 *     summary: Reset user password
 *     description: Reset a user's password using a valid password reset token.
 *     tags:
 *       - Authentication
 *
 *     parameters:
 *       - in: path
 *         name: token
 *         required: true
 *         description: Password reset token received from the password reset email.
 *         schema:
 *           type: string
 *         example: "a8f72c91d4e5f67890123456789abcdef"
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *               - password_confirmation
 *             properties:
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: New password for the user.
 *                 example: "NewPassword123!"
 *               password_confirmation:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: Must match the new password.
 *                 example: "NewPassword123!"
 *
 *     responses:
 *       200:
 *         description: Password reset successfully.
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
 *                   example: Password reset successfully
 *
 *       400:
 *         description: Invalid or expired reset token, or password validation failed.
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
 *                   example: Invalid or expired password reset token
 *
 *       404:
 *         description: User associated with the reset token was not found.
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
_.post("/reset-password/:token", resetPassword);



module.exports = _