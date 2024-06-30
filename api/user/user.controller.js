import { userService } from "./user.service.js"

export async function getUsers(req,res){
    const users = await userService.query()
    res.status(200).send(users) 
}

export async function getUserById(req,res){
    const userId = req.params.userId
    const user = await userService.getUserById(userId)
    res.status(200).send(user)
}

export async function addUser(req,res){
    const user = req.body
    const response = await userService.addUser(user)
    res.status(200).send(response)
}

export async function updateUser(req,res){
    const user = req.body
    const response = await userService.updateUser(user)
    console.log(response)
    res.status(200).send(response)
}

export async function deleteUser(req,res){
    const userId = req.params.userId
    const response = await userService.deleteUserById(userId)
    res.status(200).send(response)
}