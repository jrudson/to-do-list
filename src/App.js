import './App.css';
import ShowTasksById from './ShowTasks/showTasksById';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <ShowTasksById />
      </QueryClientProvider>
    </div>
  );
}

export default App;
