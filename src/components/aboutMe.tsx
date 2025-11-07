import profileImage from "@/assets/profile.jpg";
import SplitTextComponent from "./SplitText";
import ScrambledText from "./ui/ScrambledText";

const AboutMe = () => {
  return (
    <section className="min-h-screen gradient-dark flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="flex justify-center md:justify-end order-2 md:order-1">
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
          <div className="space-y-8 order-1 md:order-2 text-left">
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
                Hi, I'm <span className="text-amber-500 font-medium">Md. Shohanur Rahman</span> — a learner, builder, and explorer in the world of software and intelligent systems. I enjoy creating things that feel meaningful, whether it's a model that speaks, an interface that feels calm and intuitive, or a small embedded system responding to motion and touch. I believe that technology should feel human — expressive, quiet, and purposeful.
                </ScrambledText>


              <p>
                <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
                >
                I like to work slowly and intentionally. I enjoy understanding how things work at their core, breaking down systems, experimenting, refining, and building again. Every project teaches something new — not only about programming or design, but about patience, clarity, and curiosity.
              </ScrambledText>
              </p>

              <p>
                <ScrambledText
                className="scrambled-text-demo"
                radius={100}
                duration={1.2}
                speed={0.5}
                >
                Outside of development, I spend time reading about the history of ideas, how cultures grow, and how people find meaning. I enjoy learning about the spread of early Islamic civilization and the stories that shaped it. These ideas influence how I think, how I design, and how I write code — with care, with context, and with respect for detail.
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
