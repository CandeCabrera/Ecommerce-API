const db = require("../utils/database");
const { DataTypes } = require("sequelize");


/**
 * @openapi
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           readOnly: true 
 *           example: 1
 *         name:
 *           type: string
 *           example: iPhone 14
 *         price:
 *           type: integer
 *           example: 1000
 *         productImage:
 *           type: string
 *           example: http://www.pexels.com/image
 *         availableQty:
 *           type: integer
 *           example: 150
 *         status:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: integer
 *           example: 1
 *     create:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: iPhone 14
 *         price:
 *           type: integer
 *           example: 1000
 *         productImage:
 *           type: string
 *           example: http://www.pexels.com/image
 *         availableQty:
 *           type: integer
 *           example: 150
 *         status:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: integer
 *           example: 1
 *     getStock:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: iPhone 14
 *         price:
 *           type: integer
 *           example: 1000
 *         productImage:
 *           type: string
 *           example: http://www.pexels.com/image
 *         availableQty:
 *           type: integer
 *           example: 150
 *         status:
 *           type: boolean
 *           example: true
 *         userId: 
 *           type: integer,
 *           example: 1
 *         user:
 *          type: object
 *          properties:
 *            username:
 *              type: string,
 *              example: Juana
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

const Product = db.define(
    "product",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
     name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productImage:{
        type: DataTypes.STRING,
        field: "product_image",
        allowNull: true
      },
      availableQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      userId: {
      field: "user_id",
      type: DataTypes.INTEGER,
      // allowNull: false,
    }
    }
  );
  
  module.exports = Product;
  