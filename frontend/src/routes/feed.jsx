import { useEffect, useState } from "react";
import { Blog } from "../components/blog.jsx";
// import { Heading } from "../components/heading.jsx";
import { Navbar } from "../components/navbar.jsx";
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

      <div className="">
        {articles.map(function (article,) {
          return (
            <div key={article.id} >
              <Blog
                authername={article.author.name}
                publishdate={article.createdAt}
                title={
                  article.descreption
                }
                content={article.body}
              ></Blog>
            </div>
          );
        })}
        <div></div>
      </div>
    </>
  );
}
