import React, { useEffect, useState } from 'react'
import Dices from './Dices'
import dice from '../assets/Diceicons'


export default function Gamearea() {
    // let arr
    const [dicelist, setDiceList] = useState([Array(10).fill('x'), true])
    const [selectedvalue, setSelectedValue] = useState([false, 'x'])
    const [arr, setarr] = useState(dicelist[0].map(item => item !== 'x' ? item : Math.floor(Math.random() * 6)))
    // console.log()
    //  arr=dicelist[1]===true?dicelist[0].map(item=>item!=='x'?item:Math.floor(Math.random()*6)):arr
    const [count, setCount] = useState(0)
    const [dicelist2, setDiceList2] = useState([Array(10).fill('x'), true])
    const [selectedvalue2, setSelectedValue2] = useState([false, 'x'])
    const [arr2, setarr2] = useState(dicelist2[0].map(item => item !== 'x' ? item : Math.floor(Math.random() * 6)))
    // console.log(arr)
    const handleselectedvalue = (player, val) => {
        if (player === 0) {
            setDiceList([arr.map(item => item !== val ? 'x' : val), false])
            setSelectedValue([true, val])
            setCount(prev => prev + 1)

        }
        else {
            setDiceList2([arr2.map(item => item !== val ? 'x' : val), false])
            setSelectedValue2([true, val])
            setCount(prev => prev - 1)

        }
        // setTimeout(() => {
        //     setDiceList(prev=>{
        //         return [prev[0].map(item=>item),true]
        //     })
        // }, 1500);
    }

    useEffect(() => {
        if (dicelist[1] === true) {
            setarr(dicelist[0].map(item => item !== 'x' ? item : Math.floor(Math.random() * 6)))
        }
    }, [dicelist])
    useEffect(() => {
        if (dicelist2[1] === true) {
            setarr2(dicelist2[0].map(item => item !== 'x' ? item : Math.floor(Math.random() * 6)))
        }
    }, [dicelist2])

    const handleclick = (val) => {
        // console.log(event.name)
        if (val === 1) {
            // console.log("from dicelist: ",dicelist.find((item)=>item==='x'))
            setDiceList([arr.map(item => item !== selectedvalue[1] ? 'x' : selectedvalue[1]), true])
            setCount(prev => prev + 1)
        }
        else {
            setDiceList2([arr2.map(item => item !== selectedvalue2[1] ? 'x' : selectedvalue2[1]), true])
            setCount(prev => prev - 1)

        }
        // setSelectedValue(prev=>[false,prev[1]])
        // setTimeout(() => {
        //     setSelectedValue(prev=>[true,prev[1]])


        // }, 1500);

    }
    const check = (item) => {
        return item === 'x'
    }
    useEffect(() => {
        // if(dicelist.find((item)=>item==='x')===undefined||dicelist2.find((item)=>item==='x')==='find'){
        // console.log('game ended', " 1 ",dicelist.find((item)=>item==='x')," 2", dicelist2.find((item)=>item==='x') )}
        console.log(dicelist.find(check))
    }, [count])

 const checkscore=(ply)=>{
     let val=0
     if(ply===1 && selectedvalue2[0]===true){
        arr.map(item=>{
            if(item===selectedvalue2[1])
            val++
            return item
        })
     }
    else if(ply===0 && selectedvalue[0]===true){
        arr.map(item=>{
            if(item===selectedvalue[1])
            val++
            return item
        })
     }
    return val
 }

    // console.log(arr)
    return (
        <>
            <div className=" px-3 d-flex text-center flex-column ">
                <div className='py-2'>
                    <h5 className={`py-0 ${count==0?'text-danger':''} `}>Player 1</h5><br />
                    Selected: {selectedvalue[0] && dice[selectedvalue[1]]}
                </div>
                <div className="d-flex justify-content-center">

                    <div className='d-flex mx-2 row justify-content-center' style={{ width: '50%' }}>
                        {arr.map((item, index) => {
                            { console.log(item) }
                            return <Dices number={item} className='col-2' selectedvalue={selectedvalue} handleselectedvalue={handleselectedvalue} player={0} />
                        })}
                    </div>
                    <button className="btn btn-primary my-5" disabled={count === 1 || !selectedvalue[0]} style={{ width: '10%' }} onClick={() => { handleclick(1) }} name="player-1">roll</button>

                    <div className="score px-2">
                        <input type="text" value={`${checkscore(count)} /12`} />
                    </div>
                </div>
            </div>
            <hr />
            <hr />
            {/* <hr /> */}

            <div className=" px-3 d-flex text-center flex-column">

                <div className='py-2'>
                    <h5 className={`py-0 ${count==1?'text-danger':''} `}>Player 2</h5><br />
                    Selected: {selectedvalue2[0] && dice[selectedvalue2[1]]}
                </div>
                <div className="d-flex justify-content-center">

                    <div className='d-flex mx-2 row justify-content-center' style={{ width: '50%' }}>
                        {arr2.map((item, index) => {
                            { console.log(item) }
                            return <Dices number={item} className='col-2' selectedvalue={selectedvalue2} handleselectedvalue={handleselectedvalue} player={1} />
                        })}
                    </div>
                    <button className="btn btn-primary my-5" disabled={count === 0 || !selectedvalue2[0]} style={{ width: '10%' }} onClick={() => { handleclick(2) }} name="player-2">roll</button>

                    <div className="score px-2">
                        <input type="text" value={`${checkscore(dicelist2[0])} /12`} />
                    </div>
                </div>
            </div>

        </>
    )
}
