const Task = require('../models/Task');



const getAllTasks = async(req , res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
    } catch (error) {
        res.status(500).json({msg : error});
    }
}
const getTask = async(req , res) => {
    try {
        const {id:taskId} = req.params ;
        const task  = await Task.findOne({_id:taskId});
        if(!task){
            return res.status(404).json({msg : `no task matches that id = ${taskId} `})
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg : error});
    }
}
const createTask = async(req , res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({msg : error});
    }
}

const updateTask = async(req , res) => {
    try {
        const {id:taskId} = req.params
        const task = await Task.findOneAndUpdate({_id:taskId} ,req.body , {
            new : true , 
            runValidators : true 
        })
        if(!task){
            return res.status(404).json({
                msg :`cannot find task with id:${taskId}`
            })
        }
        res.status(200).json({task});
    } catch (error) {
        res.status(500).json({msg : error})
    }
}
const deleteTask = async (req , res) => {
    try {
        const {id:taskId} = req.params ;
        const task = await Task.findOneAndDelete({_id : taskId});
        if(!task){
            return res.status(404).json({msg : `task with id : ${taskId} doesn't exist `})
        }
        res.status(200).json({msg : `the task with id : ${taskId} has been deleted`});
    } catch (error) {
        res.status(500).json({msg : error});
    }
}




module.exports = {
    getAllTasks,getTask ,createTask , updateTask , deleteTask
}