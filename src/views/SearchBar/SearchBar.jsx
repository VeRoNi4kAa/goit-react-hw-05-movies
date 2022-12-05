import { fetchMovie } from 'api/api';
import { useState, useEffect } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { List, SearchForm, Button, Input, Item } from './SearchBarStyled';
import 'react-toastify/dist/ReactToastify.css';

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [stateMashine, setStateMashine] = useState('idle');
  const currentQuery = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (currentQuery) {
      fetchMovie(currentQuery)
        .then(setMovies)
        .finally(() => setStateMashine('loaded'));
    }
  }, [currentQuery]);

  const handleChange = e => {
    setValue(e.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: value });
    if (value.trim() === '') {
      toast.warn('Please enter movie title');
      return;
    }
  };
  return (
    <>
      <ToastContainer />
      <SearchForm>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            value={value}
            onChange={handleChange}
          />
          <Button type="submit">Search</Button>
        </form>
      </SearchForm>
      {movies.length === 0 && stateMashine === 'loaded' ? (
        <p>Not found</p>
      ) : (
        <div>
          <List>
            {movies.map(movie => (
              <Item key={movie.id}>
                <NavLink
                  to={`${movie.id}`}
                  state={{ from: location }}
                  className="notActive"
                >
                  {movie.title}
                </NavLink>
              </Item>
            ))}
          </List>
        </div>
      )}
    </>
  );
}
