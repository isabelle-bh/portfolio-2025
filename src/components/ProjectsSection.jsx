import { Github, ExternalLink } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Circuit Sync",
        description: "An iOS app built with SwiftUI that syncs live Formula 1 race data from the OpenF1 API, giving fans an easy way to track circuits, race dates, and details in one place.",
        image: "/projects/circuit-sync-1.png",
        tags: ["Swift", "iOS", "Xcode", "Mobile Dev"],
        demoUrl: "#",
        githubUrl: "https://github.com/isabelle-bh/CircuitSync",
    },
    {
        id: 2,
        title: "Sky Courier",
        description: "A casual Unity game that combines playful 3D visuals and motivational quotes. Players click on a rotating planet to send out a plane that flies towards the player, delivers an uplifting message, and then returns to the planet once dismissed. Features a world-space main menu, smooth camera transitions, lofi-music player, and randomized quotes.",
        image: "/projects/sky-courier-1.png",
        tags: ["Unity3D", "C#", "Game Dev"],
        demoUrl: "#",
        githubUrl: "https://github.com/isabelle-bh/Sky-Courier",
    },
    {
        id: 3,
        title: "Women in Science UWO Website",
        description: "An interactive React website for the Women in Science club at Western University. Team project made using React, HTML, CSS, and JavaScript.",
        image: "/projects/wis-uwo-1.png",
        tags: ["React", "JavaScript", "HTML/CSS", "Bootstrap","GitHub Pages", "Web Dev"],
        demoUrl: "https://www.wisuwo.com/",
        githubUrl: "https://github.com/wisuwo/wis",
    },
    {
        id: 4,
        title: "Strawberry Shores",
        description: "This is a 2D adventure RPG which takes place in a village called Strawberry Shores. It combines both puzzle and combat elements for an enjoyable experience. Team project made using Unity / C#. Credits to all assets / tutorials used can be found in the README.",
        image: "/projects/strawberry-shores-1.png",
        tags: ["Unity2D", "C#", "Game Dev"],
        demoUrl: "#",
        githubUrl: "https://github.com/isabelle-bh/StrawberryShores",
    },
    {
        id: 5,
        title: "Superhero Database",
        description: "A full stack superhero database application with login/signup, admin, user management, list creation functionalities, and more. Solo project made using JavaScript, HTML + CSS, MongoDB, Express, React, and Node.",
        image: "/projects/superhero-db-2.png",
        tags: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "AWS", "Fullstack"],
        demoUrl: "#",
        githubUrl: "https://github.com/isabelle-bh/Superhero-Database",
    },
    {
        id: 6,
        title: "STELLA",
        description: "Simulated Training Environments & Large Learning Automata (STELLA) is an autonomous driving project which demonstrates the application of simulation environments as a testing ground for imitation learning autonomous agents.",
        image: "/projects/stella-1.png",
        tags: ["CARLA", "Python", "PyTorch", "HuggingFace", "CUDA", "AI"],
        demoUrl: "#",
        githubUrl: "https://github.com/isabelle-bh/STELLA",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        {project.demoUrl !== "#" && (
                                            <a href={project.demoUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <ExternalLink size={20}/>
                                            </a>
                                        )}
                                        <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" target="_blank" href="https://github.com/isabelle-bh">
                        Check My GitHub
                    </a>
                </div>
            </div>

        </section>
    )
}