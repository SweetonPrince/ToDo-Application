import '../App.css';
import React, { useEffect, useState } from 'react';
import { deleteTask, listTasks } from '../Services/TaskService';
import { useNavigate } from 'react-router-dom';

const ListTaskComponent = () => {
  const [tasks, setTasks] = useState([]);
 
  const navigator = useNavigate();

  useEffect(() => {
    getAllTask();
  }, []);

  function getAllTask() {
    listTasks()
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addNewTask() {
    navigator('/add-task');
  }

  function updateTask(id) {
    navigator(`/edit-task/${id}`);
  }

  function removeTask(id) {
    deleteTask(id)
      .then((response) => {
        getAllTask();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className='containered'>
      <h2 className='heading'>List Of Tasks</h2>
      <button onClick={addNewTask} className='Addtask'  class="btn btn-primary">Add Task</button>
<br /><br />
      <table className='table'>
        <thead className='theadtag'>
          <tr>
            <th>Task Id</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Task Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.completed}</td>
              <td className='up'>
                <button className='upe' class="btn btn-info" onClick={() => updateTask(task.id)}>Update</button>
                <button className='uped' class="btn btn-danger" onClick={() => removeTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTaskComponent;
