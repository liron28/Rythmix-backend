import { dbService } from '../../services/db.service.js'

import mongodb from 'mongodb'
const {ObjectId} = mongodb

export const userService = {
    query,
    addUser,
    getUserById,
    getUserByUsername,
    updateUser,
    deleteUserById
}

async function query(){
    try {
        const collection = await dbService.getCollection('user')
        var userCursor = await collection.find()
        const users = userCursor.toArray()
        return users
    } catch (err) {
        
    }
}

async function addUser(user){
    try {
        const { username, password, fullname } = user
        const newEmptyUser = _getEmptyUser()
        const fullUser = {...newEmptyUser, username, password, fullname}
        const collection = await dbService.getCollection('user')
        const response = await collection.insertOne(fullUser)
        return response
    } catch (err) {
        
    }
}

async function getUserById(userId){
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({_id : ObjectId.createFromHexString(userId)})
        return user
    } catch (err) {
        
    }
}

async function getUserByUsername(username){
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ username })
        return user
    } catch (err) {
        
    }
}




async function updateUser(user){
    try {
        const userToSave = {
            fullname : user.fullname,
            imgUrl : user.imgUrl,
            likedSongs : user.likedSongs,
            username : user.username,
        }
        const collection = await dbService.getCollection('user')
        const response = await collection.updateOne({_id: ObjectId.createFromHexString(user._id)}, {$set : userToSave})
        return response
    } catch (err) {
        
    }
}

async function deleteUserById(userId){
    try {
        const collection = await dbService.getCollection('user')
        const response = await collection.deleteOne({_id : ObjectId.createFromHexString(userId)})
        return response
    } catch (err) {
        
    }
}


function _getEmptyUser(){
    return {
        imgUrl: "http://some-photo/",
        likedSongs : []
      }
}


