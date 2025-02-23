import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Backup from '../Assets/Backup.jpg';
import { convertMinutes } from "../utils/util";

export const MoviesDetails = () => {
    const params=useParams();
    const [movie, setMovie] = useState([]);
    const key = process.env.REACT_APP_API_KEY;

    const url =`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
    const image=movie.poster_path?`https://image.tmdb.org/t/p/original${movie.poster_path}`:Backup;
    useEffect(()=>{
        async function fetchMovies() {
          fetch(url)
          .then((res)=>res.json())
          .then((jsonData)=>setMovie(jsonData));
        }
        fetchMovies();
      })
      console.log(movie);
    useEffect(()=>{
        document.title=`${movie.title}`
        console.log(document.title);
    });

    if (!movie) {
        return <div>Loading...</div>;
    }

   return(
    <main className="container">
        <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>
        <div className="row">
            <div className="col-md-4">
                <img src={image} alt="Back Up Image" className="img-fluid img-thumbnail"/>
            </div>
            <div className="col-md-8">
                <h3 className="text-primary">{movie.title}</h3>
                <p className="mt-3">{movie.overview }</p>

                {movie.genres?<p className="d-flex gap-3">
                    {movie.genres.map((genre)=>(
                        <span key={genre.id} className="badge bg-danger">{genre.name}</span>
                    ))}
                </p>: ""}
                <p className="mt-2"> 
                    <i className="bi bi-star-fill text-warning"></i>{movie.vote_average} | 
                    <i className="bi bi-people-fill text-success"></i> {movie.vote_count} reviews       
                </p>

                <table className="table table-bordered w-50 mt-2">
                    <tbody>
                        <tr>
                            <th>Runtime</th>
                            <td>{convertMinutes(movie.runtime)}</td>
                        </tr>
                        <tr>
                            <th>Budget</th>
                            <td>{movie.budget}</td>
                        </tr>
                        <tr>
                            <th>Revenue</th>
                            <td>{movie.revenue}</td>
                        </tr>
                        <tr>
                            <th>Release Date</th>
                            <td>{movie.release_date}</td>
                        </tr>
                    </tbody>
                </table>
                <a className="btn btn-warning" target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}`}>View in IMDB</a>
            </div>
        </div>
    </main>
   )
};
