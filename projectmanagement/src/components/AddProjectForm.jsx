import { useRef } from "react";

export default function AddProjectForm({ onSave, onClose }) {
  const title = useRef();
  const desc = useRef();
  const date = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onSave(title.current.value, desc.current.value, date.current.value);
    onClose();
  }

  return (
    <form
      className="p-4 bg-slate-50 rounded-xl shadow-lg"
      onSubmit={handleSubmit}
    >
      <menu className="flex items-center justify-between gap-4 my-4">
        <div>
          <i class="fa-solid fa-folder-plus text-4xl px-4"></i>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="text-stone-800 hover:text-stone-400"
          >
            Close
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-md bg-[#8b2e44] text-stone-50 hover:bg-[#f98538] transition-all duration-200"
          >
            Save
          </button>
        </div>
      </menu>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Title
        </label>
        <input
          ref={title}
          required
          type="text"
          className="w-full p-1 transition-all duration-200 border-transparent border-2 rounded-md bg-stone-200 outline-none hover:border-[#8b2e44] active:border-[#8b2e44] focus:border-[#8b2e44]"
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Description
        </label>
        <textarea
          ref={desc}
          type="text"
          className="w-full p-1 transition-all duration-200 border-transparent border-2 rounded-md bg-stone-200 outline-none hover:border-[#8b2e44] active:border-[#8b2e44] focus:border-[#8b2e44]"
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          Due Date
        </label>
        <input
          ref={date}
          required
          type="date"
          className="relative w-full p-1 indent-4 transition-all duration-200 border-transparent border-2 rounded-md bg-stone-200 outline-none hover:border-[#8b2e44] active:border-[#8b2e44] focus:border-[#8b2e44]"
        />
      </p>
    </form>
  );
}
