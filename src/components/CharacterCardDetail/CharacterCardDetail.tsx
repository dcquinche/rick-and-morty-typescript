import './styles.css';
import { useNavigate } from 'react-router-dom';

interface character {
  image: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  originLocation: string;
  lastKnownLocation: string
}

const CharacterCardDetail = (props: character) => {
  const navigate = useNavigate();
  const handleClickCharacters = () => {
    navigate('/characters');
  };

  return (
    <div className="characterCardDetail">
      <figure className="characterCardDetail__figure">
        <img className="characterCardDetail__image" alt="product" src={props.image} />
      </figure>
      <section className="characterCardDetail__textContainer">
        <section className="characterCardDetail__description">
          <h2 className="characterCardDetail__info">{props.name}</h2>
          <p className="characterCardDetail__info"><strong>Status:</strong> {props.status}</p>
          <p className="characterCardDetail__info"><strong>Species:</strong> {props.species}</p>
          <p className="characterCardDetail__info"><strong>Gender:</strong> {props.gender}</p>
          <p className="characterCardDetail__info"><strong>Origin:</strong> {props.originLocation}</p>
          <p className="characterCardDetail__info"><strong>Last Known Location:</strong> {props.lastKnownLocation}</p>
        </section>
        <section className="characterCardDetail__buttonContainer">
          <button className="characterCardDetail__button" type="submit" onClick={handleClickCharacters}>Go Back</button>
        </section>
      </section>
    </div>
  );
};

export default CharacterCardDetail;
