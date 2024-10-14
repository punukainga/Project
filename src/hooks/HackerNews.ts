import axios from 'axios';
// React Query to fetch data using GraphQL client and query
import { useQuery } from 'react-query';

const fetchStories = async (url: string) => {
  const { data } = await axios.get(url);
  const storyPromises = data
    .slice(0, 25) // Display the Title of first 25 stories
    .map((id: number) =>
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    );
  const stories = await Promise.all(storyPromises);
  return stories.map((story) => story.data);
};

export const useAskStories = () =>
  useQuery('askStories', () =>
    fetchStories(
      'https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty'
    )
  );
export const useBestStories = () =>
  useQuery('bestStories', () =>
    fetchStories(
      'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty'
    )
  );
export const useJobStories = () =>
  useQuery('jobStories', () =>
    fetchStories(
      'https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty'
    )
  );
export const useNewStories = () =>
  useQuery('newStories', () =>
    fetchStories(
      'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty'
    )
  );
export const useShowStories = () =>
  useQuery('showStories', () =>
    fetchStories(
      'https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty'
    )
  );
export const useTopStories = () =>
  useQuery('topStories', () =>
    fetchStories(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    )
  );
