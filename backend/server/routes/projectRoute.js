const router = require('express').Router();

const { verifyAccessToken } = require('../../utils/jwt');
const { createProject, updateProject, deleteProject, getProjects } = require('../controllers/projectController');

// Get all users Projects
router.get('/all', verifyAccessToken, getProjects);

// Create Project
router.post('/create', verifyAccessToken, createProject);

// Update Project
router.put('/update/:id', verifyAccessToken, updateProject);

// Delete Project
router.delete('/delete/:id', verifyAccessToken, deleteProject);

module.exports = router;