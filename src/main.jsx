import React , {useState}from 'react'

import './main.css'

const main = () => {

    const [color, setColor] = useState("beige");


    return (
        <div className='body' style={{backgroundColor: color}}>

            <div className="btn1">
                <button onClick={() => setColor("red")} style={{backgroundColor: "red"}}>Red</button>
                <button onClick={() => setColor("blue")} style={{backgroundColor: "blue"}}>Blue</button>
                <button onClick={() => setColor("green")} style={{backgroundColor: "green"}}>Green</button>
                <button onClick={() => setColor("orange")} style={{backgroundColor: "orange"}}>Orange</button>
                <button onClick={() => setColor("pink")} style={{backgroundColor: "pink"}}>Pink</button>
                <button onClick={() => setColor("brown")} style={{backgroundColor: "brown"}}>Brown</button>
                <button onClick={() => setColor("aqua")} style={{backgroundColor: "aqua"}}>Aqua</button>
                <button onClick={() => setColor("yellow")} style={{backgroundColor: "yellow"}}>Yellow</button>
                <button onClick={() => setColor("purple")} style={{backgroundColor: "purple"}}>Purple</button>
                <button onClick={() => setColor("violet")} style={{backgroundColor: "violet"}}>Violet</button>
                <button onClick={() => setColor("grey")} style={{backgroundColor: "grey"}}>Grey</button>
                <button onClick={() => setColor("black")} style={{backgroundColor: "black"}}>Black</button>
            </div>

            {/* <div className="btn2">
                <button onClick={() => setColor("cyan")} style={{backgroundColor: "cyan", color: "black"}}>Cyan</button>
                <button onClick={() => setColor("magenta")} style={{backgroundColor: "magenta"}}>Magenta</button>
                <button onClick={() => setColor("olive")} style={{backgroundColor: "olive"}}>Olive</button>
                <button onClick={() => setColor("maroon")} style={{backgroundColor: "maroon"}}>Maroon</button>
                <button onClick={() => setColor("salmon")} style={{backgroundColor: "salmon"}}>Salmon</button>
            </div> */}



        </div>
    )
}

export default main