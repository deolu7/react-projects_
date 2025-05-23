import './Business.css';

function Business({ business }) {

    return (
        <div className="card-container">
            <div className="image-container">
                <img src={business.image_url} alt={business.name} />
            </div>
            <h2>{business.name}</h2>
            <div className="details-container">
                <div className="">
                    <p>{business.location.address1}</p>
                    <p>{business.location.city}</p>
                    <p>{`${business.location.state} ${business.location.zip_code}`}</p>
                </div>
                <div className="">
                    <p>{business.categories[0].title}</p>
                    <p className="">{`${business.rating} stars`}</p>
                    <p>{`${business.review_count} reviews`}</p>
                </div>
            </div>
        </div>
    );
}

export default Business;