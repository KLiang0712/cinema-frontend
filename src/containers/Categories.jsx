import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Common/Header';

// import { getMovies } from '../reducks/movies/selectors';

import API from '../API';
import { getFavourites } from '../reducks/favourites/selectors';
import { addFavourite, fetchFromLocalStorage } from '../reducks/favourites/operations';
import { useDispatch } from 'react-redux';
import IconFav from '../assets/img/icon-fav.png';
import Preview from '../components/Common/Preview';

const api = new API();

const Categories = () => {
    const [categoryAnimated, setCategoryAnimated] = useState(null);
    const [categoryComedy, setCategoryComedy] = useState(null);
    const [categoryDrama, setCategoryDrama] = useState(null);
    const [categoryHorror, setCategoryHorror] = useState(null);
    const [showPreview, setShowPreview] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);

    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    
    // const movies = getMovies(selector);
    const favourites = getFavourites(selector);
    const clickfav = movie => {
        dispatch(addFavourite(movie));
    };
    const clickMovie = movieId => {
        setSelectedMovieId(movieId);
        setShowPreview(true);
    };

    useEffect(() => {
        dispatch(fetchFromLocalStorage);
        api.getMovies({ category_id: '1' })
            .then(movies => {
                setCategoryAnimated(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ category_id: '2' })
            .then(movies => {
                setCategoryComedy(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ category_id: '3' })
            .then(movies => {
                setCategoryDrama(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
        api.getMovies({ category_id: '4' })
            .then(movies => {
                setCategoryHorror(movies);
            })
            .catch(error => {
                alert('Failed to connect API: /movies/');
            });
    },[]);
    return (
        <>
            {showPreview && <Preview setShowPreview={setShowPreview} selectedMovieId={selectedMovieId} />}
            <section>
                <Header />

                <div className="list">
                    <div className="left">
                        <div className="newly-rel">
                            <hr />
                            <h2>Animated</h2>
                            <hr />
                        </div>
                    </div>
                    {categoryAnimated && categoryAnimated.results.length > 0 ? (
                        <ul>
                            {categoryAnimated.results.map(movie => (
                                <li>
                                    <div className="card">
                                        {movie &&
                                            Object.values(favourites).filter(
                                                favoriteMovie => movie.id === favoriteMovie.id
                                            ).length === 0 && (
                                                <img
                                                    className="fav"
                                                    onClick={() => {
                                                        clickfav(movie);
                                                    }}
                                                    src={IconFav}
                                                    alt=""
                                                />
                                            )}
                                        <img
                                            onClick={() => clickMovie(movie.id)}
                                            className="image"
                                            src={'https://res.cloudinary.com/djsaxp5w0/' + movie.image_mobile}
                                            alt=""
                                        />
                                    </div>
                                    <h1>{movie.name}</h1>
                                    <p>TV-MA | Action, Crime</p>
                                    <a href={movie.trailer_link} target="_blank" rel="noreferrer"><button>Watch Trailer</button></a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="no-post">
                            <p>No movies here yet...</p>
                        </div>
                    )}
                </div>

                <div className="list">
                    <div className="left">
                        <div className="newly-rel">
                            <hr />
                            <h2>Romance</h2>
                            <hr />
                        </div>
                    </div>
                    {categoryComedy && categoryComedy.results.length > 0 ? (
                        <ul>
                            {categoryComedy.results.map(movie => (
                                <li>
                                    <div className="card">
                                        {movie &&
                                            Object.values(favourites).filter(
                                                favoriteMovie => movie.id === favoriteMovie.id
                                            ).length === 0 && (
                                                <img
                                                    className="fav"
                                                    onClick={() => {
                                                        clickfav(movie);
                                                    }}
                                                    src={IconFav}
                                                    alt=""
                                                />
                                            )}
                                        <img
                                            onClick={() => clickMovie(movie.id)}
                                            className="image"
                                            src={'https://res.cloudinary.com/djsaxp5w0/' + movie.image_mobile}
                                            alt=""
                                        />
                                    </div>
                                    <h1>{movie.name}</h1>
                                    <p>TV-MA | Action, Crime</p>
                                    <a href={movie.trailer_link} target="_blank" rel="noreferrer"><button>Watch Trailer</button></a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="no-post">
                            <p>No movies here yet...</p>
                        </div>
                    )}
                </div>

                <div className="list">
                    <div className="left">
                        <div className="newly-rel">
                            <hr />
                            <h2>Drama</h2>
                            <hr />
                        </div>
                    </div>
                    {categoryDrama && categoryDrama.results.length > 0 ? (
                        <ul>
                            {categoryDrama.results.map(movie => (
                                <li>
                                    <div className="card">
                                        {movie &&
                                            Object.values(favourites).filter(
                                                favoriteMovie => movie.id === favoriteMovie.id
                                            ).length === 0 && (
                                                <img
                                                    className="fav"
                                                    onClick={() => {
                                                        clickfav(movie);
                                                    }}
                                                    src={IconFav}
                                                    alt=""
                                                />
                                            )}
                                        <img
                                            onClick={() => clickMovie(movie.id)}
                                            className="image"
                                            src={'https://res.cloudinary.com/djsaxp5w0/' + movie.image_mobile}
                                            alt=""
                                        />
                                    </div>
                                    <h1>{movie.name}</h1>
                                    <p>TV-MA | Action, Crime</p>
                                    <a href={movie.trailer_link} target="_blank" rel="noreferrer"><button>Watch Trailer</button></a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="no-post">
                            <p>No movies here yet...</p>
                        </div>
                    )}
                </div>

                <div className="list">
                    <div className="left">
                        <div className="newly-rel">
                            <hr />
                            <h2>Horror</h2>
                            <hr />
                        </div>
                    </div>
                    {categoryHorror && categoryHorror.results.length > 0 ? (
                        <ul>
                            {categoryHorror.results.map(movie => (
                                <li>
                                    <div className="card">
                                        {movie &&
                                            Object.values(favourites).filter(
                                                favoriteMovie => movie.id === favoriteMovie.id
                                            ).length === 0 && (
                                                <img
                                                    className="fav"
                                                    onClick={() => {
                                                        clickfav(movie);
                                                    }}
                                                    src={IconFav}
                                                    alt=""
                                                />
                                            )}
                                        <img
                                            onClick={() => clickMovie(movie.id)}
                                            className="image"
                                            src={'https://res.cloudinary.com/djsaxp5w0/' + movie.image_mobile}
                                            alt=""
                                        />
                                    </div>
                                    <h1>{movie.name}</h1>
                                    <p>TV-MA | Action, Crime</p>
                                    <a href={movie.trailer_link} target="_blank" rel="noreferrer"><button>Watch Trailer</button></a>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="no-post">
                            <p>No movies here yet...</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default Categories;
