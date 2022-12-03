import { Routes, Route } from 'react-router-dom';
import { Main } from 'components/AppStyled';
import Header from './Header';
import { createAsyncView } from 'components/helpers/createAsyncView';

const Home = createAsyncView('Home');
const Movies = createAsyncView('Movies');
const MovieDetailsPage = createAsyncView('MovieDetailsPage');
const SearchBar = createAsyncView('SearchBar');
const Cast = createAsyncView('Cast');
const Reviews = createAsyncView('Reviews');

export const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />}>
            <Route index element={<SearchBar />} />
            <Route path=":movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<b>Not Found</b>} />
        </Routes>
      </Main>
    </div>
  );
};
