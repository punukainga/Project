/**
 * This component fetches and displays the first 25 stories for the selected
 * category from Hacker News using custom hooks.
 
 */

import {
  useAskStories,
  useBestStories,
  useJobStories,
  useNewStories,
  useTopStories,
} from '../hooks/HackerNews';
import StoryCard from './StoryCard';
import React from 'react';
import { useLocation } from 'react-router-dom';

const YourComponent: React.FC = () => {
  const location = useLocation();
  let data, error, isLoading;
  let pageName;

  switch (location.pathname) {
    case '/ask-stories':
      ({ data, error, isLoading } = useAskStories());
      pageName = 'ASK';
      break;
    case '/best-stories':
      ({ data, error, isLoading } = useBestStories());
      pageName = 'BEST';
      break;
    case '/job-stories':
      ({ data, error, isLoading } = useJobStories());
      pageName = 'JOB';
      break;
    case '/new-stories':
      ({ data, error, isLoading } = useNewStories());
      pageName = 'NEW';
      break;
    case '/top-stories':
      ({ data, error, isLoading } = useTopStories());
      pageName = 'TOP';
      break;
    default:
      ({ data, error, isLoading } = useTopStories());
      pageName = 'TOP';
  }

  if (isLoading) return <div>Loading Please Wait...</div>;
  if (error) return <div>Error loading stories</div>;
  // Display the title of the first 25 stories when option is selected
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {data?.slice(0, 25).map((story: any, index: number) => (
          <StoryCard
            key={story.id}
            story={story}
            pageName={pageName}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default YourComponent;
