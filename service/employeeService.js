import Emp from "../model/employeeModel.js"

const createEmployee=async(req,res)=>{
    const {ename,email,emobile}=req.body;
    if(!ename || !email || !emobile)
    res.status(404).json({message:"Missing Fields"});
    else{
        try {
            const response=await Emp.create({ename,email,emobile});
            if(response)
            res.status(201).json({message:"Record succesfully created"});
            else
            res.status(201).json({message:"Unable to create record"});
        } catch (error) {
            res.json(error.message)
        }
    }
}

const getEmployees=async(req,res)=>{
    try {
        const e=await Emp.find();
        if(e.length!=0)
        res.status(200).json(e);
        else
        res.status(404).json({message:"No record found!"});
    } catch (error) {
        res.json(error.message)
    }
    
}

const getEmployee=async(req,res)=>{
    try {
        const e=await Emp.findById(req.params.id);
        if(e)
        res.status(200).json(e);
        else
        res.status(404).json({message:"No record found!"});
    } catch (error) {
        res.json(error.message)
    }
    
}

const updateEmployee=async(req,res)=>{
    try {
        const e=await Emp.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if(e)
        res.status(200).json({message:"Record Updated!"});
        else
        res.status(404).json({message:"No record found!"});
    } catch (error) {
        res.json(error.message);
    }
}

const deleteEmployee=async(req,res)=>{
    try {
        const e= await Emp.findByIdAndRemove(req.params.id);
        if(e)
        res.status(200).json({message:"Record deleted"});
        else
        res.status(404).json({message:"No record found"});
    } catch (error) {
        res.json(error);
    }
}

export {createEmployee,getEmployees,getEmployee,updateEmployee,deleteEmployee}






