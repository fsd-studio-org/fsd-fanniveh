"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/all";
import { useRef } from "react";

export default function FooterSVG() {
    const path = useRef(null)
    gsap.registerPlugin(DrawSVGPlugin)

    useGSAP(() => {
        gsap.from(path.current, { 
            scrollTrigger: {
                trigger: path.current,
            },
            drawSVG: "30%",
            duration: 1.5
         });
    })

    return (
        <svg
            className="w-full"
            style={{
                fill: 'none',
                fillOpacity: 0.360294,
                stroke: '#b53815',
                strokeWidth: 0.7,
                strokeOpacity: 1
            }}
            viewBox="0 0 290.30334 24.642717"
            version="1.1"
            id="svg1"
            xmlns="http://www.w3.org/2000/svg">
            <defs id="defs1" />
            <g id="layer1" transform="translate(62.534259,-136.92487)">
                <path
                    ref={path}
                    d="M 70.796064,294.3979 V 127.59061 a 27.822474,27.822474 103.49638 0 1 3.030874,-12.62801 c 0.664083,-1.30374 3.570817,-5.75794 6.461792,-9.96989 1.234985,-1.79929 2.467186,-3.58745 3.683507,-5.31208 l -5.126877,-6.603 a 5.3071922,5.3071922 97.80393 0 1 1.030292,-7.517478 l 3.239073,-2.402454 A 28.011132,28.011132 116.71765 0 0 94.438778,60.659589 l 0,-56.5650405"
                    id="path1"
                    transform="rotate(90,82.617421,149.24622)" />
            </g>
        </svg>

    );
}