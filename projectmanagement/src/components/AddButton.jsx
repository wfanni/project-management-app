export default function AddButton({ onAdd }) {
    return (
        <button onClick={onAdd} className="w-full text-left px-2 py-1 rounded-sm my-1 font-semibold border-2 border-transparent hover:border-[#4d1a45]">+ Add Project</button>
    )
}