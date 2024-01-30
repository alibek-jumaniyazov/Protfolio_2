import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { routes } from "./router/router";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          {
            routes.map((item) => (
              <Route path={item.path} element={item.element} key={item.id} />
            ))
          }
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
