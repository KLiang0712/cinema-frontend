import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Categories from './containers/Categories';
import Preview from './components/Common/Preview';
// import Favourite from './containers/Favourite';
import MainImage from './components/Common/MainImage';
import Footer from './components/Common/Footer';

const Router = () => {
    return (
        <>
            {/* <Switch>
                <Route path={'/'} element={Home} />
                <Route path={'/categories'} element={Categories} />
                <Route path={'/preview/:id/'} element={Preview} />
                <Route path={'/favourites'} element={Favourite} />
            </Switch> */}
            <BrowserRouter>
                <MainImage />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/preview/:id/" element={<Preview />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
};
export default Router;
