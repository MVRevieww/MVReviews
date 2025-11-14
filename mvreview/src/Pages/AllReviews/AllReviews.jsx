import React from "react";
import { getAllReviews } from "../../Services/movie";

function AllReviews() {
  const [reviews, setreviews] = useState([]);

  useEffect(() => {
    async function temp() {
      const response = await getAllReviews();
      if (response["status"] == "success") {
        console.log("reviews Fetched Successfully");
        setreviews(response["data"]);
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
            <th>Movie Id</th>
            <th>Review</th>
            <th>Rating</th>
            <th>UserId</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((p) => {
            return (
              <tr key={p["id"]}>
                <td>{p["id"]}</td>
                <td>{p["movie_id"]}</td>
                <td>{p["review"]}</td>
                <td>{p["rating"]}</td>
                <td>{p["user_id"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllReviews;
