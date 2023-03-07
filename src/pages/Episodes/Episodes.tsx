import './styles.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEpisodes } from '../../features/episodes';
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard';

interface RootState {
  episodes: {
    episodes: [{
      id: number;
      name: string;
      episode: string;
      air_date: string;
      species: string;
      gender: string;
    }]
  }
}

interface event {
  target: {
    value: string;
  }
}

const Episodes = () => {
  const { episodes } = useSelector((state: RootState) => state.episodes);
  const [results, setResults] = useState(episodes);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEpisodes());
  }, []);

  useEffect(() => {
    setResults(!search ? episodes : episodes.filter((episode) => episode.name.toLowerCase().includes(search.toLocaleLowerCase())));
  }, [search]);

  const handleChange = (event: event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="episodes">
      <h1 className="episodes__title">List of Episodes</h1>
      <section className="episodes__filter">
        <p className="episodes__filterByName"><strong>Filter by Name:</strong> </p>
        <input className="episodes__input" value={search} type="text" name="name" size="40" onChange={handleChange} />
      </section>
      <section className="episodes__listCards">
        {
          results.map((episode) => (
            <EpisodeCard
              name={episode.name}
              episode={episode.episode}
              airDate={episode.air_date}
              key={episode.id}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Episodes;
