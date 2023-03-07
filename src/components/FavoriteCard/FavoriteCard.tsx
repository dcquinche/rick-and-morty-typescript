import './styles.css';

interface character {
  name: string;
  image: string;
}

const FavoriteCard = (props: character) => (
  <div className="favoriteCard">
    <figure className="favoriteCard__figures">
      <img className="favoriteCard__image" alt="character" src={props.image} />
    </figure>
    <h4 className="favoriteCard__name">{props.name}</h4>
  </div>
);

export default FavoriteCard;

