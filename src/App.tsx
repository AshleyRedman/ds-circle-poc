import { Dispatch, SetStateAction, useState } from 'react';

type item = {
    id: number;
    color: string;
    url: string;
    buttonText: string;
    buttonTextColor: string;
    buttonColor: string;
    externalLink: boolean;
    text: string;
    textColor: string;
};

const seed = [
    {
        id: 0,
        color: '#3737',
        url: '1.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    },
    {
        id: 1,
        color: 'green',
        url: '2.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    },
    {
        id: 2,
        color: 'purple',
        url: '3.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    },
    {
        id: 3,
        color: 'orange',
        url: '4.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    },
    {
        id: 4,
        color: 'black',
        url: '5.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    },
    {
        id: 5,
        color: 'blue',
        url: '6.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    },
    {
        id: 6,
        color: 'pink',
        url: '7.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    },
    {
        id: 7,
        color: 'yellow',
        url: '8.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    },
    {
        id: 8,
        color: 'navy',
        url: '9.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    },
    {
        id: 9,
        color: '#d2d2d2d2',
        url: '10.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    },
    {
        id: 10,
        color: '#e3c3',
        url: '11.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    },
    {
        id: 11,
        color: 'rgb(25,215,200)',
        url: '12.jpg',
        buttonText: 'Lorem',
        buttonTextColor: 'black',
        buttonColor: 'yellow',
        externalLink: true,
        text: 'Lorem ipsum',
        textColor: 'white'
    }
];

const positions = [45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345, 375];

function App() {
    const [items, setItems] = useState<item[]>(seed);
    const [pos, setPos] = useState<number[]>(positions); // more like angle
    const [jumpToPos, setJumpToPos] = useState(2);
    const [active, setActive] = useState(items[2]);

    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);
    const [isCenter, setIsCenter] = useState(true);
    const [width, _] = useState(800);
    const [feature, setFeature] = useState(500);
    const featureBorder = Number(feature) + 9;

    const move = (item: item) => {
        setActive(item); // sets the center item

        const gg = pos.map((p) => {
            let c = p + 30;
            if (c === 360) c = 30;

            return c;
        });

        setPos(gg);
    };

    // const reorderArr = (i: number, arr: item[]) => {
    //     return [...arr.slice(i), ...arr.slice(0, i)];
    // };

    return (
        <div className="App">
            <div className="controls">
                <span>Jump to position (0 - 12)</span>
                <input
                    type="number"
                    min={0}
                    max={11}
                    value={jumpToPos}
                    onChange={(event) => {
                        setJumpToPos(Number(event.target.value));
                    }}
                />
                <hr />
                <span>Adjust position</span>
                <input
                    type="checkbox"
                    onChange={() => {
                        setIsCenter((state) => !state);
                    }}
                />
                <span>Top: {top}</span>
                <input
                    type="number"
                    value={top}
                    onChange={(event) => setTop(Number(event.target.value))}
                />
                <span>Left: {left}</span>
                <input
                    type="number"
                    value={left}
                    onChange={(event) => setLeft(Number(event.target.value))}
                />
                {/* <span>Width/height: {width}</span>
                <input
                    type="number"
                    value={width}
                    onChange={(event) => setWidth(Number(event.target.value))}
                /> */}
                <hr />
                <span>Feature width/height: {feature}</span>
                <input
                    type="number"
                    value={feature}
                    onChange={(event) => setFeature(Number(event.target.value))}
                />
            </div>
            <div
                className="x"
                style={{
                    position: isCenter ? 'relative' : 'absolute',
                    top: isCenter ? '' : top + 'px',
                    left: isCenter ? '' : left + 'px',
                    width: width + 'px',
                    height: width + 'px'
                }}
            >
                <div
                    className="zbefore"
                    style={{
                        width: `${featureBorder}px`,
                        height: `${featureBorder}px`
                    }}
                >
                    <img
                        src={active.url}
                        className="z"
                        style={{
                            width: `${feature}px`,
                            height: `${feature}px`
                        }}
                    />
                    <div className="zcontent">
                        <span
                            style={{
                                color: active.textColor
                            }}
                        >
                            {active.text}
                        </span>
                        <a
                            href={active.url} // add link url
                            className="button"
                            target={active.externalLink ? '_blank' : '_self'}
                            style={{
                                backgroundColor: active.color,
                                color: active.textColor
                            }}
                        >
                            {active.text}
                        </a>
                    </div>
                </div>
                {items.map((item, index) => (
                    <Block
                        key={item.id}
                        item={item}
                        pos={pos}
                        setPos={setPos}
                        index={index}
                        move={move}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

const Block = ({
    item,
    index,
    pos,
    move
}: {
    item: item;
    index: number;
    pos: number[];
    setPos: Dispatch<SetStateAction<number[]>>;
    move: (item: item) => void;
}) => (
    <>
        <button
            onClick={() => move(item)}
            className="y"
            style={{
                zIndex: index + 1,
                transform: `translateY(-100%) rotate(-${pos[index]}deg)`
            }}
        >
            <div className="f">
                <img
                    className="c"
                    src={item.url}
                    style={{
                        transform: `rotate(${pos[index]}deg)`
                    }}
                />
            </div>
        </button>
    </>
);
