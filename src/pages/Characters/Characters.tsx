import './styles.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { getAllCharacters } from '../../features/characters';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

interface RootState {
  characters: {
    characters: CharactersState[];
  }
}

interface CharactersState {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  gender: string;
}

const Characters = () => {
  const { characters } = useSelector((state: RootState) => state.characters);
  const [results, setResults] = useState(characters);
  const [status, setStatus] = useState('Status');
  const [species, setSpecies] = useState('Species');
  const [gender, setGender] = useState('Gender');
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(getAllCharacters());
  }, []);

  useEffect(() => {
    setResults(!status ? characters : characters.filter((character: CharactersState) => character.status === status));
  }, [status]);

  useEffect(() => {
    setResults(!species ? characters : characters.filter((character: CharactersState) => character.species === species));
  }, [species]);

  useEffect(() => {
    setResults(!gender ? characters : characters.filter((character: CharactersState) => character.gender === gender));
  }, [gender]);

  const handleClickStatus = () => {
    const select: HTMLSelectElement | null = document.querySelector('#dropdownStatus');
    const option = select?.value;

    if (option === 'Alive') {
      setStatus('Alive');
    }
    if (option === 'Dead') {
      setStatus('Dead');
    }
    if (option === 'unknown') {
      setStatus('unknown');
    }
  };

  const handleClickSpecies = () => {
    const select: HTMLSelectElement | null = document.querySelector('#dropdownSpecies');
    const option = select?.value;
    if (option === 'Human') {
      setSpecies('Human');
    }
    if (option === 'Alien') {
      setSpecies('Alien');
    }
  };

  const handleClickGender = () => {
    const select: HTMLSelectElement | null = document.querySelector('#dropdownGender');
    const option = select?.value;
    if (option === 'Female') {
      setGender('Female');
    }
    if (option === 'Male') {
      setGender('Male');
    }
    if (option === 'unknown') {
      setGender('unknown');
    }
  };

  const handleClickReset = () => {
    setResults(characters);
  };

  return (
    <div className="characters">
      <h1 className="characters__title">List of Characters</h1>
      <section className="characters__filters">
        <p className="characters__titleFilter"><strong>Filter By: </strong></p>
        <select className="characters__filter" name="dropdownStatus" id="dropdownStatus" onClick={handleClickStatus}>
          <option value="Status" disabled>Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select className="characters__filter" name="dropdownSpecies" id="dropdownSpecies" onClick={handleClickSpecies}>
          <option value="Species" disabled>Species</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
        </select>
        <select className="characters__filter" name="dropdownGender" id="dropdownGender" onClick={handleClickGender}>
          <option value="Gender" disabled>Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="unknown">Unknown</option>
        </select>
        <button className="characters__button" type="submit" onClick={handleClickReset}>Reset Filter</button>
      </section>
      <section className="characters__listCards">
        {
          results.map((character) => (
            <CharacterCard
              name={character.name}
              image={character.image}
              id={character.id}
              key={character.id}
            />
          ))
        }
      </section>
    </div>
  );
};

export default Characters;
