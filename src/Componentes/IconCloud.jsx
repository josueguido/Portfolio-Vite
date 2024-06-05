import IconCloud from "./ui/icon-cloud";


const slugs = [
    "typescript",
    "javascript",
    "dart",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "postgresql",
    "vercel",
    "testinglibrary",
    "jest",
    "git",
    "github",
    "visualstudiocode",
    "androidstudio",
    "vite",
    "tailwindcss",
    "vite",
    "vitest",
    "npm",
    "astro",
    "githubactions"
];


export function IconCloudDemo() {
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 block md:hidden">
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}
