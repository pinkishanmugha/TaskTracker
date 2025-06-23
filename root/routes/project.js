// backend/routes/project.js
import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { addProject, getAllProjects ,deleteProject,updateProject} from '../controllers/projectController.js';

const router = express.Router();

router.post('/add', authMiddleware, addProject);
router.get('/all', authMiddleware, getAllProjects);
router.delete('/delete/:id', authMiddleware, deleteProject);
router.put('/update/:id', authMiddleware, updateProject);
export default router;
