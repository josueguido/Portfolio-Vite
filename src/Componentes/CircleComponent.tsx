import OrbitingCircles from "./ui/orbiting-circles";
import React from "react";

export function OrbitingCirclesDemo() {
  const logoSrc = (name: string) => `/src/assets/Tecnologias/${name}.svg`;

  return (
    <div className="relative flex h-[400px] w-full max-w-[28rem] items-center justify-center overflow-hidden rounded-lg ">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      </span>

      <OrbitingCircles
        className="h-[20px] w-[20px] border-none bg-transparent"
        duration={17}
        delay={20}
        radius={50}
      >
        <img src={logoSrc("Kubernetes")} alt="Kubernetes" className="w-full h-full" />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[20px] w-[20px] border-none bg-transparent"
        duration={17}
        radius={50}
      >
        <img src={logoSrc("Docker")} alt="Docker" className="w-full h-full" />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={15}
        delay={10}
        radius={120}
      >
        <img src={logoSrc("Git")} alt="Git/DevOps" className="w-full h-full" />
      </OrbitingCircles>


      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[40px] w-[30px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <img src={logoSrc("AWS")} alt="AWS" className="w-full h-full" />
      </OrbitingCircles>

      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <img src={logoSrc("HashiCorp Terraform")} alt="Terraform" className="w-full h-full" />
      </OrbitingCircles>
    </div>
  );
}

