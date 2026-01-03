import OrbitingCircles from "./ui/orbiting-circles";

export function OrbitingCirclesDemo() {
  const logoSrc = (name: string) => `/src/assets/Tecnologias/${name}.svg`;

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg px-4 sm:px-0">
      <div className="relative w-full max-w-[28rem] aspect-square flex items-center justify-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        </span>

        <OrbitingCircles
          className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] border-none bg-transparent"
          duration={17}
          delay={20}
          radius={40}
        >
          <img src={logoSrc("Kubernetes")} alt="Kubernetes" className="w-full h-full" />
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[16px] w-[16px] sm:h-[20px] sm:w-[20px] border-none bg-transparent"
          duration={17}
          radius={40}
        >
          <img src={logoSrc("Docker")} alt="Docker" className="w-full h-full" />
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[22px] w-[22px] sm:h-[30px] sm:w-[30px] border-none bg-transparent"
          duration={15}
          delay={10}
          radius={85}
        >
          <img src={logoSrc("Git")} alt="Git/DevOps" className="w-full h-full" />
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[28px] w-[24px] sm:h-[40px] sm:w-[30px] border-none bg-transparent"
          reverse
          radius={130}
          duration={20}
        >
          <img src={logoSrc("AWS")} alt="AWS" className="w-full h-full" />
        </OrbitingCircles>

        <OrbitingCircles
          className="h-[22px] w-[22px] sm:h-[30px] sm:w-[30px] border-none bg-transparent"
          reverse
          radius={130}
          duration={20}
          delay={20}
        >
          <img src={logoSrc("Terraform")} alt="Terraform" className="w-full h-full" />
        </OrbitingCircles>
      </div>
    </div>
  );
}

