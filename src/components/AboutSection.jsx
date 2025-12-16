import { User, Briefcase, Code } from "lucide-react"
import myResume from "/Isabelle_Beaudry_Resume_web.pdf"

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">New Graduate Software Engineer</h3>
                        <p className="text-muted-foreground">
                            I have worked on projects in many different areas of software engineering, 
                            including full stack web development, game development, iOS app development, 
                            machine learning and autonomous systems, and more.
                        </p>
                        <p>Some of my passions include Formula 1, drawing, reading, yoga, video games, and spending time with friends / family!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>
                            <a href={myResume} target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary-10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"></Code>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Design</h4>
                                    <p className="text-muted-foreground">
                                        I have a passion for frontend web dev. I appreciate not only the coding but also the design aspect; the more I practise, the more beautiful and responsive my websites become!
                                    </p>
                                </div>
                            </div>
                        </div>
                      <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"></User>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Game Development</h4>
                                    <p className="text-muted-foreground">
                                        I've built numerous mini games, including a 2D Platformer, a Top-Down, and a 3D Idler, all using my favourite game engine, Unity.
                                    </p>
                                </div>
                            </div>
                        </div>                       
                      <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"></Briefcase>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Work Experience</h4>
                                    <p className="text-muted-foreground">
                                        I currently work as a web developer at a small company, and I am simultaneously volunteering for Toronto Climate Week as a web developer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}