import { useEffect, useState } from "react";
import { Blog } from "../compenents/blog.jsx";
import { Heading } from "../compenents/heading.jsx";
import { Navbar } from "../compenents/navbar.jsx";
import axios from "axios";

export default function Feed() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
     
        const response = await axios.get(
          "http://localhost:3000/api/articles",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        console.log(response.data); // Log the full response
        const data = response.data.articles; // Assuming the API returns articles in the "articles" key
        setArticles(data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching data:", error); // Error handling
      }
    }

    fetchData(); // Call the function to fetch data
    console.log(articles);
  }, []);
  return (
    <>
      <Navbar></Navbar>

      <div className="pt-16">
        {articles.map(function (article, index) {
          return (
            <div key={index} className="m-2 p-3  ">
              <Blog
                authername={article.authorName}
                publishdate={article.publishDate}
                title={
                  "JAVA vs Javascript key difference in boath the languages "
                }
                content={article.content}
              ></Blog>
            </div>
          );
        })}
      </div>
    </>
  );
}
