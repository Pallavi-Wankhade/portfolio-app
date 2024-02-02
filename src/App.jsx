import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import Home from "./Pages/Home";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <>
      <div className="app">
        {/* <Home /> */}
        <PageRoutes />
      </div>
    </>
  );
}

export default App;
