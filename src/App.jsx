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

  const handleModifyTasks = (parentId, task) => {
    setListTasks(prev => {
      let newData = [...prev]
      let index = newData?.length > 0 && newData.findIndex(item => item.parentId === parentId);

      if (index && index !== -1) {
        newData[index].listTask.push(task)
      } else {
        let data = {
          parentId: parentId,
          listTask: [task]
        }
        newData.push(data);
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
              listTasks={listTasks}
              onAddTask={handleModifyTasks}
              selectedProject={selectedProject} />}
        </div>
      </main>
    </>
  );
}

export default App;
