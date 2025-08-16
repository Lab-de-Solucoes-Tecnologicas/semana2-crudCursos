import { Router } from 'express'

import CourseController from '../controllers/CourseController.js'

const router = Router()

router.get('/', CourseController.getAllCourses)
router.post('/', CourseController.createCourses)
router.put('/:id', CourseController.getParams)

export default router