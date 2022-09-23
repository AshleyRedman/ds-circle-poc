// @ts-ignore

import { MouseEventHandler, useRef, useState } from "react"


function App() {

    const center = useRef<HTMLDivElement | null>(null);

    const [active, setActive] = useState(0);

    const [pos, setPos] = useState([
            45,
        75,
        105,
        135,
        165,
        195,
        225,
        255,
        285,
        315,
        345,
        375
        ]);

    const [items, setItems] = useState([
        {
            id: 0,
            color: 'red'
        },
        {
            id: 1,
            color: 'green'
        },{
            id: 2,
            color: 'purple'
        },{
            id: 3,
            color: 'orange'
        },
        {
            id: 4,
            color: 'black'
        },
        {
            id: 5,
            color: 'blue'
        },
        {
            id: 6,
            color: 'pink'
        },
        {
            id: 7,
            color: 'yellow'
        },
        {
            id: 8,
            color: 'navy'
        },
        {
            id: 9,
            color: '#d2d2d2d2'
        },
        {
            id: 10,
            color: '#e3c3'
        },
        {
            id: 11,
            color: 'rgb(25, 215,0)'
        }
    ])

  return (
    <div className="App">
        
      <div className="x">
        <div ref={center} className="z"></div>
        {items.map((item, index) => <Block center={center} pos={pos} setPos={setPos} setItems={setItems} items={items} index={index} key={item.id} color={item.color}  />)}
      </div>
    </div>
  )
}

export default App


const Block = ({color, index, setItems, items, pos, setPos, center}: {center: any,color: string, index: number, setItems: any, items: {id: number, color: string}[], pos: number[], setPos: any}) => {

        

    // const pos = {
    //     0: 45,
    //     1: 75,
    //     2: 105,
    //     3: 135,
    //     4: 165,
    //     5: 195,
    //     6: 225,
    //     7: 255,
    //     8: 285,
    //     9: 315,
    //     10: 345,
    //     11: 375

    // }

    const move = (event: any) => {

        // while (index < 2) {
        //     const dupe = pos;
        //     const x = dupe.map(p => p + 30);
        //     setItems(x);
        // }
        center.current.style.backgroundColor = color;

        console.log({index, pos: pos[index]});
        

        const item = pos[index];

        // if (item !== 105) {
        //     console.log({item});
        // }

        // while (item < 105) {
                const dupe = pos;

        const gg = dupe.map(p => {
            let c = p + 30;
            if (c === 360) c = 30;

            return c;
        });

        setPos(gg);
        // }
        

        

        //console.log({gg});
        

        
    }


    return <>    
    <button
    key={index}
    id={index + '-lol'}
    onClick={move}
    onMouseOver={(event) => {
        // console.log(event.target);
        // const thing = document.getElementById(`${index}-lol`);
        // if (thing) {
        //     thing.style.pointerEvents = 'all';
        // }
    }}
    className="y" style={{
        zIndex: index + 1,
        backgroundColor: color,
        transform: `translateY(-100%) rotate(-${pos[index]}deg)`
    }}>
        <p className="c" style={{
        transform: `rotate(${pos[index]}deg)`
    }
    }>image will go here</p>
    </button>
    </>
}
