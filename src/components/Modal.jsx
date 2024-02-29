export default function Modal({ onDelete, isDeleteVisible, setDeleteVisible, isWIPVisible, setWIPVisible, title, description, oneOption, actionButton, closeButton }) {

    function handleAction() {
        isWIPVisible ? setWIPVisible() : null;
        isDeleteVisible ? onDelete() : null;
    }

    return (
        <dialog open className={`${isDeleteVisible ? 'sm:animate-wiggle' : ''} sm:max-w-[400px] sm:h-fit m-0 z-20 flex flex-col gap-4 justify-center absolute sm:bg-slate-50 sm:top-[50%] sm:left-[50%] sm:-translate-x-[50%] sm:-translate-y-[50%] p-8 sm:rounded-xl sm:shadow-xl xs:w-full xs:h-screen xs:rounded-none xs:bg-[#ffffffcf]`}>
            <h2 className="text-xl">{title}</h2>
            <p>{description}</p>
            <div className="flex gap-4 justify-center">
                <button onClick={handleAction} className="px-4 py-2 transition-all duration-200 bg-[#8b2e44] text-slate-50 rounded-md hover:bg-[#f98538]">{actionButton}</button>
                {!oneOption && <button className="px-4 py-2 transition-all duration-200 border-2 border-[#8b2e44] rounded-md hover:border-[#f98538]" onClick={() => setDeleteVisible({isVisible: false, index: null})}>{closeButton}</button>}
            </div>
        </dialog>
    )
}

// 