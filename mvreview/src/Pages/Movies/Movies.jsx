import React from "react";
import { useState } from "react";

function Movies() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    async function temp() {
      const response = await getmovies();
      if (response["status"] == "success") {
        console.log("movies Fetched Successfully");
        setmovies(response["data"]);
      }
    }
    temp();
  }, []);

  
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Details</th>
            <th>Rent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((p) => {
            return (
              <tr key={p["id"]}>
                <td>{p["title"]}</td>
                <td>{p["mvrelease"]}</td>
                <td>{p["rent"]}</td>
                <td>
                  <button className="btn btn-danger btn-sm">delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Movies;
