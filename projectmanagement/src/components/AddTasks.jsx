import { useRef, useState } from "react";
import Tasks from "./Tasks";

export default function AddTasks({ project, tasks }) {
  const taskRef = useRef();
  console.log(tasks);

  const [isError, setIsError] = useState(false);
  const [, setState] = useState(false);

  function handleAddTask(task) {
    if (task === "") {
      setIsError(true);
    } else {
      tasks.push(task);
      setState((prev) => !prev);

      setIsError(false);
      taskRef.current.value = "";
    }
  }

  function handleClear(index) {
    if (tasks.length === 1) {
      tasks = [];
    } else if (index > 1) {
      tasks.splice(index, 1);
    } else if (index === 1) {
      tasks.splice(index, index);
    } else if (index === 0) {
      tasks.splice(index, 1);
    }
    setState((prev) => !prev);
  }
  return (
    <div>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <p className="text-stone-800 my-4">
        <input
          ref={taskRef}
          className="w-3/4 px-2 py-1 transition-all duration-200 border-transparent border-2 rounded-md bg-stone-200 outline-none hover:border-[#8b2e44] active:border-[#8b2e44] focus:border-[#8b2e44]"
        />
        <button
          onClick={() => handleAddTask(taskRef.current.value)}
          className="ml-4 py-[0.3rem] px-4 transition-all duration-200 rounded-md bg-[#8b2e44] text-slate-50 hover:bg-[#f98538]"
        >
          Add Task
        </button>
        {isError && (
          <label className="text-red-500 block">Please enter a task</label>
        )}
      </p>
      {tasks.length > 0 && <Tasks tasks={tasks} onClear={handleClear} />}
    </div>
  );
}
