import "./App.css";
import React from "react";
import { getMovieList } from "./data.js";
import { 
    Link,
    Outlet 
} from "react-router-dom";

import FeaturedMovie from "./Assets/MoviePics/TheGodfather.jpg";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

function App() {
    const images = importAll(require.context('./Assets/MoviePics', false, /\.(png|jpe?g|svg)$/));
    console.log("Images = ",images);
    let MovieList = getMovieList();
    return (
        <div>
            <div className="header">
                <nav>
                    <ul className="nav-left">
                        <li><a href="#" key="Home">Home</a></li>
                        <li><a href="#" key="About">About</a></li>
                    </ul>
                    
                    <input type="text" placeholder="search..." name="search"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                </nav>

                <div className="web-content">
                    <div className="featured-movie">
                        <div className="left-box">
                            <h1>FEATURED MOVIE</h1>
                            <br></br>
                            <h2>The Godfather</h2>
                            <p>A film made in 2012 telling a story about a man who cant be moved</p>
                            <p>Cast: </p>
                            
                            <a href="#">Watch Now!</a>
                            <a href="#">Download</a>
                        </div>

                        <div className="right-box">
                            <img src={FeaturedMovie} alt="TheGodfather"/>
                        </div>
                    </div>
                </div>

                <div className="movie-list">
                    <h1>MOVIE LIST</h1>
                    <div id="movieList" className="movie-list-container">
                        {MovieList.map(Movie => (
                            <div>
                                <img src={images[Movie.img_src]} alt={Movie.name}/>
                                {console.log(images[Movie.img_src])}
                                <div>
                                    <Link to={`Movie/${Movie.name}`}>
                                        <h2 style={{color: "white"}}>{Movie.name}</h2>
                                    </Link>
                                    <h2 style={{color: "white"}}>{Movie.year}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="web-footer">
                    <h1>REYHAN MULQILATHA PRAJESA</h1>
                    <p>All Right Reserved</p>
                </div>
            </div>
            <script src="js/scripts.js"></script>
        </div>
    );
}

export default App