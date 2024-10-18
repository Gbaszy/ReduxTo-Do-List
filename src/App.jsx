
import AddTask from './AddTask';
import TaskList from './TaskList';

const App = () => {
  return (
    <div className="App">
      <h1>Redux To-Do List</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
