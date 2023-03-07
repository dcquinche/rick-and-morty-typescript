import './styles.css';

interface location {
  name: string;
  type: string;
  dimension: string
}

const LocationCard = (props: location) => (
  <div className="locationCard">
    <h4 className="locationCard__name">{props.name}</h4>
    <p><strong>Type: </strong>{props.type}</p>
    <p><strong>Dimension: </strong>{props.dimension}</p>
  </div>
);

export default LocationCard;
