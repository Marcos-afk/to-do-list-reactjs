import { Counters } from './components/Counters';
import { Header } from './components/Header';
import { InsertionBar } from './components/InsertionBar';
import { EmptyList } from './components/EmptyList';
import { TaskCard } from './components/TaskCard';
import { useTaskContext } from './hooks/useTaskContext';

export const App = () => {
  const { tasks } = useTaskContext();
  return (
    <div>
      <Header />
      <main>
        <InsertionBar />
        <Counters />
        {tasks.length === 0 ? <EmptyList /> : tasks.map((task) => <TaskCard key={task.id} task={task} />)}
      </main>
    </div>
  );
};
