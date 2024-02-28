export default function CompletedList({ completedTasks }) {
  return (
    <div className="p-4 sm:w-1/3 xs:w-full h-fit sm:min-h-60 xs:h-min-20 flex flex-col gap-4 bg-[#ee7763] text-slate-50 shadow-md rounded-xl">
      {completedTasks && completedTasks.length > 0 ? (
        <h2 className="font-bold text-center">Completed Items</h2>
      ) : null}
      <ul>
        {completedTasks && completedTasks.length > 0 ? (
          completedTasks.map((completedTask) => (
            <li className="flex gap-4 items-center" key={completedTask}>
              <i className="fa-solid fa-check text-green-300 text-2xl"></i>
              {completedTask}
            </li>
          ))
        ) : (
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <i className="fa-solid fa-list-check text-3xl"></i>
            <h2>Your completed tasks will appear here.</h2>
            <p>Get some work done!</p>
          </div>
        )}
      </ul>
    </div>
  );
}
