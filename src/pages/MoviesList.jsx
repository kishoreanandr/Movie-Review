import { useEffect } from "react";
import { Card } from "../components";
import { useNavigate } from "react-router-dom";
import UseFetch from "../hooks/UseFetch.jsx";

export const MoviesList = ({ title, apiPath }) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    const { data: movies } = UseFetch(apiPath);
    const navigator = useNavigate();

    return (
        <>
            <main className="container" style={{ marginTop: "30px" }}>
                {title === "You are guide to new Movies" && (
                    <div className="bg-body-tertiary p-5 border mb-5">
                        <h3 className="text-primary">Welcome to Movie Show</h3>
                        <p className="lead">Here you can find the movies like top, popular, upcoming etc....</p>
                        <button
                            className="btn btn-primary"
                            onClick={() => navigator("/movie/popular")}
                        >
                            Explore Now
                        </button>
                    </div>
                )}

                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-3">
                        {movies.map((movie) => (
                            <Card key={movie.id} movie={movie} />
                        ))}
                    </div>
                </div>
                <h5 className="text-danger">{title}</h5>
            </main>
        </>
    );
};
