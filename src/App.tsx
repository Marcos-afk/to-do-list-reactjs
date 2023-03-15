import { Counters } from './components/Counters';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SearchBar />
        <Counters />
      </main>
    </div>
  );
};
