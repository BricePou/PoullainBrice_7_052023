import useFetch from "../../useFetch/useFetch";
import Card from "../../components/Card/card";
import Banner from "../../components/Banner/banner";
import "../Home/home.scss";
import "../Accommodations/accommodations.scss";

function App() {
  const logements = useFetch("/logements.json");

  if (logements.isLoading) {
    return "Chargement en cours";
  }

  return (
    <div className="home">
      <div className="banner">
        <Banner />
      </div>
      {logements.fetchedData && (
        <div className="cards">
          {logements.fetchedData.map((files) => (
            <Card
              key={files.id}
              link={`/accomodation/${files.id}`}
              title={files.title}
              cover={files.cover}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
