import { useState, useRef } from "react";
import UserProjects from "./components/UserProjects";
import NewProject from "./components/NewProjectModal";

function App() {
  const [projects, setProjects] = useState([]);
  const dialog = useRef(); 

  function openNewProject(){
      dialog.current.open();
  }

  function handleNewProjectSubmitted(newProject) {
    setProjects((prevProjects) => {
      const newProjectId = prevProjects.length > 0 ? prevProjects[prevProjects.length - 1].id + 1 : 1;

      const project = {
        id: newProjectId,
        ...newProject,
      };
      return [project, ...prevProjects];
    });
  }

  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <main className="h-screen my-8 flex gap-8">
      <NewProject
            ref={dialog}
            handleSubmit={handleNewProjectSubmitted} />
        <UserProjects
        handleOpenNewProject={openNewProject}
          projects={projects}/>
        
        <div className="w-2/3 text-center mt-24">
            <img 
                src="src\assets\no-projects.png" 
                alt="clipboard indicating no project selected"
                className="w-16 h-16 object-contain mx-auto"/>
            <h2>No Project Selected</h2>
            <p className="text-base">Select a project or get started with a new one</p>
            <button className="btn-common" onClick={openNewProject}>Create new project</button>
        </div>
      </main>
    </>
  );
}

export default App;
