const jwt = require('jsonwebtoken');

// future add the secret to a enviorment variable
const secret = 'mysecretsshhhh';
const expiration = '2h';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}