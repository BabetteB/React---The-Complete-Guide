import noProjectImage from '../assets/no-projects.png'
import Button from './Button';

export default function NoProjectSelected({onStartAddProject}){
    return (
        <div className="w-2/3 text-center mt-24">
          <img 
              src={noProjectImage} 
              alt="clipboard indicating no project selected"
              className="w-16 h-16 object-contain mx-auto"/>

          <h2 className='text-xl font-bold my-4'>No Project Selected</h2>
          <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
          <p className="mt-8">
            <Button onClick={onStartAddProject}>Create new project</Button>
          </p>
      </div>
    );
}