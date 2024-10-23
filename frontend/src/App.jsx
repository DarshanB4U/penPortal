import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./routes/signup.jsx";
import { Signin } from "./routes/signin.jsx";
import Feed from "./routes/feed.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
