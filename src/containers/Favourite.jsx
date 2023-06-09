import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteFavourite, fetchFromLocalStorage } from '../reducks/favourites/operations';
import { getFavourites } from '../reducks/favourites/selectors';
import IconFav from '../assets/img/icon-fav.png';
import Preview from '../components/Common/Preview';
import Header from '../components/Common/Header';

function Favourite() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const [showPreview, setShowPreview] = useState(false);
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const favourites = getFavourites(selector);
    const clickMovie = movieId => {
        setSelectedMovieId(movieId);
        setShowPreview(true);
    };
    useEffect(() => {
        dispatch(fetchFromLocalStorage());
    });
    return (
        <>
            {showPreview && <Preview setShowPreview={setShowPreview} selectedMovieId={selectedMovieId} />}
            <section>
                <Header />
                <div className="list">
                    <div className="left">
                        <div className="newly-rel">
                            <hr />
                            <h2>Newly Released</h2>
                            <hr />
                        </div>
                    </div>
                    <ul>
                        {favourites && favourites.length > 0 ? (
                            favourites.map(favourite => (
                                <li>
                                    <div className="card">
                                        <img
                                            className="fav"
                                            onClick={() => {
                                                dispatch(deleteFavourite(favourite.id));
                                            }}
                                            src={IconFav}
                                            alt=""
                                        />
                                        <img
                                            onClick={() => clickMovie(favourite.id)}
                                            className="image"
                                            src={'https://res.cloudinary.com/djsaxp5w0/' + favourite.image_mobile}
                                            alt=""
                                        />
                                    </div>
                                    <h1>{favourite.name}</h1>
                                    <p>TV-MA | Action, Crime</p>
                                    <a href={favourite.trailer_link} target="_blank" rel="noreferrer"><button>Watch Trailer</button></a>
                                </li>
                            ))
                        ) : (
                            <p>No movies here yet...</p>
                        )}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Favourite;
