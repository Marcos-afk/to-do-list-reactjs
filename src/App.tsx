import { Counters } from './components/Counters';
import { Header } from './components/Header';
import { InsertionBar } from './components/InsertionBar';
import { EmptyList } from './components/EmptyList';

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <InsertionBar />
        <Counters />
        <EmptyList />
      </main>
    </div>
  );
};
