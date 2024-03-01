export default function Tasks({ tasks, onClear, updateCompletedTasks, setDoneModal }) {

  function handleCheckboxChange(task, index) {
    updateCompletedTasks(task, index);
    setTimeout(() => setDoneModal(true), 3500);
  }
  return (
    <ul className="p-4 mt-8 rounded-md bg-paper">
      {tasks &&
        tasks.map((task, index) => {
          return (
            <li
              key={task}
              className="flex justify-between p-2 rounded-md font-regular hover:bg-[#ffffff75]"
            >
              <div className="flex gap-2">
                <input onChange={() => handleCheckboxChange(task, index)} type="checkbox" value={task} />
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
