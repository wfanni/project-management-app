import { useState } from "react";

import AddButton from "./components/AddButton";
import AddProjectForm from "./components/AddProjectForm";
import Aside from "./components/Aside";
import CreateNewProject from "./components/CreateNewProject";
import EditProject from "./components/EditProject";

import cover from './assets/projects-cover.jpg';

const PROJECTS = [];

export default function App() {
  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [projectSelected, setProjectSelected] = useState();
  const [projectIndex, setProjectIndex] = useState();

  function handleAdd() {
    setFormVisible(true);
    setIsProjectSelected(false);
  }

  function handleClose() {
    setFormVisible(false);
    setIsProjectSelected(false);
  }

  function handleSelect(project, index) {
    setIsProjectSelected(true);
    setFormVisible(false);
    setProjectSelected(project);
    setProjectIndex(index);
  }

  function handleDelete(index) {
    PROJECTS.splice(index, 1);
    console.log("project at " + index + " index deleted");
    setFormVisible(false);
    setIsProjectSelected(false);
  }

  function handleSave(newTitle, newDesc, newDate) {
    if (PROJECTS.length === 0) {
      const project = {};
      project["title"] = newTitle;
      project["description"] = newDesc;
      project["dueDate"] = newDate;
      project["tasks"] = [];
      PROJECTS.push(project);
    } else {
      PROJECTS.push({
        title: newTitle,
        description: newDesc,
        dueDate: newDate,
        tasks: [],
      });
    }
  }
  console.log(PROJECTS);
  console.log(projectSelected);

  return (
    <div className="font-main">
      <img className="h-[200px] w-full object-cover" src={cover} />
      <main className="h-screen w-full -mt-8 flex gap-8">
        <Aside>
          <AddButton onAdd={handleAdd} />
          {PROJECTS.length > 0 && (
            <ul>
              {PROJECTS.map((project, index) => (
                <li key={project.title} className="font-semibold ">
                  <button
                    onClick={() => handleSelect(project, index)}
                    className={`w-full text-left px-2 py-1 rounded-sm my-1 border-2 border-transparent hover:border-[#4d1a45] ${projectSelected === project ? "bg-[#4d1a45] text-slate-50 focus-out:bg-transparent focus-out:text-[#4d1a45]" : null}`}
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Aside>
        <div className="w-2/4 mt-16 mr-8">
          {!formVisible && !isProjectSelected ? (
            <CreateNewProject onAdd={handleAdd} />
          ) : null}
          {!formVisible && isProjectSelected && projectSelected ? (
            <EditProject
              index={projectIndex}
              project={projectSelected}
              onDelete={handleDelete}
              tasks={PROJECTS[projectIndex].tasks}
            />
          ) : null}
          {formVisible && !isProjectSelected ? (
            <AddProjectForm onSave={handleSave} onClose={handleClose} />
          ) : null}
        </div>
      </main>
    </div>
  );
}
