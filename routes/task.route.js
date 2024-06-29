const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

router.get('/:projectId', taskController.getTasks);
router.get('/:projectId/:taskId', taskController.getTask);
router.post('/', taskController.createTask);
router.put('/:taskId', taskController.updateTask);
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;
