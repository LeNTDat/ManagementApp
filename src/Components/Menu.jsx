export default function Menu(props) {

    let listProject = props.listProject?.map(item => {
        return <li key={item.id} className="flex justify-between my-4">
                <button onClick={()=>{props.onSelect(item)}} className="w-full text-left px-2 py-1 rounded-sm hover:bg-stone-800 hover:text-stone-200 ">
                    {item.name}
                </button>
            </li>
    })

    return <>
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 md:text-xl font-bold uppercase text-stone-200">
                Your Projects
            </h2>
            <button onClick={props.onShow} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                + ADD project
            </button>
            <ul>
                {listProject}
            </ul>

        </aside>
    </>
}