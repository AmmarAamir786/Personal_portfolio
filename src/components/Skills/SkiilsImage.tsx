import illustrator from "@/assets/Skills/Illustrator.png"
import blender from "@/assets/Skills/blender.png"
import css from "@/assets/Skills/css.png"
import figma from "@/assets/Skills/figma.png"
import html from "@/assets/Skills/html.png"
import javascript from "@/assets/Skills/js.png"
import lightroom from "@/assets/Skills/lrc.png"
import react from "@/assets/Skills/react.png"
import next from "@/assets/Skills/nextjs.png"
import tailwindcss from "@/assets/Skills/tailwind.png"
import typescript from "@/assets/Skills/ts.png"

export const skillsImage = (skill: any) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'next':
            return next;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'tailwindcss':
            return tailwindcss;
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'figma':
            return figma;
        case 'blender':
            return blender;
        case 'illustrator':
            return illustrator;
        case 'lightroom':
            return lightroom;
        default:
            return "Image not found"
    }
}