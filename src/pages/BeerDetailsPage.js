import axios from "axios"
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Header from "../components/Header"
import '../components/Header.css'
import BeerDetail from "../components/BeerDetail";

const BeerDetailsPage = () => {

    const [beer, setBeer] = useState(null)

    const { beerId } = useParams()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/${beerId}`)
            .then(response => {
                setBeer(response.data)
            })
            .catch(err => console.log(err))
    }, [beerId])

    if (!beer) {
        return <p>Loading...</p>
    }

    return (
        <div className="BeerDetailsPage">
            <Header />
            <BeerDetail beer={beer} />
        </div>
    )
}

export default BeerDetailsPage