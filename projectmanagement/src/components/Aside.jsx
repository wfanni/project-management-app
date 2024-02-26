export default function Aside({ children }) {
    return (
        <aside className=" w-1/3 min-h-80vh px-8 py-16 bg-[#f98538] text-[#3e122c] md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-[#3e122c]">My projects</h2>
            <ul className="mt-8">
                {children}
            </ul>
        </aside>
    )
}