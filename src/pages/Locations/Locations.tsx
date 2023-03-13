import './styles.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { getAllLoctations } from '../../features/locations';
import LocationCard from '../../components/LocationCard/LocationCard';

interface RootState {
  locations: {
    locations: LocationsState[];
  }
}

interface LocationsState {
  name: string;
  type: string;
  dimension: string;
  id: number;
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
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

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
        <input className="locations__input" value={search} type="text" name="name" onChange={handleChange} />
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
