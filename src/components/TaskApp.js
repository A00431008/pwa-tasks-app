import React, {useState, useEffect} from 'react';
import TaskList from './TaskList';

const TaskApp = () => {
    // UseState variables for tasks and newtask
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // useEffect Hook to fetch data from localstorage
    // Dependency array is empty and hence runs only once
    useEffect(() => {
            try {
                //fetch data from local storage and parse it to json
                const data = localStorage.getItem('tasks')
                var jsonData = JSON.parse(data);

                if(data == null) {
                    jsonData = [];
                    localStorage.setItem('tasks', JSON.stringify(jsonData));
                }
                
                //update the state of tasks with the json Data
                setTasks(jsonData)
                console.log("Data set to state")
                console.log(jsonData);
            } catch (error) {
                console.log(error)
            }
    }, []);

    // Use Effect Hook to update LocalStorate each time state of task changes
    useEffect(() => {
        if (tasks.length !== 0) {
            try {
                localStorage.setItem('tasks', JSON.stringify(tasks));
            } catch (err) {
                console.error("LocalStorage Update Failed", err);
            }
        }
    }, [tasks]);

    // Function to add task
    function addTask() {
        //Add task if newTask is not empty
        if (newTask.trim() !== '') {
            setTasks([...tasks, {
                id: Date.now(),
                text: newTask,
                priority: "Normal",
                completed: false
            }])
        };
        setNewTask('');
    }

    function deleteTask(taskID) {
        setTasks(tasks.filter(task => task.id !== taskID));
    }

    function toggleComplete(taskID) {
        setTasks(
            tasks.map((task) => 
                (task.id === taskID ) ? { ...task, completed: !task.completed } : task
            )
        );
    }

    function getNewPriority(currentPriority) {
        switch (currentPriority) {
            case "Normal":
                return "Low";
            case "Low":
                return "High";
            case "High":
                return "Normal"
            default:
                return "Normal"
        }
    }

    function changePriority(taskID) {
        setTasks(
            tasks.map((task) => 
                (task.id === taskID) ? { ...task, priority: getNewPriority(task.priority)} : task
            )
        );
    }

  return (
    <div className="col-11">
        <div className="container ">

            {/* Header */}
            <br />
            <h1 className="text-primary">Task App</h1>

            {/* Input Bar */}
            <div className="input-group">
                <input 
                    type='text'
                    className='form-control form-control-lg'
                    placeholder="Add a New Task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button 
                    className='btn btn-success'
                 onClick={addTask}>Add</button>
            </div>
            <br/>
            {/* View Tasks as List */}
            
            <TaskList 
                tasks={tasks}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
                changePriority={changePriority}
            />
            
            

        </div>
        
    </div>
  );
};

export default TaskApp;