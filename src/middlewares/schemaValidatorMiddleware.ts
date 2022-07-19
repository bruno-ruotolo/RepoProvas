import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export function schemaValidator(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error) return res.status(422).send(error.details.map(detail => detail.message));

    next();
  };
};