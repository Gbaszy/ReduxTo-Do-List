import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import "./Addtask.css";

const AddTask = () => {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      description,
      isDone: false,
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <button type="submit" id='btn1'>Add Task</button>
    </form>
  );
};

export default AddTask;
