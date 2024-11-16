import Accordion from "./Accordion";
import Banner from "./Banner";
import FeaturedProduct from "./FeaturedProduct";
import UserReview from "./UserReview";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className="container mx-auto">
            <div  className="my-8">
                <h1 className="mb-16 text-2xl font-semibold text-center">Featured Products</h1>
                <FeaturedProduct></FeaturedProduct>
            </div>
            <div  className="my-8">
                <h1 className="mb-16 text-2xl font-semibold text-center">User Review</h1>
                <UserReview></UserReview>
            </div>
            <div  className="my-8">
                <h1 className="mb-16 text-2xl font-semibold text-center">FaQ</h1>
                <Accordion></Accordion>
            </div>
            </div>
        </div>
    );
};

export default Home;