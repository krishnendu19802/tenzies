import React, { useEffect, useState } from 'react'
import Dices from './Dices'

export default function Gamearea() {
    // let arr
    const [dicelist, setDiceList] = useState([Array(10).fill('x'), true])
    const [selectedvalue, setSelectedValue] = useState([false, 'x'])
    // console.log()
    const [arr, setarr] = useState(dicelist[0].map(item => item !== 'x' ? item : Math.floor(Math.random() * 6)))
    //  arr=dicelist[1]===true?dicelist[0].map(item=>item!=='x'?item:Math.floor(Math.random()*6)):arr
    console.log(arr)
    const handleselectedvalue = (val) => {
        setDiceList([arr.map(item => item !== val ? 'x' : val), false])
        setSelectedValue([true, val])
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

    const handleclick = () => {
        setDiceList([arr.map(item => item !== selectedvalue[1] ? 'x' : selectedvalue[1]), true])
        // setSelectedValue(prev=>[false,prev[1]])
        // setTimeout(() => {
        //     setSelectedValue(prev=>[true,prev[1]])


        // }, 1500);

    }



    // console.log(arr)
    return (
        <>
            <div className="d-flex px-3">
                <div className='d-flex mx-2 row justify-content-center' style={{ width: '50%' }}>
                    {arr.map((item, index) => {
                        { console.log(item) }
                        return <Dices number={item} className='col-2' selectedvalue={selectedvalue} handleselectedvalue={handleselectedvalue} />
                    })}
                </div>
                <button className="btn btn-primary my-5" disabled={!selectedvalue[0]} style={{ width: '10%' }} onClick={handleclick}>roll</button>
            </div>
        </>
    )
}
