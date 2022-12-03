import axios from 'axios';
import React, { useState } from 'react';
import Header from "../components/Header"
import '../components/Header.css'

const NewBeerPage = () => {


    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [firstBrewed, setFirstBrewed] = useState('')
    const [brewedTips, setBrewedTips] = useState('')
    const [attenuationLevel, setAttenuationLevel] = useState(0)
    const [contributedBy, setContributedBy] = useState('')


    const handleSubmit = e => {
        e.prevent.default()
    }

    const newBeer = {
        name,
        tagline,
        description,
        first_brewed: firstBrewed,
        bewer_tips: brewedTips,
        attenuation_level: attenuationLevel,
        contributed_by: contributedBy
    }

    axios.post(`${process.env.REACT_APP_API_URL}/new`, newBeer)
        .then(response => {
            setName('')
            setTagline('')
            setDescription('')
            setFirstBrewed('')
            setBrewedTips('')
            setAttenuationLevel(0)
            setContributedBy('')
        })
        .catch(err => console.log(err))

    return (
        <div className="NewBeerPage">
            <Header />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="tagline">TagLine</label>
                    <input
                        type="text"
                        value={tagline}
                        onChange={e => setTagline(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="description">Description</label>
                    <input
                        type="description"
                        value={name}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="firstBrewed">First Brewed</label>
                    <input
                        type="text"
                        value={firstBrewed}
                        onChange={e => setFirstBrewed(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="BrewedTips">Brewed Tips</label>
                    <input
                        type="text"
                        value={brewedTips}
                        onChange={e => setBrewedTips(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="AttenuationLevel">Attenuation Level</label>
                    <input
                        type="text"
                        value={attenuationLevel}
                        onChange={e => setAttenuationLevel(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="ContributedBy">Contributed By</label>
                    <input
                        type="text"
                        value={contributedBy}
                        onChange={e => setContributedBy(e.target.value)}
                    />
                </div>
                <button>ADD NEW</button>
            </form>
        </div>
    )
}

export default NewBeerPage