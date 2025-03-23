import { useRef } from "react";

export default function FormCreate(props) {
    const inputClasses = "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    const labelClasses = "text-left text-sm font-bold uppercase text-stone-500";
    const titleRef =useRef();
    const descriptionRef =useRef();
    const dateRef =useRef();
    
    const handleSaveForm = (e)=>{
        e.preventDefault()
        let dataOutput = {
            name: titleRef.current.value,
            description: descriptionRef.current.value,
            date: dateRef.current.value,
            id: Math.random() + `${dateRef.current.value}`
        }  
        props.onSave(dataOutput)
    }
    
    return <>
        {!props.showFormCreate ?
            <div>
                <img src="/logo.png" className="w-16 h-16 object-contain mx-auto"></img>
                <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
                <p className="text-stone-500 mb-4">Select a project or get started with a new one</p>
                <button onClick={props.onShow} className="px-4 py-2 mt-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                    Create new project
                </button>
            </div> :
            <div>
                <form className="mt-4 text-right">
                    <p>
                        <button onClick={props.onClose} className="px-6 py-2">Cancel</button>
                        <button onClick={handleSaveForm} className="px-6 py-2 rounded-md 
                        bg-stone-800 text-stone-50 hover:bh-stone-950">Save</button>
                    </p>
                    <p className="flex flex-col gap-1 my-4">
                        <label className={labelClasses} htmlFor="title">Title</label>
                        <input ref={titleRef} className={inputClasses} id="title" type="text" />
                    </p>
                    <p className="flex flex-col gap-1 my-4">
                        <label className={labelClasses} htmlFor="description">Description</label>
                        <textarea ref={descriptionRef} className={inputClasses} name="" id="description"></textarea>
                    </p>
                    <p className="flex flex-col gap-1 my-4">
                        <label className={labelClasses}htmlFor="date">Date</label>
                        <input ref={dateRef} className={inputClasses} type="date" name="" id="date"></input>
                    </p>
                </form>
            </div>
        }
    </>
} 