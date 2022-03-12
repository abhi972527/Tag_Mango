import React, { useState, useEffect } from 'react';
import Card from "./Card"
import "./data.css"

let DUMMY_EXPENSE = [];


const Data = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);




    function fetchData() {
        fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json").then(
            res => {
                return res.json();
            }
        ).then(
            data => {
                // console.log(data);
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
                Song Studio
            </h1>

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