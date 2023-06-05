import React, { useState, useEffect } from 'react';
// import { createSelectorCreator } from 'reselect';
import API from '../../API';
// import { useDispatch } from 'react-redux';
// import { push } from 'connected-react-router';
import CloseButtton from '../../assets/img/icon-close.png';

const api = new API();

const Preview = ({ setShowPreview, selectedMovieId }) => {
    const [movie, setMovie] = useState(null);
    // const dispatch = useDispatch();

    useEffect(() => {
        api.getMovie(selectedMovieId)
            .then(movie => {
                setMovie(movie);
            })
            .catch(error => {
                alert('Faild to connect API: /movie/:id/');
            });
    }, [selectedMovieId]);

    console.log('movie', movie);

    return (
        <>
            <section className="preview">
                {movie && (
                    <div className="opecity">
                        <img className="icon-close" src={CloseButtton} onClick={() => setShowPreview(false)} alt="" />
                        <img className="background2" src={movie.image} alt="" />
                        <div className="preview-content">
                            <div className="preview-img">
                                <img className="preview" src={movie.image} alt="" />
                            </div>
                            <div className="preview-text">
                                <h1>{movie.name}</h1>
                                <p>Movie</p>
                                <h4>{movie.rating}</h4>
                                <p>{movie.movie_duration} Minutes - USA</p>
                                <div className="preview-buttons">
                                    <button>Action</button>
                                    <button>Crime</button>
                                    <button>Drama</button>
                                    <button>Fantasy</button>
                                    <button>Thriller</button>
                                </div>
                                <p>{movie.description}</p>
                                <a href={movie.trailer_link} target="_blank" rel="noreferrer"><button className="preview-play">Watch Trailer</button></a>
                            </div>
                        </div>
                    </div>
                )}
                
            </section>
        </>
    );
};

export default Preview;
