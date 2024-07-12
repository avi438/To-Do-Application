import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

//   Main application component
 
const App = () => {
    return (
        <div className="container">
            <h1>To-Do List</h1>
            <TaskInput />
            <TaskList />
        </div>
    );
};

export default App;
