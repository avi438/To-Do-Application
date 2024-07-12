import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask, editTask } from '../features/tasksSlice';


//  Component for displaying and managing the list.
//  Features edit and delete buttons for each task.

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [editingTask, setEditingTask] = useState(null);
    const [editedText, setEditedText] = useState("");

    // Deletes a task based on its ID, deletion animation.
    const handleDelete = (id) => {
        // Add 'deleting' class to animate removal
        const listItem = document.getElementById(`task-${id}`);
        if (listItem) {
            listItem.classList.add('deleting');
            setTimeout(() => {
                dispatch(deleteTask(id));
            }, 200);
        }
    };

    // Toggles the completion status.
    const handleToggle = (id) => {
        dispatch(toggleTask(id));
    };

    // Sets the task ID to be edited.
    const handleEdit = (id, text) => {
        setEditingTask(id);
        setEditedText(text);
    };

    // Saves the edited task text.
    const handleSave = (id) => {
        dispatch(editTask({ id, newTask: editedText }));
        setEditingTask(null);
        setEditedText("");
    };

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} id={`task-${task.id}`} className={task.completed ? 'complete' : ''}>
                    {/* Checkbox for task completion */}
                    <input 
                        type="checkbox" 
                        checked={task.completed} 
                        onChange={() => handleToggle(task.id)} 
                    />
                    {/* Task text display or edit input */}
                    {editingTask === task.id ? (
                        <input
                            type="text"
                            value={editedText}
                            onChange={(e) => setEditedText(e.target.value)}
                            onBlur={() => handleSave(task.id)}
                            autoFocus
                        />
                    ) : (
                        <span>{task.text}</span>
                    )}
                    {/* Buttons for edit and delete actions */}
                    <div>
                        <button className="edit" onClick={() => handleEdit(task.id, task.text)}>Edit</button>
                        <button className="delete" onClick={() => handleDelete(task.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TaskList;
