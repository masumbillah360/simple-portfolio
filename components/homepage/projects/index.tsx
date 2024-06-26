import { projectsData } from '@/utils/data/projects-data';
import ProjectDescriptionCard from './project-card';

const Projects = () => {
    return (
        <div id="projects" className="relative z-40  my-12 lg:my-24">
            <div className="">
                <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
                <div className="flex items-center justify-start relative">
                    <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
                        PROJECTS
                    </span>
                    <span className="w-full h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] absolute right-0  w-fit text-white px-5 py-3 text-xl rounded-md border-b cursor-pointer">
                        SEE ALL
                    </span>
                </div>
            </div>
            <div className="mt-16">
                <div className="flex flex-col gap-3 md:gap-6">
                    {projectsData.slice(0, 4).map((project, i) => (
                        <div
                            id={`sticky-card-${i + 1}`}
                            key={'project' + i}
                            className={`sticky-card w-full mx-auto sticky top-48 flex flex-col gap-8`}>
                            <div className="max-w-2xl mx-auto box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                                <ProjectDescriptionCard project={project} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
