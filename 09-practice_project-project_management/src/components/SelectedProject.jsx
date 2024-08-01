export default function SelectedProject({ project, handleDeleteProject }) {

    const handleDeleteProjectClicked = (event) => {
        
    }

    const clearTasks = (event) => {
        const task = event.value;
    }

    return <>
        <h1>{project.title}</h1>

        <button onClick={handleDeleteProjectClicked}>Delete</button>

        <h4>{project.dueDate}</h4>

        <p>
            {project.description}
        </p>

        <div className="divide-x divide-solid"></div>
        
        <h2>Tasks</h2>

        <div>
            <input 
                type="text" 
                placeholder="Todo" 
                className="m-2 p-1 focus:border-blue-500"/>
            <button>Add Task</button>
        </div>

        <ul>
           {project.tasks.forEach(tasks => {
                <li className="bg-neutral-400 rounded-lg">
                    <p>{tasks.title}</p>
                    <button>Clear</button>
                </li>
            })
           }
        </ul>
        
    </>

}