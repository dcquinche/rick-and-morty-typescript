import './styles.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faRightFromBracket, faStar } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  const handleClickCharacters = () => {
    navigate('/characters');
  };

  const handleClickEpisodes = () => {
    navigate('/episodes');
  };

  const handleClickLocations = () => {
    navigate('/locations');
  };

  const handleClickFavorites = () => {
    navigate('/favorites');
  };

  return (
    <nav className="navbar">
      <section className="navbar__lists">
        { isAuthenticated ? (
          <div className="navbar__profile">
            <img className="navbar__logButton" alt="profile" src={user?.picture as string} />
            <FontAwesomeIcon className="navbar__logButton" icon={faStar} title="Favorites" onClick={handleClickFavorites} />
            <FontAwesomeIcon className="navbar__logButton" icon={faRightFromBracket} title="Log Out" onClick={()=>logout}/>
          </div>
        ) : (
          <FontAwesomeIcon className="navbar__logButton" icon={faRightToBracket} title="Log In" onClick={()=>loginWithRedirect} />
        )}
      </section>
      <section className="navbar__pages">
        <p className="navbar__lists" onClick={handleClickCharacters}>Characters</p>
        <p className="navbar__lists" onClick={handleClickEpisodes}>Episodes</p>
        <p className="navbar__lists" onClick={handleClickLocations}>Locations</p>
      </section>
    </nav>

  );
};

export default NavBar;
