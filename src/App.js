import React, { useState, useEffect } from "react";
import "./App.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


function App() {
  const [currentPage, setCurrentPage] = useState("hem");


  return (
    <div>
      <Header />
      <Navbar setCurrentPage={setCurrentPage} />
      <MainContent currentPage={currentPage} />
      <Footer />
    </div>
  );
}


function Header() {
  const [time, setTime] = useState(new Date());


  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);


  const formattedDate = time.toLocaleDateString("sv-SE");
  const formattedTime = time.toLocaleTimeString("sv-SE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });


  return (
    <header className="header">
      <img src="/Nyheter.png" alt="Nyheter" className="header-image" />
      <div className="header-dateTime">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
      </div>
    </header>
  );
}


function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="#" onClick={() => setCurrentPage("hem")} className="nav-link">Hem</a></li>
        <li><a href="#" onClick={() => setCurrentPage("ekonomi")} className="nav-link">Ekonomi</a></li>
        <li><a href="#" onClick={() => setCurrentPage("sport")} className="nav-link">Sport</a></li>
        <li><a href="#" onClick={() => setCurrentPage("politik")} className="nav-link">Politik</a></li>
        <li><a href="#" onClick={() => setCurrentPage("noje")} className="nav-link">Nöje</a></li>
      </ul>
    </nav>
  );
}


function MainContent({ currentPage }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const goNext = () => setCurrentImageIndex((prev) => (prev === 2 ? 0 : prev + 1));
  const goPrev = () => setCurrentImageIndex((prev) => (prev === 0 ? 2 : prev - 1));


  const renderPage = () => {
    switch (currentPage) {
      case "hem":
        return (
          <div className="main-content">
            <div className="left-column">
              <Card image="/stare.png" title="Synnedsatta upplever en sämre användarupplevelse" description="En kort beskrivning av nyheten." />
              <Card image="/newyork.png" title="New Yorks biggest economy crisis in ten years" description="En annan kort beskrivning." />
              <Card image="/eu.png" title="EU vägrar ha omröstning" description="Ytterligare en beskrivning." />
            </div>
            <div className="middle-column">
              <Card image="/egg.png" title="Nyhet 4" description="En fjärde nyhet." />
              <Card image="/nationellaprovet.png" title="Nyhet 4" description="En fjärde nyhet." />
              <Card image="/politik.png" title="Nyhet 4" description="En fjärde nyhet." />
            </div>
            <div className="right-column">
              <Card image="/royalty.png" title="Nyhet 5" description="En femte nyhet." />
              <Card image="/slott.png" title="Nyhet 6" description="En sjätte nyhet." />
              <Card image="/pengar.png" title="Nyhet 6" description="En sjätte nyhet." />
            </div>
          </div>
        );
      case "ekonomi":
        return (
          <div className="main-content">
            <div className="column">
              <TransformWrapper>
                <TransformComponent>
                  <p className="zoomable-text">
                  Fusce convallis, mauris imperdiet gravida bibendum, nisl lectus interdum purus, sit amet sollicitudin velit magna eu quam. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque sed dolor. Aliquam congue fermentum nisl. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Vestibulum sed ante. Donec sagittis euismod purus. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Quisque diam lorem, interdum vitae, dapibus ac, scelerisque vitae, pede. Donec eget tellus non erat lacinia fermentum. Fusce convallis, mauris imperdiet gravida bibendum, nisl lectus interdum purus, sit amet sollicitudin velit magna eu quam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit.
                  </p>
                </TransformComponent>
              </TransformWrapper>
            </div>
          </div>
        );
      case "sport":
        return (
          <div className="sport-content">
            <h1 className="header-title">Sport Nyheter</h1>
            <TransformWrapper>
  <TransformComponent>
    <p className="small-text">Fusce convallis, mauris imperdiet gravida bibendum</p>
  </TransformComponent>
</TransformWrapper>


<TransformWrapper>
  <TransformComponent>
    <p className="medium-text">Fusce convallis, mauris imperdiet gravida bibendum</p>
  </TransformComponent>
</TransformWrapper>


<TransformWrapper>
  <TransformComponent>
    <p className="large-text">Fusce convallis, mauris imperdiet gravida bibendum</p>
  </TransformComponent>
</TransformWrapper>


          </div>
        );
      case "politik":
        return (
          <div className="politics-content">
            <h1>Politik Nyheter</h1>
            <div className="carousel-container">
              <TransformWrapper>
                <TransformComponent>
                  <img src={["/slott.png", "/vattenmelon.png", "/politik.png"][currentImageIndex]} alt="Politik Bild" className="carousel-image" />
                </TransformComponent>
              </TransformWrapper>
              <div className="carousel-controls">
                <button onClick={goPrev}>Förra</button>
                <button onClick={goNext}>Nästa</button>
              </div>
            </div>
          </div>
        );
        case "noje":
          return (
            <div className="noje-content">
              <h1>Nöje - Nyheter</h1>
              <TransformWrapper>
                <TransformComponent>
                  <table className="news-table">
                    <thead>
                      <tr>
                        <th>Nyhet</th>
                        <th>Beskrivning</th>
                        <th>Datum</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Paris fashion week</td>
                        <td>Det största eventet under 2025 i Frankrike.</td>
                        <td>2025-04-15</td>
                      </tr>
                      <tr>
                        <td>Oscar galan</td>
                        <td>Den årliga klassiska galan hålls i Los Angeles iår.</td>
                        <td>2025-04-27</td>
                      </tr>
                      <tr>
                        <td>Balett i kungliga teatern</td>
                        <td>Svansjön har premiär återigen, men med en annan huvudroll.</td>
                        <td>2025-04-19</td>
                      </tr>
                    </tbody>
                  </table>
                </TransformComponent>
              </TransformWrapper>
            </div>
          );
       
      default:
        return <div>Hem - Nyheter</div>;
    }
  };


  return <div>{renderPage()}</div>;
}


function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Företagsnamn. Alla rättigheter reserverade.</p>
    </footer>
  );
}


function Card({ image, title, description }) {
  return (
    <div className="card">
      <TransformWrapper>
        <TransformComponent>
          <img src={image} alt={title} className="card-image" />
        </TransformComponent>
      </TransformWrapper>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}


export default App;


