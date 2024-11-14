

// Movie.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./movie.css";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState(null);
  const [trailerId, setTrailerId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [id]);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&append_to_response=videos`
      );
      const data = await response.json();
      setMovie(data);

      const trailer = data.videos.results.find(video => video.type === "Trailer" && video.site === "YouTube");
      if (trailer) {
        setTrailerId(trailer.key);
      }
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop"
          src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`}
          alt="Backdrop"
        />
      </div>
      <div className="movie__detail">
        <div className="movie__detailLeft">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`}
              alt="Poster"
            />
          </div>
        </div>
        <div className="movie__detailRight">
          <div className="movie__detailRightTop">
            <div className="movie__name">{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
            <div className="movie__tagline">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
            <div className="movie__rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""} <i className="fas fa-star" />
              <span className="movie__voteCount">
                {currentMovieDetail ? "(" + currentMovieDetail.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
            <div className="movie__releaseDate">
              {currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}
            </div>
            <div className="movie__genres">
              {currentMovieDetail &&
                currentMovieDetail.genres &&
                currentMovieDetail.genres.map((genre) => (
                  <span className="movie__genre" key={genre.id}>
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
          <div className="movie__detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie__links">
        <div className="movie__heading">Useful Links</div>
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", backgroundColor: "red" }}
          >
            <p>
              {/* <span className="movie__imdbButton movie__Button" style={{ backgroundColor: "red" }}>
                IMDB <i style={{ backgroundColor: "red" }} className="fa-brands fa-youtube"></i>
              </span> */}
            </p>
          </a>
        )}
        {trailerId && (
          <div>
            <h2>Official Trailer</h2>
            <iframe
              width="450"
              height="315"
              src={`https://www.youtube.com/embed/${trailerId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      {/* <div className="movie__production">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            company.logo_path && (
              <span className="productionCompanyImage" key={company.id}>
                <img
                  className="movie__productionComapany"
                  src={"https://image.tmdb.org/t/p/original" + company.logo_path}
                  alt={company.name}
                />
                <span>{company.name}</span>
              </span>
            )
          ))}
      </div> */}
    </div>
  );
};

export default Movie;
