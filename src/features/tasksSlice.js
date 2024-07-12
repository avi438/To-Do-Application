import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];


//   Slice for managing tasks with Redux
 
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.unshift({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        },
        toggleTask: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        editTask: (state, action) => {
            const task = state.find(task => task.id === action.payload.id);
            if (task) {
                task.text = action.payload.newTask;
            }
        },
    },
});

export const { addTask, deleteTask, toggleTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;
