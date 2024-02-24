import { useState } from "react";
import AddTasks from "./AddTasks";
import CompletedList from "./CompletedList";

export default function EditProject({ project, index, onDelete, tasks }) {
  const [tasksCompleted, setTasksCompleted] = useState([]);
  const [, setRefresh] = useState(false);

  if (
    tasksCompleted !== null &&
    tasksCompleted.length > 0 &&
    project.tasks.new.length > 0
  ) {
    project.tasks.completed = tasksCompleted;
    for (let i = 0; i <= project.tasks.new.length; i++) {
      for (let x = 0; x <= project.tasks.completed.length; x++) {
        if (
          project.tasks.completed[x] !== undefined &&
          project.tasks.completed[x] === project.tasks.new[i]
        ) {
          project.tasks.new.splice(i, 1);
          setRefresh((prev) => !prev);
        }
      }
    }
  }
  return (
    <div className="flex gap-4">
      <div className="w-2/3 p-4 bg-slate-50 rounded-xl shadow-lg">
        <header className="pb-4 mb-4 border-b-2 border-[#8b2e44]">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              {project.title}
            </h1>
            <button
              onClick={() => onDelete(index)}
              className="text-stone-700 hover:text-red-500"
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">
            <span className="uppercase text-sm">Deadline: </span>
            {project.dueDate}
          </p>
          <p className="text-stone-600 whitespace-pre-wrap">
            <span className="uppercase text-sm">Description:</span>
            <span className="block">{project.description}</span>
          </p>
        </header>
        <AddTasks
          tasks={tasks.new}
          completedTasks={setTasksCompleted}
          listOfCompletedTasks={tasksCompleted}
        />
      </div>
      <CompletedList completedTasks={tasksCompleted}/>
    </div>
  );
}
