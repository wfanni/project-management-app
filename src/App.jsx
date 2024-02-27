import { useState, useEffect, useRef } from "react";

import AddButton from "./components/AddButton";
import AddProjectForm from "./components/AddProjectForm";
import Aside from "./components/Aside";
import CreateNewProject from "./components/CreateNewProject";
import EditProject from "./components/EditProject";

import cover from './assets/projects-cover.jpg';
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const PROJECTS = [];

export default function App() {
  
  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [formVisible, setFormVisible] = useState(false);
  const [projectSelected, setProjectSelected] = useState();
  const [projectIndex, setProjectIndex] = useState();
  const [isVisible, setIsVisible] = useState(true);

  function handleModalClose() {
      setIsVisible(false);
  }

  function handleAdd() {
    setFormVisible(true);
    setIsProjectSelected(false);
    setProjectSelected(null);
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
      project["tasks"] = {};
      project.tasks["new"] = [];
      project.tasks["completed"] = [];
      PROJECTS.push(project);
    } else {
      PROJECTS.push({
        title: newTitle,
        description: newDesc,
        dueDate: newDate,
        tasks: {new: [], completed: []}, 
      });
    }
  }
  return (
    <div className="font-main">
      <img className="h-[200px] w-full object-cover" src={cover} />
      {isVisible && <Modal onClose={handleModalClose} title="Hi There" description="Please note that this is a Demo app, still in development. Feel free to reach out to me with suggestions!" oneOption={true} actionButton="Okay, thanks"/>}
      <section className="-mt-8 flex gap-8">
        <Aside>
          <AddButton style={`${!isProjectSelected && formVisible ? "selected" : null}`} onAdd={handleAdd} />
          {PROJECTS.length > 0 && (
            <ul>
              {PROJECTS.map((project, index) => (
                <li key={project.title} className="font-semibold ">
                  <button
                    onClick={() => handleSelect(project, index)}
                    className={`w-full text-left px-2 py-1 rounded-md my-1 border-2 border-transparent hover:border-[#8b2e44] ${projectSelected === project ? "bg-[#8b2e44] text-slate-50 focus-out:bg-transparent focus-out:text-[#8b2e44]" : null}`}
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </Aside>
        <main className="h-fit mb-20 w-2/3 ml-0 float-right flex justify-end gap-8">
          <div className="w-full mt-16 pr-8">
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
      </section>
      <Footer />
    </div>
  );
}
