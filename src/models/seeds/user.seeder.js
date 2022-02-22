const db = require('../index');
const User = db.user;

exports.userSeed = () => {
  User.create({
    name: 'Fakhry',
    email: 'fakhry@mail.com',
    phone: '90364422',
    password: '$2a$08$Ri25LYKfKRAHBBFhh4B0BuRerhMRAuxkW0WbmFMkpWPOEULmKe6hy',
  });
};