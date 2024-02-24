export default function Tasks({ tasks, onClear, isCompleted, completedTasks }) {
  function handleChecked(e) {
    completedTasks((prevCompletedTasks) => {
      const updatedCompletedTasks = [...prevCompletedTasks, e.target.value];
      return updatedCompletedTasks;
    });
  }
  return (
    <ul className="p-4 mt-8 rounded-md bg-paper">
      {tasks &&
        tasks.map((task, index) => {
          console.log(task);
          return (
            <li
              key={task}
              className="flex justify-between p-2 rounded-md font-regular hover:bg-[#ffffff75]"
            >
              <div className="flex gap-2">
                <input onChange={handleChecked} type="checkbox" value={task} />
                <span>{task}</span>
              </div>
              <button
                onClick={() => onClear(index)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          );
        })}
    </ul>
  );
}
