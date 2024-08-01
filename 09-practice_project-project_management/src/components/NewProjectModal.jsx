import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const NewProject = forwardRef(
    function NewProject({ handleSubmit }, ref) {
        const dialog = useRef();

        useImperativeHandle(ref, () => {
            return {
                open() {
                    dialog.current.showModal();
                }
            }
        });

        const handleSubmitClicked = (event) => {
            event.preventDefault();
            const project = {
                title: event.target.title.value,
                description: event.target.description.value,
                dueDate: event.target.dueDate.value,
              };
            handleSubmit(project);
            closeModal();
        }

        function closeModal() {
            dialog.current.close();
        }

        return createPortal(
            <dialog ref={dialog} className="w-2/3 backdrop:bg-slate-900/90 p-6 rounded-lg">
                <section id="user-input">
                    <form onSubmit={handleSubmitClicked}  className="flex flex-col gap-3">
                        <label className="text-sm font-bold uppercase text-stone-500">
                            Title
                            <input type="text" name="title" className="w-full p-1 bg-stone-200 rounded-sm text-stone-600 border-b-2 border-stone-300 focus:outline-none "/>
                        </label>
                        <label className="text-sm font-bold uppercase text-stone-500">
                            Description
                            <textarea type="text" name="description" className="w-full h-16 p-1 bg-stone-200 rounded-sm text-stone-600 border-b-2 border-stone-300 focus:outline-none "/>
                        </label>
                        <label className="text-sm font-bold uppercase text-stone-500">
                            Due Date
                            <input type="date" name="dueDate" className="w-full p-1 bg-stone-200 rounded-sm text-stone-600 border-b-2 border-stone-300 focus:outline-none "/>
                        </label>
                        <div className="flex justify-end pt-6">
                            <button 
                                type="button"
                                onClick={() => dialog.current.close()}
                                className="bg-stone-50 text-stone-900 px-3 py-2 mx-3">
                                    Cansel
                                </button>
                            <button type="submit" className="bg-stone-900 text-stone-50 rounded-md px-3 py-2">Save</button>
                        </div>
                    </form>
                </section>
            </dialog>,
            document.getElementById('modal-root')
        );
    });

export default NewProject;