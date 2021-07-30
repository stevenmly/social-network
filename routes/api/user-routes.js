const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    addFriend,
    updateUser,
    deleteUser,
    removeFriend
} = require('../../controllers/user-controller');

// GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// ADD or DELETE friend
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

module.exports = router; 