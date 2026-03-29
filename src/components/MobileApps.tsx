import useWindowStore from "../store/window";

const MobileApps = () => {

    const { openWindow, closeWindow, windows }: any = useWindowStore();

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
        <div className="sm:hidden flex relative mt-5 ml-4">
            <div className="relative flex justify-center size-20">
                <button
                    type="button"
                    className="dock-icon"
                    onClick={() => toogleApp({ id: "resume", canOpen: true })}
                >
                    <img
                        src={`/images/pages.png`}
                        alt={"pages"}
                        loading="lazy"
                    />
                </button>
            </div>
        </div>
    )
}

export default MobileApps
