import WorkCard from "../WorkCard/WorkCard";

export default function WorkCardList() {
  const projects = [
    {
      name: "Rick & Morty App",
      type: "Academic Individual project",
      gitHub: "https://github.com/GastonSoliz/RyM-App-WithServer",
      demo: "",
    },
    {
      name: "Drivers App",
      type: "Academic Individual project",
      gitHub: "https://github.com/GastonSoliz/cr-pi-drivers-main",
      demo: "",
    },
    {
      name: "Eventify App",
      type: "Academic Group project",
      gitHub: "https://github.com/Eventify-PF",
      demo: "",
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <WorkCard project={project} />
      ))}
    </>
  );
}
