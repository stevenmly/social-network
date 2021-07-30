const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thought-controller')


// GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

// ADD reaction
router
    .route('/:thoughtId/reactions')
    .post(addReaction)

// DELETE reaction
router
    .route('/:thoughtId/:reactionId')
    .delete(removeReaction)

module.exports = router; 