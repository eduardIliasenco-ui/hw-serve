import httpStatusCodes from './status-codes';
import HttpException from './HttpException';

export class NotFoundException extends HttpException {
  constructor(objectOrError, description = "Not Found") {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        httpStatusCodes.NOT_FOUND
      ),
      httpStatusCodes.NOT_FOUND
    );
  }
}

export class BadRequestException extends HttpException {
  constructor(objectOrError, description = "Bad Request") {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        httpStatusCodes.BAD_REQUEST
      ),
      httpStatusCodes.BAD_REQUEST
    );
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(objectOrError, description = "Internal Server Error") {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        httpStatusCodes.INTERNAL_SERVER_ERROR
      ),
      httpStatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

export class UnauthorizedException extends HttpException {
  constructor(objectOrError, description = "Unauthorized") {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        httpStatusCodes.UNAUTHORIZED
      ),
      httpStatusCodes.UNAUTHORIZED
    );
  }
}

export class ForbiddenException extends HttpException {
  constructor(objectOrError, description = "Forbidden") {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        httpStatusCodes.FORBIDDEN
      ),
      httpStatusCodes.FORBIDDEN
    );
  }
}

export class ImATeapotException extends HttpException {
  constructor(objectOrError, description = "I am a Teapot") {
    super(
      HttpException.createBody(
        objectOrError,
        description,
        httpStatusCodes.IM_A_TEAPOT
      ),
      httpStatusCodes.IM_A_TEAPOT
    );
  }
}