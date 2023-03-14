import './styles.css';
import { useAuth0 } from '@auth0/auth0-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface character {
  name: string;
  image: string;
  id: number;
}

const CharacterCard = (props: character) => {
  const { isAuthenticated } = useAuth0();

  const handleClickFavorite = () => {
    const favoritesArr = JSON.parse(localStorage.getItem('favorites') as string) || [];
    favoritesArr.push(props);
    const favoritesArrJSON = JSON.stringify(favoritesArr);
    localStorage.setItem('favorites', favoritesArrJSON);
  };

  return (
    <div className="characterCard">
      {
        isAuthenticated ? (
          <figure className="characterCard__figures">
            <img className="characterCard__image" alt="character" src={props.image} />
            <FontAwesomeIcon className="characterCard__icon" icon={faStar} size="2x" title="Add a Favorites" onClick={handleClickFavorite} />
          </figure>
        ) : (
          <img className="characterCard__image" alt="character" src={props.image} />
        )
      }
      <h4 className="characterCard__name">{props.name}</h4>
    </div>
  );
};

export default CharacterCard;
