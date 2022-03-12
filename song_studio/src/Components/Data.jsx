import React, { useState, useEffect } from 'react';
import Card from "./Card"
import "./data.css"

//  blank array as initial value of data
let DUMMY_EXPENSE = [];


const Data = () => {
    //  used dummy expenses as initial value, and created a variable which contains all the fetched data
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);



    //  fetched data from API
    function fetchData() {
        fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json").then(
            res => {
                return res.json();
            }
        ).then(
            data => {
                // console.log(data);
                // passed fetched data in my created variable
                setExpenses(data);

            }
        )
    }

    useEffect(() => {
        fetchData()
    }, []);



    return (
        <div>
            <h1 className='heading_style' >
                Coke Studio
            </h1>

            {/* mapped expenses which contains my all the fetched data so that it will returns all the value as my desire in proper way */}
            {expenses.map((val, ind) => {
                console.log(ind);
                return (
                    <Card
                        key={ind}
                        imgsrc={val.cover_image}
                        song={val.song}
                        artist={val.artists}
                        link={val.url}
                    />
                )
            })
            }

            {/* checked either my card is working properly */}
            {/* <Card 
                imgsrc={expenses[1].cover_image}
                song={expenses[1].song}
                artist={expenses[1].artists}
                link={expenses[1].url}
            /> */}
        </div>
    )
}


export default Data;