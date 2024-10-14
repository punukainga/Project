/**
 * Main application component.
 * Sets up the application's global state and routing.
 * `react-query` for data fetching and caching.
 * Contains routes for different story categories and leaderboards/LeaderDetail.
 */
import LeaderBoard from './components/LeaderBoard';
import LeaderDetail from './components/LeaderDetail';
import Navbar from './components/Navbar';
import YourComponent from './components/StoryList';
import { QueryClient, QueryClientProvider } from 'react-query';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
          <Navbar />
          <main className="flex-grow p-4">
            <Routes>
              {/* Redirect from root path to /ask-stories to make "Ask Stories" the default option */}
              <Route path="/" element={<Navigate to="/ask-stories" />} />
              <Route path="/ask-stories" element={<YourComponent />} />
              <Route path="/best-stories" element={<YourComponent />} />
              <Route path="/job-stories" element={<YourComponent />} />
              <Route path="/new-stories" element={<YourComponent />} />
              <Route path="/top-stories" element={<YourComponent />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />{' '}
              <Route path="/leader/:id" element={<LeaderDetail />} />{' '}
            </Routes>
          </main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
