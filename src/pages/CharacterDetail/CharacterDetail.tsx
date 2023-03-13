import './styles.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { getCharacterById } from '../../features/character';
import CharacterCardDetail from '../../components/CharacterCardDetail/CharacterCardDetail';

interface RootState {
  character: {
    character: {
      id: number;
      name: string;
      image: string;
      status: string;
      species: string;
      gender: string;
      origin: {
        name: string;
      }
      location: {
        name: string;
      }
    }
  }
}

const CharacterDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { character } = useSelector((state: RootState) => state.character);

  useEffect(() => {
    dispatch(getCharacterById(id));
  }, [id]);

  return (
    <div className="characterDetail">
      <h1 className="characterDetail__title">Character Detail</h1>
      <section className="characterDetail__description">
        {
          character ? (
            <CharacterCardDetail
              name={character.name}
              image={character.image}
              status={character.status}
              species={character.species}
              gender={character.gender}
              originLocation={character.origin.name}
              lastKnownLocation={character.location.name}
              key={character.id}
            />
          ) : null
        }
      </section>
    </div>
  );
};

export default CharacterDetail;
