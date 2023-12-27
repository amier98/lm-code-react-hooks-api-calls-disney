import { useContext } from "react";
import { FavouritesContext } from "../App";
import { DisneyCharacter } from "../disney_character";

interface CharacterProps {
  character: DisneyCharacter;
  updateFavourites: (fav: Array<number>) => void;
}

const Character: React.FC<CharacterProps> = ({
  character,
  updateFavourites,
}) => {
  const characterContext = useContext(FavouritesContext);

  function createFavourites(characterID: number) {
    if (!characterContext.includes(characterID)) {
      updateFavourites([...characterContext, characterID]);
      console.log(characterID);
    } else {
      const updateCharacter = characterContext.filter(
        (id) => id !== characterID
      );
      updateFavourites(updateCharacter);
    }
  }

  return (
    <article className="card">
      <h2>{character.name}</h2>

      <button
        className="card__button "
        onClick={() => createFavourites(character._id)}
      >
        {!characterContext.includes(character._id)
          ? "Add to favourites"
          : "Favourited"}
      </button>

      <img
        className="card__img"
        src={character.imageUrl}
        alt={character.name}
      />
    </article>
  );
};

export default Character;
