import './styles.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCharacters } from '../../features/characters';
import { getAllEpisodes } from '../../features/episodes';
import { getAllLoctations } from '../../features/locations';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  useEffect(() => {
    dispatch(getAllEpisodes());
  }, []);

  useEffect(() => {
    dispatch(getAllLoctations());
  }, []);

  return (
    <div className="home">
      <h2 className="home__title">Rick And Morty API</h2>
      <p className="home__description">
        You can navigate through the web application and know some
        details about the characters, episodes and locations.
      </p>
    </div>
  );
};

export default Home;
