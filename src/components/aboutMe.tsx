import profileImage from "@/assets/profile.jpg";
import SplitTextComponent from "./SplitText";
import ScrambledText from "./ui/ScrambledText";

const AboutMe = () => {
  return (
    <section id="about" className="min-h-screen gradient-dark flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full">
        <div className="grid md:grid-cols-3 gap-16 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-start order-2 md:order-1 md:col-span-1">
            <div className="relative group">
              <div className="absolute inset-0 bg-accent/20 rounded-[2rem] blur-2xl group-hover:bg-accent/30 transition-all duration-300 ease-in-out"></div>
              <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
                <img
                  src={profileImage}
                  alt="Md. Shohanur Rahman - Developer and Creative Builder"
                  className="w-full max-w-md h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8 order-1 md:order-2 text-left md:col-span-2">
            <div className="space-y-4 animate-fade-in">
              <h1 className="font-display text-5xl md:text-6xl text-foreground leading-tight">
                <SplitTextComponent 
                        text="About Me" 
                        className="text-6xl font-bold text-center text-white py-8"
                        delay={100}
                        duration={0.6}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                    />
              </h1>
              <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
            </div>

            <div className="space-y-6 text-foreground/90 font-body text-lg leading-relaxed animate-fade-in [animation-delay:200ms]">
                <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
                >
                Hi, I’m <span className="text-amber-500 font-medium">Md. Shohanur Rahman</span> — but most people know me as Shoron. I’m a 23-year-old Backend Developer from Natore, Rajshahi, with a passion for building reliable, scalable systems using modern web technologies.
                </ScrambledText>


              <p>
                <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
                >
                My main expertise is with Django, and I’m currently expanding my skillset by learning .NET. I’ve worked on various personal and academic projects involving areas like function calling, RAG-based applications, and integrating intelligent features into web systems. I like solving complex problems with clean, maintainable code and exploring how backend logic shapes real-world use cases.
              </ScrambledText>
              </p>

              <p>
                <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
                >
                I am pursuing a degree in Computer Science and Engineering at the University of Asia Pacific. I’m always exploring new technologies and frameworks to improve my craft. Outside coding, I enjoy playing video games, which sparks both creativity and technical curiosity. I believe in continuous learning, simplicity, and building with intention.
                </ScrambledText>
              </p>

            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
