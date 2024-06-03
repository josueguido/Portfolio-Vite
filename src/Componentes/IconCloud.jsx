import IconCloud from "./ui/icon-cloud";
import HTML from "../assets/Tecnologias/HTML.svg"
import CSS from "../assets/Tecnologias/CSS.svg"
import JavaScript from "../assets/Tecnologias/JavaScript.svg"
import NPM from "../assets/Tecnologias/NPM.svg"
import Git from "../assets/Tecnologias/Git.svg"
import GitHub from "../assets/Tecnologias/GitHub.svg"
import React from "../assets/Tecnologias/React.svg"
import PostGres from "../assets/Tecnologias/PostGres.svg"
import NodeJS from "../assets/Tecnologias/NodeJS.svg"
import Express from "../assets/Tecnologias/Express.svg"
import Astro from "../assets/Tecnologias/Astro.svg"
import Vite from "../assets/Tecnologias/Vite.svg"
import Next from "../assets/Tecnologias/Next.svg"
import Tailwind from "../assets/Tecnologias/Tailwind.svg"
import Jest from "../assets/Tecnologias/Jest.svg"
import GitHubActions from "../assets/Tecnologias/GitHubActions.svg"
import Vitest from "../assets/Tecnologias/Vitest.svg"
import Testing from "../assets/Tecnologias/Testing-library.svg"


const slugToImageMap = {
    html: HTML,
    css3: CSS,
    javascript: JavaScript,
    npm: NPM,
    git: Git,
    github: GitHub,
    react: React,
    postgresql: PostGres,
    nodedotjs: NodeJS,
    express: Express,
    astro: Astro,
    vite: Vite,
    nextdotjs: Next,
    tailwind: Tailwind,
    jest: Jest,
    githubactions: GitHubActions,
    vitest: Vitest,
    testinglibrary: Testing,
    next: Next,
   
};

export function IconCloudDemo() {
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 block md:hidden">
            <IconCloud iconSlugs={slugToImageMap}/>
        </div>
    );
}
