import { useState } from "react";
import "./App.css";
import ImageShow from "./components/ImageShow";
import Search from "./components/Search";
import axios from "axios";
function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const getImage = async searchTerm => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          headers: {
            Authorization:
              "Client-ID z7LEpmjd2-lBGE8devKNYOzkv0MLfpKq9T07hSNBeyc",
          },
          params: {
            query: searchTerm,
          },
        }
      );
      setLoading(false);
      const result = response.data.results;
      setImages(result);
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App" style={{ backgroundColor: "orange" }}>
      <Search handleSubmit={getImage} />
      {loading && <h1>Loading...</h1>}
      <ImageShow images={images} />
    </div>
  );
}

export default App;
