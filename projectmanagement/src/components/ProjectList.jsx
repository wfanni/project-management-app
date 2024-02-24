export default function ProjectList({ projects, onSelect }) {
  return (
    <ul>
      {projects &&
        projects.map((project, index) => {
          <li key={project.title}>
            <button
              onClick={() => onSelect(project, index)}
              className="w-full text-left px-2 py-1 rounded-md my-1 hover:text-stone-200 hover:bg-stone-800"
            >
              {project.title}
            </button>
          </li>;
        })}
    </ul>
  );
}
