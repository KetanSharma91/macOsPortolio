import dayjs from "dayjs"
import { Minimize, Maximize, Moon, SunMedium } from "lucide-react";
import { useState, useEffect } from "react";

import { navIcons, navLinks } from "../constants"
import useWindowStore from "../store/window"

const Navbar = () => {

    const { openWindow }: any = useWindowStore();

    const [isFullscreen, setIsFullscreen] = useState(false);
    const [toogleTheme, setToogleTheme] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const isTouchDevice = "ontouchstart" in window;

        if (isMobile || isTouchDevice) {
            setTheme("dark");
        };

        const root = window.document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    const toggleFullscreen = async () => {
        if (!document.fullscreenElement) {
            await document.documentElement.requestFullscreen();
        } else {
            await document.exitFullscreen();
        }
    };

    useEffect(() => {
        const handleChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleChange);
        };
    }, []);

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" className="dark:invert-100" />
                <p className="font-bold">Ketan's Portfolio</p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul>
                    <li className="icon" onClick={toggleFullscreen}>
                        {isFullscreen ? <Minimize size={15} className="icon-hover" /> : <Maximize className="icon-hover" size={15} />}
                    </li>
                    {navIcons.map(({ id, img }) => (
                        <li key={id} className="icon" onClick={id === 4 ? () => setToogleTheme(!toogleTheme) : undefined}>
                            <img src={img} className="icon-hover" alt="icon" />
                        </li>
                    ))}
                    {toogleTheme && <div className="theme">
                        <button type="button" onClick={() => { setToogleTheme(false); setTheme("light"); }}>
                            <SunMedium size={20} fill={theme === "light" ? "#ff6157" : "#fff7"} color={theme === "light" ? "#111" : "#fff"} className="mt-1" /> Light
                        </button>
                        <button type="button" onClick={() => { setToogleTheme(false); setTheme("dark"); }}>
                            <Moon size={18} fill={theme === "dark" ? "#ff6157" : "#fff"} color={theme === "dark" ? "#fff" : "#111"} className="mt-1" /> Dark
                        </button>
                    </div>}
                </ul>

                <time>{dayjs().format('ddd MMM D h:mm A')}</time>
            </div>

            <div>
                <time>{dayjs().format('h:mm A')}</time>

                <div className="block relative w-50 flex-1 rounded-full px-2 py-5 bg-black h-5"></div>

                <ul>
                    <li>
                        <img src="/icons/wifi.svg" className="icon-hover" alt="icon" />
                    </li>
                    <li>
                        {Math.floor(Math.random() * 2) ? <img src="/icons/batteryEmpty.svg" className="icon-hover" alt="icon" />
                            :
                            <img src="/icons/batteryFull.svg" className="icon-hover" alt="icon" />
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar