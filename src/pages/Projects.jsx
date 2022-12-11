import React from "react";
import { Project } from "../components/Project";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full flex flex-col max-w-[1200px] mx-auto my-[50px] space-y-2 px-[15px] md:px-[30px] pt-2"
    >
      <div className="mx-auto text-center">
        <h1 className="text-primary text-[32px]">PROJECTS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full py-[50px] gap-[32px] flex-1">
        <Project
          title="Note Taking App"
          alt="image"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uAHgVnkYQcBxHF_9wOFPzYNcQSThcOKuPXPkDRzbW5VgcvRzDc03kL3jbUMIglVTUq4&usqp=CAU"
        />
        <Project
          title="Weather App"
          alt="image"
          image="https://www.igeeksblog.com/wp-content/uploads/2022/06/Best-weather-apps-for-iPhone-and-iPad.jpg"
        />
        <Project
          title="Chat App"
          alt="image"
          image="https://i.pinimg.com/736x/2b/07/98/2b07985d0825d237b00df6e94b356662.jpg"
        />
        <Project
          title="Portfolio"
          alt="image"
          image="https://mir-s3-cdn-cf.behance.net/projects/404/fe5409143224419.Y3JvcCw1NzUzLDQ1MDAsMTEyNSww.png"
        />
      </div>
    </div>
  );
};

export default Projects;
