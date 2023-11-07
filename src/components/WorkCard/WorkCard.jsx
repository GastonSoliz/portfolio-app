import { Link } from "react-router-dom";

export default function WorkCard({ project }) {
  return (
    <>
      <h2>{project.name}</h2>
      <h4>{project.type}</h4>
      {project.gitHub && (
        <Link to={project.gitHub}>
          <button>GitHub</button>
        </Link>
      )}
      {project.demo && (
        <Link to={project.demo}>
          <button>Live Demo!</button>
        </Link>
      )}
    </>
  );
}
