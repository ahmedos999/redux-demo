import React, { useEffect, useState } from 'react';
import { Appwrite } from 'appwrite';

const appwrite = new Appwrite();

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Fetch tasks from Appwrite database on component mount
    const fetchTasks = async () => {
      try {
        await appwrite.setProject('650f026a6ac5b8e7bd95').listDocuments('collections/tasks');
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const addTask = async () => {
    try {
      await appwrite
        .setProject('650f026a6ac5b8e7bd95')
        .createDocument('collections/tasks', {
          name: newTask,
          completed: false,
        });
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await appwrite
        .setProject('650f026a6ac5b8e7bd95')
        .deleteDocument('collections/tasks', taskId);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.$id}>
            {task.name}
            <button onClick={() => deleteTask(task.$id)}>Delete</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default Tasks;
