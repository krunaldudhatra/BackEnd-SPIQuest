import express from 'express';
import {
  getAllBranches,
  getSemesterData,
  getSubjectData,
  getAllSubjects
} from '../controllers/branchController.js';

const router = express.Router();
router.get('/branches', getAllBranches);
router.get('/branch/:branch_id', getSemesterData);
router.get('/branch/:branch_id/semester/:semester_no', getSubjectData);
router.get('/subjects', getAllSubjects);

export default router;
