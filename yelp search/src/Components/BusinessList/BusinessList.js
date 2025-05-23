import Business from '../Business/Business';
import './BusinessList.css';

function BusinessList({ businesses }) {
    return (
        <div className="list-container">
            {businesses.map((business) => {
                return <Business business={business} key={business.name} />;
            })}
        </div>
    );
}

export default BusinessList;