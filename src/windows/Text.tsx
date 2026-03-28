import WindowControlls from "../components/WindowControlls"
import WindowWrapper from "../hoc/WindowWrapper"
import useWindowStore from "../store/window";

const Text = () => {

    const { windows }: any = useWindowStore();

    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, subtitle, image, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControlls target={"txtfile"} />
                <h2>{name}</h2>
            </div>

            <div className="p-5 space-y-6 bg-white dark:bg-[#1e1e1e]">
                {image ? (
                    <div className="w-full">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-auto rounded"
                        />
                    </div>
                ) : null}

                {subtitle ?
                    <h3 className="text-lg font-semifold dark:text-white">
                        {subtitle}
                    </h3> : null}

                {Array.isArray(description) && description.length > 0 ? (
                    <div className="space-y-3 leading-relaxed text-base text-gray-800 dark:text-white">
                        {description.map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>
                ) : null}
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow