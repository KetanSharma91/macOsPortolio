import { useRef } from "react"

import { Tooltip } from "react-tooltip";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { dockApps } from "../constants";
import useWindowStore from "../store/window";

const Dock = () => {
    const { openWindow, closeWindow, windows }: any = useWindowStore();

    const dockRef = useRef<any>(null);

    useGSAP(() => {
        const dock = dockRef.current;

        if (!dock) return;

        const icons = dock.querySelectorAll(".dock-icon");

        const animateIcons = (mouseX: any) => {
            const { left } = dock.getBoundingClientRect();

            icons.forEach((icon: any) => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();

                const center = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2.5) / 20000);

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out",
                });
            });
        };

        const handleMouseMove = (e: any) => {
            const { left } = dock.getBoundingClientRect();

            animateIcons(e.clientX - left);
        };

        const resetIcons = () =>
            icons.forEach((icon: any) =>
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: "power1.out",
                }),
            );

        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", resetIcons);

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", resetIcons);
        }
    });

    const toogleApp = (app: { id: string, canOpen: boolean }) => {
        if (!app.canOpen) return;

        const window = windows[app.id];

        if (!window) {
            console.error(`Window not found for app: ${app.id}`);
            return;
        }

        if (window.isOpen) {
            closeWindow(app.id);
        } else {
            openWindow(app.id);
        }

        console.log(windows);
    }

    return (
        <section id="dock">
            <div ref={dockRef} className="dock-container">
                {dockApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className="relative flex justify-center">
                        <button
                            type="button"
                            className="dock-icon"
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => toogleApp({ id, canOpen })}
                        >
                            <img
                                src={`/images/${icon}`}
                                alt={icon}
                                loading="lazy"
                                className={canOpen ? "" : "opacity-60"}
                            />
                        </button>
                    </div>
                ))}

                <Tooltip id="dock-tooltip" place="top" className="tooltip" />
            </div>
        </section>
    )
}

export default Dock