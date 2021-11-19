import {
    useParams,
    Link
} from "react-router-dom";
import {
    getMovieComponent
} from "../../data.js";
import "./MovieDesc.css";

export default function MovieDesc() {
    let params = useParams();
    console.log("Hehe ",params.movieId);
    let movieInterest = getMovieComponent(params.movieId);
    return (
        <main>
            <h1>{movieInterest.name}</h1>
            <p>{movieInterest.movie_desc}</p>

            <Link
                to="/"
            >
                <button>Back to Main Page</button>
            </Link>            
        </main>
    );
}