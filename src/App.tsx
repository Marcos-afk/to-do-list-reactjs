import { Counters } from './components/Counters';
import { Header } from './components/Header';
import { InsertionBar } from './components/InsertionBar';
// import { EmptyList } from './components/EmptyList';
import { TaskCard } from './components/TaskCard';

export const App = () => {
  return (
    <div>
      <Header />
      <main>
        <InsertionBar />
        <Counters />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </main>
    </div>
  );
};
