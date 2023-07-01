import  useFetch  from "../../useFetch/useFetch";
import Card from "../../components/Card/card";
import Banner from "../../components/Banner/banner";
import "../Home/home.scss";
import "../Accommodations/accommodations.scss";

function App() {
  const logements = useFetch(window.location + "logements.json");

  return (
    <div className="Home">
      <div className="Banner">
        <Banner />
      </div>
      {logements.fetchedData && (
        <div className="Cards">
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

// "logements.json"