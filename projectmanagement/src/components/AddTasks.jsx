import { useRef, useState } from "react";
import Tasks from "./Tasks";
import confetti from '../assets/confetti.gif';
import firework from '../assets/firework.gif';

export default function AddTasks({
  tasks,
  completedTasks,
  listOfCompletedTasks,
}) {
  const taskRef = useRef();

  const [isError, setIsError] = useState(false);
  const [, setState] = useState(false);

  function handleAddTask(task) {
    if (task === "") {
      setIsError(true);
    } else {
      tasks.push(task);
      console.log(tasks);
      setState((prev) => !prev);

      setIsError(false);
      taskRef.current.value = "";
    }
  }

  function handleClear(index) {
    tasks.splice(index, 1);
    if (
      completedTasks !== null &&
      completedTasks.length > 0 &&
      tasks.length > 0
    ) {
      completedTasks = listOfCompletedTasks;
      for (let i = 0; i <= tasks; i++) {
        for (let x = 0; x <= completedTasks; x++) {
          if (
            completedTasks[x] !== undefined &&
            completedTasks[x] === tasks[i]
          ) {
            tasks.splice(i, 1);
          }
        }
      }
    }
    setState((prev) => !prev);
    console.log(tasks);
  }
  return (
    <div className="relative">
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
      {tasks.length === 0 && listOfCompletedTasks === 0 ? (
        <div className="w-full h-20 flex justify-center items-center">
          <p>There are no tasks yet for this project.</p>
        </div>
      ) : listOfCompletedTasks.length > 0 && tasks.length === 0 ? (
        <div className="w-full h-max py-4 flex flex-col gap-4 justify-center items-center">
          <i class="fa-solid fa-champagne-glasses text-5xl text-[#f98538]"></i>
          <p>Congrats on completing all your tasks!</p>
		  <img className="absolute -top-[8rem]" src={firework} />
        </div>
      ) : (
        tasks.length > 0 && (
          <Tasks
            tasks={tasks}
            onClear={handleClear}
            completedTasks={completedTasks}
          />
        )
      )}
    </div>
  );
}
