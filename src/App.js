import Header from "./views/home/header";
import Footer from './views/home/footer';
import WeatherContainer from "./views/home/wether-container";

function App() {
  return (
    <div className="App container-fluid p-0">
      <Header />
      <div className='container text-center p-2 hero-wrapper'>
        <h1 className="display-1">Weather24</h1>
        <h1> A new way to check the weather </h1>
        <WeatherContainer />
      </div>
      <Footer />
    </div>
  );
}

export default App;
