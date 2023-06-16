const { HttpError } = require('../helper');
 

const validateBody = (schema) => async (req, res, next) => {
    const { path } = req.route;
    const { error } = schema.validate(req.body);
    if (error && path === "/:contactId/favorite") {
      next(HttpError(400, "Missing field favorite"));
    }
    if (error) {
      next(HttpError(400, "Missing required name field"));
    }
    next();
  };
 

module.export = validateBody;