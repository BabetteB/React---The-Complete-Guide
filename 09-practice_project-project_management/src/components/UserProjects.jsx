export default function UserProjects({ projects, handleOpenNewProject }) {
    return (
      <aside className="w-1/3 bg-stone-950 p-20 pl-8 justify-start rounded-tr-3xl gap-4 md:w-96">
        <h2 className="text-neutral-300 uppercase">Your Projects</h2>
        <button onClick={handleOpenNewProject} className="btn-common">
          + Add Project
        </button>
        <ul>
          {projects.map((project) => (
            <li key={project.id}
                className="text-neutral-400 text-xl m-1 p-1 hover:bg-neutral-900 hover:text-neutral-200">
                {project.title}
            </li>
          ))}
        </ul>
        
      </aside>
    );
  }
  