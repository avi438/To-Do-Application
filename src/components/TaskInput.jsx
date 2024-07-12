import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasksSlice';

//  *Component for adding a new task
 
const TaskInput = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim()) {
            dispatch(addTask(task));
            setTask('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                placeholder="Enter a task" 
                onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
};

export default TaskInput;
