import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createTask, getTask, updateTask } from '../Services/TaskService'
import '../App.css';
const TaskComponent = () => {

    const[title,setTitle] = useState('')
    const[description,setDescription] = useState('')
    const[completed,setCompleted] = useState('')


    const handleCompleted = (e) => setCompleted(e.target.value);

    const[errors,setErrors] = useState({
        title : '' ,
        description:'',
        completed:''
    })
    const {id} = useParams();
    const navigator = useNavigate();


    useEffect(() =>{
        getTask(id).then((response) =>{
            setTitle(response.data.title);
            setDescription(response.data.description);
            setCompleted(response.data.completed);
        }).catch(error => {
            console.error(error);
        })
    },[id]);

    function saveOrUpdateTask(e) {
        e.preventDefault();
      
        if (validateForm()) {
            const task = { title, description, completed };
    console.log(task); // Stops the function execution if validation fails

        if(id){
        updateTask(id,task).then((response)=>{
          console.log(response.data);
          navigator('/tasks');
        }).catch(error =>{
          console.error(error);
        })
      }
      else{
        createTask(task).then((response) => {
          console.log(response.data);
          navigator('/tasks');
        }).catch(error => {
          console.error(error);
        })
      }
    }
}
function validateForm(){
    let valid = true; 
    const errorsCopy = {...errors}
  
    if(title.trim()){
      errorsCopy.title='';
    }
    else{
      errorsCopy.title="Title  is required";
      valid=false;
    }
  
    if(description.trim()){
      errorsCopy.description='';
    }
    else{
      errorsCopy.description="description is required";
      valid=false;
    }
  
  
    if(completed.trim()){
      errorsCopy.completed = '';
    }
    else{
      errorsCopy.completed= "completed is Required"
    }
    
    setErrors(errorsCopy);
    
    return valid;
  
  }
  
  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Update Task</h2>;
    } else {
      return <h2 className='text-center'>Add Task</h2>;
    }
  }
    return (
        <div className='containerede'>
        <div className='row'>
         <div className='card col-md-6 offset-md-3 offset-md-3 '>
         {
          pageTitle()
         }
         <h2 className='text-center'></h2>
         <div className='card-body'>
          <form>
            <div className='form-group mb-2'>
              <label className='form-label'>Title</label>
              <input 
              type='text'
              placeholder='Enter Task title'
              name='title'
              value={title}
              className={`form-control ${errors.title ? 'is-invalid': ''}`}
              onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && <div className='invalid-feedback'>{errors.title}</div>}
            </div>
  
            <div className='form-group mb-2'>
              <label className='form-label'>Description</label>
              <input 
              type='text'
              placeholder='Enter Task Description'
              name='description'
              value={description}
              className={`form-control ${errors.description ? 'is-invalid': ''}`}
              onChange={(e) => setDescription(e.target.value)}
              />
               {errors.description && <div className='invalid-feedback'>{errors.description}</div>}
            </div>
  
            <div className='form-group mb-2'>
              <label className='form-label'>Task Completed Status  </label>
              <input 
              type='text'
              placeholder='Enter Task Completed or not'
              name='completed'
              value={completed}
              className={`form-control ${errors.completed ? 'is-invalid': ''}`}
              onChange={handleCompleted}
              />
              {errors.completed && <div className='invalid-feedback'>{errors.completed}</div>}
            </div>
  
            <button className='btn btn-success' onClick={saveOrUpdateTask}>Submit</button>
  
          </form>
         </div>
         </div>
        </div>
      </div>
  )
}

export default TaskComponent