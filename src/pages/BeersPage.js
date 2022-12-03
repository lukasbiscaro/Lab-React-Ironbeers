import axios from "axios"
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from "../components/Header"
import '../components/Header.css'
import './BeersPage.css'

const BeersPage = () => {

    const [beers, setBeers] = useState([])

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URL)
            .then(response => {
                setBeers(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    if (!beers.length) {
        return <p>Loading...</p>
    }


    return (
        <div className="BeersPage">
            <Header />
            {
                beers.map(beer => {
                    return (
                        <div className="beerItem" key={beer._id}>
                            <div className="beerImage">
                                <img src={beer.image_url} alt="beer" />
                            </div>
                            <div className="beerText">
                                <h2><Link to={`/beers/${beer._id}`}>{beer.name}</Link></h2>
                                <p>{beer.tagline}</p>
                                <p>Created by: {beer.contributed_by}</p>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default BeersPage