/**
 * @class RequestHandler
 * @description A class that handles all the server side CRUD operations
 * @template T
 * @param {Model<T>} Model - The mongoose model
 * @param {T[]} Cache - The cache array
 * @example
 * const requestHandler = new RequestHandler(UserModel, UserCache);
 */
import { Model } from "mongoose";
import { NextResponse } from "next/server";

/**
 * @class RequestHandler
 * @description A class that handles all the server side CRUD operations
 * @template T
 * @property {Model<T>} Model - The mongoose model
 * @property {T[]} Cache - The cache array
 */
class RequestHandler {
  /**
   * @constructor
   * @param {Model<T>} Model - The mongoose model
   * @param {T[]} Cache - The cache array
   */
  constructor(Model, Cache) {
    this.Model = Model;
    this.Cache = Cache;
  }

  /**
   * @function GetAll
   * @description Get all the data from the database
   * @returns {NextResponse} - The response with the data or error
   */

  async GetAll() {
    try {
      if (process.env.NEXT_PUBLIC_STATUS === "dev") {
        return NextResponse.json(
          { data: this.Cache },
          {
            status: 200,
          }
        );
      } else {
        const data = await this.Model.find();
        return NextResponse.json({ data }, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }

  /**
   * @function Get
   * @description Get a single data from the database
   * @param {string} id - The id of the data
   * @returns {NextResponse} - The response with the data or error
   */
  async Get(id) {
    try {
      if (process.env.NEXT_PUBLIC_STATUS === 'dev') {
        const document = this.Cache.find((doc) => doc._id === id);
        if (document) {
          return NextResponse.json(
            { document },
            {
              status: 200,
            }
          );
        }
      } else {
        const document = await this.Model.findOne({ _id: id });
        if (!document) {
          return NextResponse.json({ message: "Not Found" }, { status: 404 });
        }
        return NextResponse.json < T > ({ document }, { status: 200 });
      }
    } catch (error) {
      console.error(error);
      return this.ErrorResponse(error);
    }
  }

     /**
    * @function ErrorResponse
    * @description A utility function to return an error response
    * @param {Error} err - The error object
    * @returns {NextResponse} - The response with the error
    */
   ErrorResponse(err) {
      return NextResponse.json({ message: 'Error', err }, { status: 500 });
   }
}

export default RequestHandler;
