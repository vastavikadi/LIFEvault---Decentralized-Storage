import React, { useState, useEffect } from 'react';
import img1 from "../../assets/SignUpImage.png";

const TaskReminder = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const userEmail = localStorage.getItem('userEmail');

  const addTask = async (e) => {
    e.preventDefault();

    if (!taskName || !taskTime) {
      alert('Please enter both task name and time.');
      return;
    }

    const newTask = {
      name: taskName,
      time: new Date(taskTime),
      email: userEmail,
    };

    try {
      const response = await fetch('https://backend-lifevault.vercel.app/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const savedTask = await response.json();
        setTasks((prevTasks) => [...prevTasks, savedTask]);
        setTaskName('');
        setTaskTime('');
      } else {
        alert('Failed to add task');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the task.');
    }
  };


  const sortedTasks = tasks.sort((a, b) => new Date(a.time) - new Date(b.time));

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 mt-12 relative"
      style={{
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>
      <div className="relative bg-white bg-opacity-50 backdrop-blur-md rounded-xl shadow-2xl p-10 w-full max-w-md text-center transition-all duration-300 transform hover:scale-105">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Task Reminder</h1>
        <p className="mb-6 text-gray-600 text-lg">Keep your task reminder!</p>
        <form onSubmit={addTask} className="flex flex-col space-y-4">
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter each and every plant task..."
            required
            className="p-4 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
          />
          <input
            type="datetime-local"
            value={taskTime}
            onChange={(e) => setTaskTime(e.target.value)}
            required
            className="p-4 border border-blue-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition transform hover:-translate-y-1 duration-200"
          >
            Add Task
          </button>
        </form>
        <ul className="mt-8 space-y-4">
          {sortedTasks.length > 0 ? (
            sortedTasks.map((task) => (
              <li key={task.id} className="bg-blue-50 bg-opacity-80 p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 duration-200">
                <p className="font-semibold text-blue-700">{task.name}</p>
                <p className="text-gray-500 text-sm">Due: {new Date(task.time).toLocaleString()}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No tasks added yet.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TaskReminder;