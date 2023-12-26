import { DisneyCharacter } from "../disney_character";

interface CharacterProps {
  character: DisneyCharacter;
  characterFavourites: Array<number>;
  updateFavourites: (fav: Array<number>) => void;
}

const Character: React.FC<CharacterProps> = ({
  character,
  characterFavourites,
  updateFavourites,
}) => {
  function createFavourites(characterID: number) {
    if (!characterFavourites.includes(characterID)) {
      updateFavourites([...characterFavourites, characterID]);
      console.log(characterID);
    } else {
      const updateCharacter = characterFavourites.filter(
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
        {!characterFavourites.includes(character._id)
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
