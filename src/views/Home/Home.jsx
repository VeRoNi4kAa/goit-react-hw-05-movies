import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { fetchTrendTitles } from 'api/api';
import { List, Item } from './HomeStyled';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrendTitles().then(responce => {
      setMovies(responce);
    });
  }, []);

  return (
    <>
      <h2>Tranding today</h2>
      <List>
        {movies.map(title => {
          return (
            <Item key={title.id}>
              <NavLink
                to={`movies/${title.id}`}
                state={{ from: location }}
                className="notActive"
              >
                {title.title}
              </NavLink>
            </Item>
          );
        })}
      </List>
    </>
  );
}
