import React, { useState, useEffect } from 'react';
import useInitialState from '../hooks/useInitialState';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState/';

const App = () => {
    const videos = useInitialState(API)

    return (
        <div>
            <Header/>
            <Search/>
            {videos && Object.keys(videos).map(categorie => {
                if (videos[categorie].length) {
                    return (
                        <Categories
                            title={categorie}
                            key={categorie}
                        >
                            <Carousel>
                                {videos[categorie].map(video => {
                                    return (
                                        <CarouselItem
                                            cover={video.cover}
                                            alt={video.title}
                                            key={video.id}
                                            year={video.year}
                                            title={video.title}
                                            content={video.contentRating}
                                            duration={video.duration}
                                        />
                                    )
                                })}
                            </Carousel>
                        </Categories>
                    )
                }
                return null
            })}
            <Footer/>
        </div>
    )
}

export default App;