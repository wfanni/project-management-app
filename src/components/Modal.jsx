import { createPortal } from "react-dom";

export default function Modal({ onClose, title, description, oneOption, actionButton, closeButton }) {

    return createPortal(
        <dialog open className="max-w-[400px] flex flex-col gap-4 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-8 rounded-xl shadow-xl">
            <h2 className="text-xl">{title}</h2>
            <p>{description}</p>
            <form onSubmit={onClose} className="text-center mt-4">
                <button type="submit" className="p-2 bg-[#8b2e44] text-slate-50 rounded-md">{actionButton}</button>
                {!oneOption && <button type="submit">{closeButton}</button>}
            </form>
        </dialog>,
        document.getElementById("modal-root")
    )
}