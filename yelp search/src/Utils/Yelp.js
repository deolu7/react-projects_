const apiKey = "NHTRGPr4fevMrR15Xr2S3wKO8fb0uwC3Ypg2uD_hvnkGItZXlR8SJKOilfjZO9pmazHwx8FXc2GG73VlVhDIwiOn41ZoLlIjK63jY2bU9eQlHEq2Zr9Swv7mY1DsZ3Yx";
const endPoint = "https://api.yelp.com/v3/businesses/search?";

const paramTerm = "term=";
const paramLocation = "&location=";
const paramSortBy = "&sort_by=";


const searchYelp = async (term, location, sortBy) => {
    try {
        const url = endPoint + paramTerm + term + paramLocation + location + paramSortBy + sortBy;

        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            }
        });

        if (response.ok) {
            const { businesses } = await response.json();
            console.log(businesses);
            return businesses;
        }

    } catch (error) {
        console.log(error);
    }
}

export default searchYelp;