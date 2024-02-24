export default function CreateNewProject({ onAdd }) {
    return (
        <div className="mt-8 text-center my-auto w-full grow">
            <i class="fa-regular fa-file text-6xl"></i>
            <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a projecct or get started with a new one</p>
            <button onClick={onAdd} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Create New Project</button>
        </div>
        
    )
}