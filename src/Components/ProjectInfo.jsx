import { useRef } from "react";

export default function ProjectInfo(props) {
    const taskRef = useRef();
    const { name, description, date, id } = props.selectedProject;
    const indexListTask = props.listTasks?.findIndex(item => item.parentId === id);

    const handleAddTask = (e) => {
        e.preventDefault();
        if(taskRef.current.value !== null && taskRef.current.value !== ''){
            props.onAddTask(id, taskRef.current.value)
            taskRef.current.value = ""
        }
    }

    const handleDelete=()=>{
        props.onDeleteProject(id)
    }

    const handleShowTask = () => {
        if (indexListTask === -1) {
            return <></>
        }
        
        let listOfTasks = props.listTasks[indexListTask].listTask?.map((item, index) => {
            return <li key={Math.random() + `${item}`} className="flex justify-between my-4">
                <p className=" font-bold text-stone-700">{item}</p>
                <button onClick={() => { props.onRemoveTask(index, indexListTask) }} className="font-semibold text-stone-700">Clear</button>
            </li>
        })
        return listOfTasks
    }




    return <>
        <div>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-stone-700 mb-4">{name}</h2>
                <button onClick={handleDelete} className="px-6 py-2 font-semibold text-stone-700">Delete</button>
            </div>
            <p className="mb-4 flex items-center justify-between font-semibold text-stone-400">
                {date}
            </p>
            <p className="text-left mb-4 font-semibold text-stone-600">
                {description}
            </p>
            <hr className="h-px border-t bg-stone-300" />
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
            </div>
            <p className="flex items-center">
                <input ref={taskRef} className="w-64 px-2 py-1 rounded-sm bg-stone-200"></input>
                <button onClick={handleAddTask} className="text-stone-600 px-4 font-bold hover:text-stone-950">Add Task</button>
            </p>
            {props.listTasks?.length > 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
                {handleShowTask()}
            </ul>}
        </div>
    </>
}