const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation')

const validateContactUs = [
    check('name')
        .notEmpty()
        .withMessage('Please provide your name'),
    check('email')
        .notEmpty()
        .isEmail()
        .withMessage('Please provide a valid email'),
    check('phone')
        .optional()
        .isMobilePhone()
        .withMessage('Please provide a valid phone number'),
    check('message')
        .notEmpty()
        .withMessage('Please provide a bried message'),
    handleValidationErrors
];


module.exports = {
    validateContactUs
}
