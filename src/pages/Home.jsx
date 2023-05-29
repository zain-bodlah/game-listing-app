import { useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import GlobalApi from "../services/GlobalApi";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenresId from "../components/GamesByGenresId";

function Home() {
  const [allGameList, setAllGameList] = useState();
  const [gameListByGenres, setGameListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState("Action");
  useEffect(() => {
    getAllGamesList();
    getGameListByGenresId(4);
  }, []);

  const getAllGamesList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setAllGameList(resp.data.results);
    });
  };

  const getGameListByGenresId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      console.log("Game List By Genre Id: ", resp.data.results);
      setGameListByGenres(resp.data.results);
    });
  };
  return (
    <div className="grid grid-cols-4 px-6 p-2 mt-10">
      <div className="hidden md:block px-2 m-1">
        <GenreList
          genreId={(genreId) => getGameListByGenresId(genreId)}
          selectedGenresName={(name) => setSelectedGenresName(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {allGameList?.length > 0 && gameListByGenres.length > 0 ? (
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GamesByGenresId
              gameList={gameListByGenres}
              selectedGenresName={selectedGenresName}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Home;
