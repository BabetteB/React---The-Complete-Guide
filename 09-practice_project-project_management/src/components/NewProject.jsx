import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAddProject, onCancelAddProject}) {
    const modalRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = dueDateRef.current.value;
        
        if (
            enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modalRef.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            title: enteredTitle,
        })
    }

    return ( <>
        <Modal ref={modalRef} buttonCaption='ok'> 
            <h2 className='text-xl font-bold my-4'>Invalid input</h2>
            <p className="text-stone-400 mb-4">Have you forgotten an input?</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button 
                    onClick={onCancelAddProject}
                    className="bg-stone-50 text-stone-800 px-3 py-2 mx-3 hover:text-stone-950">
                            Cansel
                    </button></li>
                <li><button 
                        onClick={handleSave}
                        className="bg-stone-800 text-stone-50 rounded-md px-6 py-2 hover:bg-stone-950">
                            Save
                    </button></li>
            </menu>

            <div>
                <Input ref={titleRef} label='Title' type='text'/>
                <Input ref={descriptionRef} label='Description' isTextarea></Input>
                <Input ref={dueDateRef} label='Due Date' type='date' ></Input>
            </div>
        </div>
    </>);
}