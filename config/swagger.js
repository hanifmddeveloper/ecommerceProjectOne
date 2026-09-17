const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.3",

    info: {
      title: "My API",
      version: "1.0.0",
      description: "Complete API documentation and testing with Swagger UI",
    },

    servers: [
      {
        url: "http://localhost:5000/api",
        description: "Local development server",
      },
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },

      schemas: {
        RegisterRequest: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: {
              type: "string",
              example: "Md Hanif",
            },
            email: {
              type: "string",
              format: "email",
              example: "hanif@example.com",
            },
            password: {
              type: "string",
              format: "password",
              example: "Password123!",
            },
          },
        },

        LoginRequest: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: {
              type: "string",
              format: "email",
              example: "hanif@example.com",
            },
            password: {
              type: "string",
              format: "password",
              example: "Password123!",
            },
          },
        },

        User: {
          type: "object",
          properties: {
            id: {
              type: "string",
              example: "64f123456789",
            },
            name: {
              type: "string",
              example: "Md Hanif",
            },
            email: {
              type: "string",
              example: "hanif@example.com",
            },
          },
        },

        AuthResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            message: {
              type: "string",
              example: "Login successful",
            },
            token: {
              type: "string",
              example: "eyJhbGciOiJIUzI1NiIs...",
            },
            user: {
              $ref: "#/components/schemas/User",
            },
          },
        },

        ErrorResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            message: {
              type: "string",
              example: "Something went wrong",
            },
          },
        },
      },
    },

    tags: [
      {
        name: "Authentication",
        description: "Registration, login, logout and current user APIs",
      },
      {
        name: "Users",
        description: "User management APIs",
      },
    ],
  },

  apis: [
    "./routes/*.js",
],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;