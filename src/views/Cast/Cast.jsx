import { fetchCast } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { List, Img, Item } from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const basePageUrl = 'https://image.tmdb.org/t/p/w200';
  const noPhoto = 'https://wvw.db1223.com/images/19015766/icon/12985564.jpg';

  useEffect(() => {
    fetchCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <div>
          <List>
            {cast.cast.map(actor => (
              <Item key={actor.id}>
                {actor.profile_path ? (
                  <Img src={basePageUrl + actor.profile_path} alt="actor" />
                ) : (
                  <Img src={noPhoto} alt="actor" />
                )}
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </Item>
            ))}
          </List>
        </div>
      )}
    </>
  );
}
