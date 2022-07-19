type ErrorTypes = "conflict" | "not_found" | "unauthorized";

export interface AppError {
  type: ErrorTypes,
  message: string
};

export function isAppError(error: object): error is AppError {
  return (error as AppError).type !== undefined;
};

export function errorStatusCodes(type: ErrorTypes) {
  const statusCodeMap = new Map([
    ["conflict", 409],
    ["not_found", 404],
    ["unauthorized", 401],
    ["unprocessable_entity", 422],
    ["bad_request", 400]
  ]);

  if (statusCodeMap.has(type)) return statusCodeMap.get(type);

  return statusCodeMap.get("bad_request");
};

export function conflictError(message?: string) {
  return { type: "conflict", message };
};

export function notFoundError(message?: string) {
  return { type: "not_found", message };
};

export function unauthorizedError(message?: string) {
  return { type: "unauthorized", message };
};

export function badRequestError(message?: string) {
  return { type: "bad_request", message };
};

export function unprocessableEntityError(message?: string) {
  return { type: "unprocessable_entity", message };
};