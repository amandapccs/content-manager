import { statusCode } from "../../statusCode/status-code";

export const errorNamesToStatusCode = {
  CANNOT_UPDATE: statusCode.INTERNAL_SERVER_ERROR,
  OK: statusCode.OK,
  CREATED: statusCode.CREATED,
  ACCEPTED: statusCode.ACCEPTED,
  NO_CONTENT: statusCode.NO_CONTENT,
  BAD_REQUEST: statusCode.BAD_REQUEST,
  UNAUTHORIZED: statusCode.UNAUTHORIZED,
  FORBIDDEN: statusCode.FORBIDDEN,
  NOT_FOUND: statusCode.NOT_FOUND,
  METHOD_NOT_ALLOWED: statusCode.METHOD_NOT_ALLOWED,
  PROXY_AUTHENTICATION_REQUIRED: statusCode.PROXY_AUTHENTICATION_REQUIRED,
  REQUEST_TIMEOUT: statusCode.REQUEST_TIMEOUT,
  CONFLICT: statusCode.CONFLICT,
  GONE: statusCode.GONE,
  LENGTH_REQUIRED: statusCode.LENGTH_REQUIRED,
  PRECONDITION_FAILED: statusCode.PRECONDITION_FAILED,
  PAYLOAD_TOO_LARGE: statusCode.PAYLOAD_TOO_LARGE,
  URI_TOO_LONG: statusCode.URI_TOO_LONG,
  UNSUPPORTED_MEDIA_TYPE: statusCode.UNSUPPORTED_MEDIA_TYPE,
  RANGE_NOT_SATISFIABLE: statusCode.RANGE_NOT_SATISFIABLE,
  EXPECTATION_FAILED: statusCode.EXPECTATION_FAILED,
  IM_A_TEAPOT: statusCode.IM_A_TEAPOT,
  MISDIRECTED_REQUEST: statusCode.MISDIRECTED_REQUEST,
  UNPROCESSABLE_ENTITY: statusCode.UNPROCESSABLE_ENTITY,
  INTERNAL_SERVER_ERROR: statusCode.INTERNAL_SERVER_ERROR,
  NOT_IMPLEMENTED: statusCode.NOT_IMPLEMENTED,
  SERVICE_UNAVAILABLE: statusCode.SERVICE_UNAVAILABLE,
  GATEWAY_TIMEOUT: statusCode.GATEWAY_TIMEOUT,
  HTTP_VERSION_NOT_SUPPORTED: statusCode.HTTP_VERSION_NOT_SUPPORTED,
  VARIANT_ALSO_NEGOTIATES: statusCode.VARIANT_ALSO_NEGOTIATES,
  INSUFFICIENT_STORAGE: statusCode.INSUFFICIENT_STORAGE,
  LOOP_DETECTED: statusCode.LOOP_DETECTED,
  NOT_EXTENDED: statusCode.NOT_EXTENDED,
  NETWORK_AUTHENTICATION_REQUIRED: statusCode.NETWORK_AUTHENTICATION_REQUIRED,
};