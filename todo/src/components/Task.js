import React, { useState, useReducer } from "react";
import { taskReducer, initialState } from "../reducers/taskReducer";

const Task = () => {
 
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [newTask, setNewTask] = useState("");

  const handleChanges = e => {
    setNewTask(e.target.value);
  };

  return (
    <div>
        <h2>TODO LIST USING REDUCERS</h2>
       <label>New To-Do</label>
       <input 
       type="text"
       name="newTaskName"
       value={newTask}
       onChange={handleChanges}
       />
       <button
       onClick={() => dispatch({
           type: "ADD_ITEM",
           payload: {item: newTask}
       })}>
           Add Item
       </button>
       

       <div className="todo-list">
           <ul>
               {state.map(item => (
                   <li>
                       <div className={`todo-item${item.completed ? "completed" : ""}`}
                       onClick={() => dispatch({
                           type:"TOGGLE_COMPLETED",
                           payload: item.id
                       })}>
                           {item.item}
                       </div>
                       
                   </li>
               ))}
           </ul>
       </div>
       <button
       className="completed"
       onClick={() => dispatch({
           type: "CLEAR_DONE"
       })}>
           Clear Completed Todos
       </button>
     
    </div>
  );
};

export default Task;
