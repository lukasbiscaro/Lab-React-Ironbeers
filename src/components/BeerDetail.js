const BeerDetail = ({ beer }) => {
    return (
        <div>
            <div className="image">
                <img src={beer.image_url} alt="beer" />
            </div>
            <div>
                <h1>{beer.name}</h1>
                <h2>{beer.tagline}</h2>
                <p>{beer.attenuation_level}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.description}</p>
                <p><small>{beer.contributed_by}</small></p>
            </div>
        </div>
    )
}

export default BeerDetail