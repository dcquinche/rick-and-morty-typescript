import './styles.css';

interface episode {
  name: string;
  episode: string;
  airDate: string
}

const EpisodeCard = (props: episode) => (
  <div className="episodeCard">
    <h4 className="episodeCard__name">{props.name}</h4>
    <p><strong>Episode: </strong>{props.episode}</p>
    <p><strong>Air Date: </strong>{props.airDate}</p>
  </div>
);

export default EpisodeCard;
