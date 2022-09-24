import { useEffect, useRef, useState } from 'react';

function App() {
    const [pos, setPos] = useState([
        45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345, 375
    ]);

    const [items, setItems] = useState([
        {
            id: 0,
            color: '#3737',
            url: 'https://visualmodo.com/wp-content/uploads/2018/07/Images-Compression-vs-Site-Loading-Speed.png'
        },
        {
            id: 1,
            color: 'green',
            url: 'http://webmediainfotech.com/wp-content/uploads/2019/10/Image-Optimization.jpg'
        },
        {
            id: 2,
            color: 'purple',
            url: 'https://www.softwaretestinghelp.com/wp-content/qa/uploads/2016/04/Website-Link-Verification-Testing-Tools.jpg'
        },
        {
            id: 3,
            color: 'orange',
            url: 'https://miro.medium.com/max/1400/0*i1XbVjul86E_CSyf.jpg'
        },
        {
            id: 4,
            color: 'black',
            url: 'https://hatrabbits.com/wp-content/uploads/2018/10/risky-assumptions.jpg'
        },
        {
            id: 5,
            color: 'blue',
            url: 'https://www.cambridgeenglish.org/Images/tye-business-button-2019.jpg'
        },
        {
            id: 6,
            color: 'pink',
            url: '/1.jpeg'
        },
        {
            id: 7,
            color: 'yellow',
            url: '/2.jpeg'
        },
        {
            id: 8,
            color: 'navy',
            url: '/3.jpeg'
        },
        {
            id: 9,
            color: '#d2d2d2d2',
            url: 'https://visualmodo.com/wp-content/uploads/2018/07/Images-Compression-vs-Site-Loading-Speed.png'
        },
        {
            id: 10,
            color: '#e3c3',
            url: 'https://visualmodo.com/wp-content/uploads/2018/07/Images-Compression-vs-Site-Loading-Speed.png'
        },
        {
            id: 11,
            color: 'rgb(25,215,200)',
            url: 'https://visualmodo.com/wp-content/uploads/2018/07/Images-Compression-vs-Site-Loading-Speed.png'
        }
    ]);

    const center = useRef<any>(null);

    useEffect(() => {
        center.current.src = items[2].url;
    }, []);

    return (
        <div className="App">
            <div className="x">
                <img ref={center} className="z" />
                {items.map((item, index) => (
                    <Block
                        center={center}
                        url={item.url}
                        pos={pos}
                        setPos={setPos}
                        setItems={setItems}
                        items={items}
                        index={index}
                        key={item.id}
                        color={item.color}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

const Block = ({
    color,
    url,
    index,
    setItems,
    items,
    pos,
    setPos,
    center
}: {
    center: any;
    url: string;
    color: string;
    index: number;
    setItems: any;
    items: { id: number; color: string; url: string }[];
    pos: number[];
    setPos: any;
}) => {
    const move = (event: any) => {
        center.current.src = url;

        const item = pos[index];

        // console.log({ item, index });

        const dupe = pos;

        // 2
        let amount = 0;

        if (index > 2) {
            amount = items.length - index;

            console.log({ amount });

            if (amount === 9) {
                amount = -1;
            } else if (amount === 10) {
                amount = -2;
            } else if (amount === 11) {
                amount = -3;
            } else if (amount === 12) {
                amount = -3;
            } else if (amount === 8) {
                amount = 0;
            } else if (amount === 7) {
                amount = 1;
            } else if (amount === 6) {
                amount = 2;
            } else if (amount === 5) {
                amount = 3;
            } else if (amount === 4) {
                amount = 4;
            } else if (amount === 3) {
                amount = 2;
            } else if (amount === 2) {
                amount = 1;
            }

            console.log({ index, amount });
        } else {
            amount = items.length + index;
        }

        const reorderedArr = reorderArr(amount, dupe);

        // reorderedArr.forEach((item, index) => (item = ));

        const gg = dupe.map((p) => {
            let c = p + 30;
            if (c === 360) c = 30;

            return c;
        });

        setPos(gg);
    };

    const reorderArr = (i, arr) => {
        return [...arr.slice(i), ...arr.slice(0, i)];
    };

    return (
        <>
            <button
                onClick={move}
                className="y"
                style={{
                    zIndex: index + 1,
                    transform: `translateY(-100%) rotate(-${pos[index]}deg)`
                }}
            >
                <div className="f">
                    <img
                        className="c"
                        src={url}
                        style={{
                            transform: `rotate(${pos[index]}deg)`
                        }}
                    />
                </div>
            </button>
        </>
    );
};
