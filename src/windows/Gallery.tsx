import clsx from 'clsx';
import { Mail, Search } from 'lucide-react';
import { useState } from 'react';

import WindowWrapper from '../hoc/WindowWrapper';
import WindowControlls from '../components/WindowControlls';
import { photosLinks } from '../constants'; // gallery
// import useLocationStore from '../store/location';
import useWindowStore from '../store/window';

type active = {
    id: number;
    title: string;
    icon: string;
    children: any;
}

const Gallery = () => {

    const [activeImageSide, setActiveImageSide] = useState<active>(photosLinks[0]);

    const { openWindow }: any = useWindowStore();
    // const { activeLocation, setActiveLocation }: any = useLocationStore();

    const openImage = (id: number, img: string) => {
        const image = { id, name: "Gallery image", icon: "/images/image.png", kind: "file", fileType: "img", imageUrl: img };
        openWindow("imgfile", image);
    }


    return (
        <>
            <div id="window-header">
                <WindowControlls target="photos" />

                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className='icon' />
                    <Search className='icon' />
                </div>
            </div>

            <div className='bg-white dark:bg-[#1e1e1e] flex h-full'>
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map(({ id, icon, title, children }) => (
                            <li
                                key={id}
                                className={clsx(id === activeImageSide.id ? "active" : "not-active",)}
                                onClick={() => setActiveImageSide({ id, icon, title, children })}
                            >
                                <img
                                    src={icon}
                                    alt={title}
                                    className='w-4'
                                />
                                <p className='text-sm font-medium truncate'>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    <ul>
                        {activeImageSide.children.map(({ id, img }: { id: number; img: string }) => (
                            <li
                                key={id}
                                onClick={() => openImage(id, img)}
                            >
                                <img src={img} alt={`Gallery image ${id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div >
        </>
    )
}

const GalleryWindow = WindowWrapper(Gallery, "photos");
GalleryWindow.displayName = "Photos";

export default GalleryWindow