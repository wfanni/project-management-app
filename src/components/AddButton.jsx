export default function AddButton({ onAdd, style }) {
    return (
        <button onClick={onAdd} className={`${style === "selected" ? "bg-[#8b2e44] text-slate-50" : null} w-full text-left px-2 py-1 border-2 border-[#8b2e44] rounded-md my-1 transition-all duration-200 font-semibold xs:text-center hover:scale-110 active:bg-[#8b2e44] active:text-slate-50 focus:bg-[#8b2e44] focus:text-slate-50`}>
            <i className="fa-solid fa-plus"></i>
            <span className="xs:hidden">Add Project</span>
        </button>
    )
}