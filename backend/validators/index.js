const Joi = require('joi')

function bodySchema(req, res, next) {

    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        manufacturer: Joi.string().required(),
        release_year: Joi.number().required(),
        sold: Joi.boolean().required(),
    });
    
    // schema options
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    
    // validate request body against schema
    const { error, value } = schema.validate(req.body, options);
    
    if (error) {
        // on fail return comma separated errors
        // next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
        res.status(422).json({
            message: `Validation error: ${error.details.map(x => x.message).join(', ')}`
        })
    } else {
        // on success replace req.body with validated value and trigger next middleware function
        req.body = value;
        next();
    }
}

module.exports = {
    bodySchema,
}