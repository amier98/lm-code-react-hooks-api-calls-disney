import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/header";
import CharacterContainer from "./components/character_container";
import Navigation from "./components/navigation";
import { DisneyCharacter } from "./disney_character";

export const FavouritesContext = React.createContext<number[]>([]);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [characterFavourites, setCharacterFavourites] = useState<Array<number>>(
    []
  );

  // Some dummy state representing disney characters
  const [characters, setCharacters] = useState<Array<DisneyCharacter>>([]);

  useEffect(() => {
    const getCharacters = async (pageNumber: number) => {
      const result = await fetch(
        `http://api.disneyapi.dev/character?page=${pageNumber}`
      );
      const res = (await result.json()) as { data: DisneyCharacter[] };
      setCharacters(res.data);
    };
    getCharacters(currentPage);
  }, [currentPage]);

  console.log(characters);

  return (
    <div className="page">
      <FavouritesContext.Provider value={characterFavourites}>
        <Header currentPage={currentPage} />
        <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <CharacterContainer
          characters={characters}
          updateFavourites={setCharacterFavourites}
        />
      </FavouritesContext.Provider>
    </div>
  );
};

export default App;
