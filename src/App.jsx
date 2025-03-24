import { useRef, useState } from "react";
import FormCreate from "./Components/FormCreate";
import Menu from "./Components/Menu";
import ProjectInfo from "./Components/ProjectInfo";

function App() {
  const [showFormCreate, setShowFormCreate] = useState(false);
  const [listProject, setListProject] = useState([]);
  const [listTasks, setListTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState({});
  const [showProjectInfo, setShowProjectInfo] = useState(false)

  const handleOnSaveProject = (data) => {
    setListProject(prev => [...prev, data])
    handleCloseFormCreate();
  }

  const handleRemoveTask = (index, listIndex, parentId = null)=>{
    if(parentId !== null){
      setListTasks(prev=>{
        let data = [...prev];
        console.log(data);
        
        return data.filter(item=>item.parentId !== parentId)
      })
    }
    setListTasks(prev=>{
      let newData = [...prev];
      newData[listIndex] = {
        ...newData[listIndex],
        listTask: newData[listIndex]?.listTask.filter((_, i)=> i !== index)
      }
      return newData;
    })
  }
  
  const handleRemoveProject = (parentId)=>{
    setListProject(prev=>{
      let newData = [...prev];
      return newData.filter(item=>item.id !== parentId)
    })
    handleRemoveTask("","",parentId);
    setShowProjectInfo(false);
  }

  const handleModifyTasks = (parentId, task) => {
    setListTasks(prev => {
      let newData = [...prev]
      let index = newData.findIndex(item => item.parentId === parentId);
      if (index !== -1) {
        newData[index] = {
          ...newData[index],
          listTask: [...newData[index].listTask, task]
        }
      } else {
        newData.push({
          parentId: parentId,
          listTask: [task]
        });
      }
      return newData;
    })
  }

  const onSelectProject = (data) => {
    setSelectedProject(data)
    setShowProjectInfo(Object.hasOwn(data, "name"))
  }

  const handleShowFormCreate = (e) => {
    e.preventDefault();
    setShowFormCreate(true);
    setShowProjectInfo(false);
  }

  const handleCloseFormCreate = () => {
    setShowFormCreate(false)
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Menu
          onShow={handleShowFormCreate}
          listProject={listProject}
          onSelect={onSelectProject}
        />
        <div className="mt-16 text-center w-2/3 ">
          {!showProjectInfo && <FormCreate
            onClose={handleCloseFormCreate}
            onShow={handleShowFormCreate}
            onSave={handleOnSaveProject}
            showFormCreate={showFormCreate}
          />}
          {showProjectInfo &&
            <ProjectInfo
              onDeleteProject={handleRemoveProject}
              onRemoveTask={handleRemoveTask}
              listTasks={listTasks}
              onAddTask={handleModifyTasks}
              selectedProject={selectedProject} />}
        </div>
      </main>
    </>
  );
}

export default App;
