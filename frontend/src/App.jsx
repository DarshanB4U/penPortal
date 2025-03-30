import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./routes/signup.jsx";
import { Signin } from "./routes/signin.jsx";
import Feed from "./routes/feed.jsx";
import CreateArt from "./routes/createArticle.jsx";

import { Navbar } from "./components/navbar.jsx";
import { Blog } from "./components/blog.jsx";

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes >
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/createArt" element={<CreateArt/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
