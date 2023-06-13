import React, {useEffect, useState} from 'react'
import Task from './Task';



const Home = () => {

    const initialArr = localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];

    const [tasks, setTasks] = useState(initialArr);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const submitHandler = (e)  => {
        e.preventDefault();
        if(title.match(/^ *$/) !== null || description.match(/^ *$/) !== null){
            alert("Enter Something"); 
            
        }
        else{
            setTasks([...tasks, { title, description }]);
            setTitle("");
            setDescription("");
        }
    }

    const deleteTask = (index) => {
        const remainingArr = tasks.filter((val, ind) => {
            return ind !== index;
        });

        setTasks(remainingArr);
    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className='container'>
            <h1>DAILY PROBLEMS</h1>

            <form onSubmit = {submitHandler} >
                <input 
                type="text" 
                placeholder = "Title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                />
                
                <textarea 
                placeholder = "Description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} > 
                </textarea>

                <button type="submit"> ADD </button>
            </form>

            {tasks.map((task, index) => (
                <Task 
                key = {index}
                task = {task}  
                deleteTask = {deleteTask}
                index = {index}/>
            ))}

        </div>
    );
}

export default Home