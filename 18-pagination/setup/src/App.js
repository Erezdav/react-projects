import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
import paginate, { pages } from "./utils";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const prevHandle = (index) => {
    if (page > 0) {
      setPage(page - 1);
    }
    return page;
  };

  const nextHandle = (index) => {
    if (page < data.length - 1) {
      setPage(page + 1);
    }
    return page;
  };
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading..." : " pagination"}</h1>

        <div className="underline"></div>
        <section className="followers">
          <div className="container">
            {followers.map((follower) => {
              return <Follower key={follower.id} {...follower} />;
            })}
          </div>
          {!loading && (
            <div className="btn-container">
              <button className="prev-btn" onClick={prevHandle}>
                prev
              </button>
              {followers.map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`page-btn ${
                      index === page ? "active-btn" : null
                    }`}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })}
              <button className="next-btn" onClick={nextHandle}>
                next
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
export default App;
