import { Counters } from './components/Counters';
import { Header } from './components/Header';
import { InsertionBar } from './components/InsertionBar';

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <InsertionBar />
        <Counters />
      </main>
    </div>
  );
};
