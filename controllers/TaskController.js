const TaskModel = require("../models/Task");

const taskController = {
    createTask: async(req,res)=>{
        try {
            const {title} = req.body;
            if(!title || title.length < 3){
                return res.status(400).json({error:"no tiene título o es demasiado corto"});
            }
            const task = await TaskModel.create({title});
            res.status(201).json({data:task,message:"tarea creada"});
        } catch (error) {
            console.error(error);
            res.status(500).json({error:"Error en el servidor"});
        }
    },
    getAllTasks: async (req,res)=>{
        try {
            const tasks = await TaskModel.find();
            res.json( {data:tasks,message:"listado de tareas"});
        } catch (error) {
            console.error(error);
            res.status(500).json({error:"Error en el servidor"});
        }
    },
    getTaskById: async(req,res)=>{
        try {
            const id = req.params._id;
            const task = await TaskModel.findById(id);
            if(!task){
                return res.status(404).json({error:"tarea no encontrada"});
            }
            res.json({data:task,message:"tarea encontrada"});
        } catch (error) {
            console.error(error);
            res.status(500).json({error:"Error en el servidor"});
        }

    },
    markAsCompleted: async(req,res)=>{
        try {
            const id = req.params._id;
            const task = await TaskModel.findById(id);
            if(!task){
                return res.status(404).json({error:"tarea no encontrada"});
            }
            task.completed = true;
            await task.save();
            res.json({data:task,message:"tarea completada"});
        } catch (error) {
            console.error(error);
            res.status(500).json({error:"Error en el servidor"});
        }
    },
    changeTitle: async(req,res)=>{
        try {
            const id = req.params._id;
            const newTitle = req.body.title;
            const oldTask = await TaskModel.find({title});
            if(oldTask){
                return res.status(400).json({error:"ya existe una tarea con ese titulo"})
            }
            const task = await TaskModel.findById(id);
            if(!task){
                return res.status(404).json({error:"tarea no encontrada"});
            }
            task.title = newTitle;
            await task.save();
            res.json({data:task,message:"título modificado"});
        } catch (error) {
            console.error(error);
            res.status(500).json({error:"Error en el servidor"});
        }
    },
    deleteTask: async(req,res)=>{
        try {
            const id = req.params._id;
            const deletedTask = await TaskModel.findByIdAndDelete(id);
            res.json({data:deletedTask,message:"tarea borrada"});

        } catch (error) {
            console.error(error);
            res.status(500).json({error:"Error en el servidor"});
        }
    }
}

module.exports = taskController;