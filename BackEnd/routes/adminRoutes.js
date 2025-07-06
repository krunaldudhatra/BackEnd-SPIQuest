import express from 'express'
import {
  createBranch, updateBranch, deleteBranch,
  createSubject, assignSubjectsToSemester,
  updateSubject, deleteSubject
} from '../controllers/adminController.js'
import { checkAdmin } from '../middleware/checkAdmin.js';
const router = express.Router()

// Branch routes
router.post('/branches',checkAdmin,createBranch)
router.put('/branches/:id',checkAdmin, updateBranch)
router.delete('/branches/:id',checkAdmin, deleteBranch)

// Subject routes
router.post('/subjects',checkAdmin, createSubject)
router.put('/subjects/:id',checkAdmin, updateSubject)
router.delete('/subjects/:id',checkAdmin, deleteSubject)

// Assign subjects to semester
router.post('/branches/:branch_id/semester/:semester_no/assign',checkAdmin, assignSubjectsToSemester)

export default router
