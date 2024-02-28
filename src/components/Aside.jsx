export default function Aside({ children, setClosed, isClosed }) {
    return (
        <aside className={`${isClosed === true ? 'xs:-translate-x-full sm:translate-x-0' : 'xs:translate-x-0 shadow-xl'} xs:absolute sm:relative z-10 md:w-1/5 sm:w-1/4 sm:px-4 min-h-80vh sm:py16 bg-[#f98538] text-[#3e122c] xs:p-2 rounded-r-xl transition-all duration-200`}>
            <button onClick={() => setClosed(prev => !prev)} className={`xs:block sm:hidden py-2 pl-4 pr-2 bg-[#f98538] absolute top-2 ${isClosed === true ? '-right-8 rounded-r-md' : 'right-4'}`}><i className={`${isClosed === true ? 'fa-solid fa-angles-right' : 'fa-solid fa-angles-left'}`}></i></button>
            <h2 className="mb-8 xs:mt-12 font-bold uppercase sm:text-xl sm:text-left xs:text-sm xs:text-center text-[#3e122c]">My projects</h2>
            <ul className="mt-8">
                {children}
            </ul>
        </aside>
    )
}