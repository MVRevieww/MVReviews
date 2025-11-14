import React from "react";

function MyReviews() {const [movies, setmovies] = useState([]);

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
            <th>Release</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((p) => {
            return (
              <tr key={p["id"]}>
                <td>{p["id"]}</td>
                <td>{p["title"]}</td>
                <td>{p["mvrelease"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MyReviews;
