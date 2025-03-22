function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
          <h2 className="mb-8 md:text-xl font-bold uppercase text-stone-200">
            Your Projects
          </h2>
          <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
            + ADD project
          </button>

          <ul className="mt-8">
            <li className="flex justify-between my-4">
              <button className="w-full text-left px-2 py-1 rounded-sm hover:bg-stone-800 hover:text-stone-200 ">
                Learning React
              </button>
            </li>
          </ul>

        </aside>
        <div className="mt-16 text-center w-2/3 ">
          {/* form create */}
          {false && <div>
            <form className="mt-4 text-right">
              <p className="">
                <button className="px-6 py-2">Cancel</button>
                <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bh-stone-950">save</button>
              </p>
              <p className="flex flex-col gap-1 my-4">
                <label className="text-left text-sm font-bold uppercase text-stone-500" htmlFor="title">Title</label>
                <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" id="title" type="text" />
              </p>
              <p className="flex flex-col gap-1 my-4">
                <label className="text-left text-sm font-bold uppercase text-stone-500" htmlFor="description">Description</label>
                <textarea className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" name="" id="description"></textarea>
              </p>
              <p className="flex flex-col gap-1 my-4">
                <label className="text-left text-sm font-bold uppercase text-stone-500" htmlFor="description">Description</label>
                <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="date" name="" id="description"></input>
              </p>
            </form>
          </div>}
          {/* pre show message */}
          {false && <div>
            <img src="/logo.png" className="w-16 h-16 object-contain mx-auto"></img>
            <h2 className="text-xl font-bold text-stone-700 my-4">No Project Selected</h2>
            <p className="text-stone-500 mb-4">Select a project or get started with a new one</p>
            <button className="px-4 py-2 mt-4 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
              Create new project
            </button>
          </div>}
          {/* Inside info created Project and task create */}
          <div>
            <p className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-stone-700 mb-4">THIS IS Title</h2>
              <button className="px-6 py-2 font-semibold text-stone-700">Delete</button>
            </p>
            <p className="mb-4 flex items-center justify-between font-semibold text-stone-400">
              Dec 29, 2024
            </p>
            <p className="text-left mb-4 font-semibold text-stone-600">
              w3review=At w3schools.com you will learn how to make a website.
              They offer free tutorials in all web development technologies.&nbsp;
            </p>
            <hr className="h-px border-t bg-stone-300" />
            <p className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-stone-700 mb-4">Task</h2>
            </p>
            <p className="flex items-center">
              <input className="w-64 px-2 py-1 rounded-sm bg-stone-200"></input>
              <button className="text-stone-600 px-4 font-bold hover:text-stone-950">Add Task</button>
            </p>
            <ul className="p-4 mt-8 rounded-md bg-stone-100">
              <li className="flex justify-between my-4">
                <p className=" font-bold text-stone-700">Learn the basics</p>
                <button className="font-semibold text-stone-700">Clear</button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
