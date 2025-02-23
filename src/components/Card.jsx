import { Link } from "react-router-dom";
import Backup from "../Assets/Backup.jpg";

export const Card = ({movie}) => {
    const {poster_path,id,overview,title,vote_average,vote_count}=movie;
    const image=poster_path?`https://image.tmdb.org/t/p/original${poster_path}`:Backup;
    return <>
        <div className="col">
            <div className="card shadow-sm" title={title}>
                <img src={image} className="card-img-top" alt="Not founded"/>
                <div className="card-body">
                    <h5 className="card-title text-primary text-overflow-1">{title}</h5>
                    <p className="card-text text-overflow-2"> {overview}</p>
                    <div className="d-flex align-items-center justify-content-between">
                        <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-primary stretched-link">Read More</Link>
                        <small>
                            <i className="bi bi-star-fill text-warning"></i> {vote_average} | {vote_count} review
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </>
}