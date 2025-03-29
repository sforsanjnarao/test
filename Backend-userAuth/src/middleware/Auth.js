const jwt = require('jsonwebtoken');
const userModel = require('../models/user.models');

module.exports.userAuth = async (req, res, next) => {
    try {
        const authHead = req.headers.authorization;

        if (!authHead || !authHead.startsWith('Bearer ')) {
            return res.status(400).json({ message: 'You must be logged in' });
        }

        const token = authHead.split(' ')[1];
        const data = jwt.verify(token, 'sanjana');

        const user = await userModel.findById(data._id).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user;  // Store user details in req.user
        console.log(data);
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};