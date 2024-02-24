export default function CreateNewProject({ onAdd }) {
    return (
        <div className="mt-8 text-center my-auto w-full grow">
            <i className="fa-regular fa-file text-6xl text-[#8b2e44]"></i>
            <h2 className="text-xl font-bold text-[#f98538] my-4">No Project Selected</h2>
            <p className="text-stone-800 mb-4">Select a projecct or get started with a new one</p>
            <button onClick={onAdd} className="px-4 py-2 text-xs md:text-base transition-all duration-200 rounded-md bg-[#8b2e44] text-slate-50 hover:bg-[#f98538] hover:text-slate-50">Create New Project</button>
        </div>
        
    )
}