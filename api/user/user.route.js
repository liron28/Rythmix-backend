import express from 'express'

import { getUsers, getUserById, addUser, updateUser,deleteUser } from './user.controller.js'


const router = express.Router()

router.get('/', getUsers)
router.get('/:userId', getUserById)
// router.post('/', addUser)
router.put('/:userId', updateUser)
router.delete('/:userId', deleteUser)

export const userRoutes = router