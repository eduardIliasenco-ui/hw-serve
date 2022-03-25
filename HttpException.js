export default class HttpException extends Error {
  constructor(response, status) {
    super();
    this.response = response;
    this.status = status;
    this.name = this.constructor.name;
  }
  
  static createBody(objectOrError, description, statusCode) {
    if (!objectOrError) {
      return { statusCode, message: description };
    }
    return typeof objectOrError === 'object' &&
      !Array.isArray(objectOrError)
      ? objectOrError
      : { statusCode, message: objectOrError, error: description };
  }
}