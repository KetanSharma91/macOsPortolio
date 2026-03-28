import useWindowStore from '../store/window'

const WindowControlls = ({ target }: { target: string }) => {
    const { closeWindow, fullScreenWindow }: any = useWindowStore();

    return (
        <div id="window-controls">
            <div className="close" onClick={() => closeWindow(target)} />
            <div className='minimize' onClick={() => closeWindow(target)} />
            <div className='maximize' onClick={() => fullScreenWindow(target)} />
        </div>
    );
};

export default WindowControlls;