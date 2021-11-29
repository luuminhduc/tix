import React from "react";

const MovieItem = ({ item }) => {
  return (
    <div className="movie_item">
      <div className="movie_item_front">
        <img src={item.hinhAnh} alt="" />
        <p className="name">{item.tenPhim}</p>
      </div>
      <div className="movie_item_back">
        <div className="movie_item_back_overlay">
          <span class="material-icons">play_circle</span>
        </div>
        <button>Detail</button>
      </div>
    </div>
  );
};

export default MovieItem;
