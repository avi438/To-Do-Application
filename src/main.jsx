import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './features/tasksSlice';
import App from './App';
import './index.css';

// Configure Redux store
const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

// Persist tasks to local storage
store.subscribe(() => {
    localStorage.setItem('tasks', JSON.stringify(store.getState().tasks));
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
