import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieListRequest } from "../../api/movieApi";
import MovieItem from "../MovieItem";

const MovieList = () => {
  const dispatch = useDispatch();

  const { movieList } = useSelector((state) => state.movieListReducer);
  console.log(movieList);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  useEffect(() => {
    dispatch(fetchMovieListRequest());
  }, [dispatch]);
  return (
    <div className="movieList">
      {movieList.length > 0 && (
        <Slider {...settings}>
          {movieList.map((item, idx) => {
            return <MovieItem key={idx} item={item} />;
          })}
        </Slider>
      )}
    </div>
  );
};

export default MovieList;
