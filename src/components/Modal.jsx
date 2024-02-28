export default function Modal({ onClose, title, description, oneOption, actionButton, closeButton }) {

    return (
        <dialog open className="sm:max-w-[400px] sm:h-fit m-0 z-20 flex flex-col gap-4 justify-center absolute sm:bg-slate-50 sm:top-[50%] sm:left-[50%] sm:-translate-x-[50%] sm:-translate-y-[50%] p-8 sm:rounded-xl sm:shadow-xl xs:w-full xs:h-screen xs:rounded-none xs:bg-[#ffffffcf]">
            <h2 className="text-xl">{title}</h2>
            <p>{description}</p>
            <form onSubmit={onClose} className="text-center mt-4">
                <button type="submit" className="p-2 bg-[#8b2e44] text-slate-50 rounded-md">{actionButton}</button>
                {!oneOption && <button type="submit">{closeButton}</button>}
            </form>
        </dialog>
    )
}

// 