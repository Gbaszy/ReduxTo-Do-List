/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch({ type: 'EDIT_TASK', payload: { id: task.id, description: updatedDescription } });
    setIsEditing(false);
  };

  return (
    <div className='task' style={task.isDone ? styles.doneTask : styles.task}>
      {isEditing ? (
        <form onSubmit={handleUpdate} className='form' id='form1'>
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      ) : (
        <>
          <span onClick={handleToggle} style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

const styles = {
  task: {
    padding: '10px',
    border: '1px solid #ccc',
    margin: '10px 0',
  },
  doneTask: {
    padding: '1px',
    border: '1px solid #ccc',
    margin: '10px 0',
    textDecoration: 'line-through',
    color: 'gray',
  },
};

export default Task;
