import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./routes/signup.jsx";
import { Signin } from "./routes/signin.jsx";
import Feed from "./routes/feed.jsx";
import CreateArt from "./routes/createArticle.jsx";

import { Navbar } from "./compenents/navbar.jsx";
import { Blog } from "./compenents/blog.jsx";



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes >
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/feed" element={<Feed />} />
          <Route path ="/createArt" element={<CreateArt/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
