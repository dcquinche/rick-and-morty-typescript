import './styles.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllLoctations } from '../../features/locations';
import LocationCard from '../../components/LocationCard/LocationCard';

interface RootState {
  locations: {
    locations: [{
      name: string;
      type: string;
      dimension: string;
      id: number;
    }]
  }
}

interface event {
  target: {
    value: string;
  }
}

const Locations = () => {
  const { locations } = useSelector((state: RootState) => state.locations);
  const [results, setResults] = useState(locations);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLoctations());
  }, []);

  useEffect(() => {
    setResults(!search ? locations : locations.filter((location) => location.name.toLowerCase().includes(search.toLocaleLowerCase())));
  }, [search]);

  const handleChange = (event: event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="locations">
      <h1 className="locations__title">List of Locations</h1>
      <section className="locations__filter">
        <p className="locations__filterByName"><strong>Filter by Name:</strong> </p>
        <input className="locations__input" value={search} type="text" name="name" size="40" onChange={handleChange} />
      </section>
      <section className="locations__listCards">
        {
          results.map((location) => (
            <LocationCard
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              key={location.id}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Locations;
