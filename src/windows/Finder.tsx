import { Search } from 'lucide-react'
import clsx from 'clsx'

import WindowControlls from '../components/WindowControlls'
import WindowWrapper from '../hoc/WindowWrapper'
import { locations } from '../constants'
import useLocationStore from '../store/location'
import useWindowStore from '../store/window'

const Finder = () => {

    const { openWindow }: any = useWindowStore();
    const { activeLocation, setActiveLocation }: any = useLocationStore();

    const openItem = (item: any) => {
        if (item.fileType === 'pdf')
            return openWindow("resume");

        if (item.kind === "folder")
            return setActiveLocation(item);

        if (['fig', 'url'].includes(item.fileType) && item.href) {
            if (item.href === "inventory_mangament_app.apk") {
                const link = document.createElement("a");
                link.href = "https://github.com/KetanSharma91/macOsPortolio/releases/download/v1.0/inventory_management_app.apk";
                link.download = "inventory_management_app.apk";
                link.click();
                return;
            }
            return window.open(item.href, "_blank");
        }

        openWindow(`${item.fileType}${item.kind}`, item);
    }

    const renderList = (items: any) => items.map((item: any) => (
        <li
            key={item.id}
            className={clsx(item.id === activeLocation.id ? "active" : "not-active",)}
            onClick={() => setActiveLocation(item)}
        >
            <img
                src={item.icon}
                alt={item.name}
                className='w-4'
            />
            <p className='text-sm font-medium truncate'>{item.name}</p>
        </li>
    ));

    return (
        <>
            <div id="window-header">
                <WindowControlls target={"finder"} />
                <Search className='icon' />
            </div>

            <div className='bg-white dark:bg-[#1e1e1e] flex h-full'>
                <div className="sidebar">
                    <div>
                        <h3>Favorites</h3>
                        <ul>
                            {renderList(Object.values(locations))}
                        </ul>
                    </div>

                    <div>
                        <h3>Work</h3>
                        <ul>
                            {renderList(locations.work.children)}
                        </ul>
                    </div>

                </div>

                <ul className="content">
                    {activeLocation?.children.map((item: any) => (
                        <li
                            key={item.id}
                            className={item.position}
                            onClick={() => openItem(item)}
                        >
                            <img src={item.icon} alt={item.name} />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;