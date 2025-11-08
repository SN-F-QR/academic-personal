import { Router, Route } from '@solidjs/router';
import Academic from './pages/Academic';

function App() {
  return (
    <div class="scrollbar h-dvh w-full overflow-auto bg-purple-light px-4">
      <Router>
        <Route path="/" component={Academic} />
      </Router>
    </div>
  );
}

export default App;
