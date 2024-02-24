import AddTasks from "./AddTasks"

export default function EditProject({ project, index, onDelete, tasks }) {
    return (
        <div className="w-auto p-4 bg-slate-50 rounded-xl shadow-lg">
            <header className="pb-4 mb-4 border-b-2 border-[#8b2e44]">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button onClick={() => onDelete(index)} className="text-stone-700 hover:text-red-500">Delete</button>
                </div>
                <p className="mb-4 text-stone-400"><span className="uppercase text-sm">Deadline: </span>{project.dueDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap"><span className="uppercase text-sm">Description:</span><p>{project.description}</p></p>
            </header>
            <AddTasks project={project} tasks={tasks}/>
        </div>
    )
}