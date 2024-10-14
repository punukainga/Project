/**
 * This component uses various props to display story information such as the title,
 * author, kids (comments), score, time, and type (page name) with a formatted layout.
 * The background color of the component changes based on the index of the story.
 */

import React from 'react';

// Display the following information when navigate to story page
interface Story {
  id: number;
  title: string;
  by: string;
  kids?: number[];
  score: number;
  time: number;
  type: string;
  url: string;
}

// Define an array of background colors
const backgroundColors = [
  'bg-red-100',
  'bg-green-100',
  'bg-blue-100',
  'bg-yellow-100',
  'bg-purple-100',
];

// Update the StoryCard component to accept pageName and index as props
const StoryCard: React.FC<{
  story: Story;
  pageName: string;
  index: number;
}> = ({ story, pageName, index }) => {
  // Format the time from Unix timestamp to a readable format
  const formattedTime = new Date(story.time * 1000).toLocaleString();

  // Get the background color based on the index
  const backgroundColor = backgroundColors[index % backgroundColors.length];

  return (
    <div className={`shadow-md rounded-lg p-4 m-2 ${backgroundColor}`}>
      <h2 className="text-xl font-bold">
        <a
          href={story.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: 'black', fontWeight: 'bold' }}
        >
          {story.title}
        </a>
      </h2>

      <p className="text-gray-600">
        <span style={{ fontWeight: 'bold' }}>By:</span> {story.by}
      </p>

      <p className="text-gray-600">
        <span style={{ fontWeight: 'bold' }}>Kids:</span>{' '}
        {story.kids && story.kids.length > 0 ? (
          <div>
            {/* Display the first 5 ids as URL in this format `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty` */}
            {story.kids.slice(0, 5).map((id) => (
              <a
                key={id}
                href={`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline block break-words"
                style={{ whiteSpace: 'normal' }}
              >
                {`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`}
              </a>
            ))}
          </div>
        ) : (
          // Display 'N/A' if there are no kids
          'N/A'
        )}
      </p>

      <p className="text-gray-600">
        <span style={{ fontWeight: 'bold' }}>Score:</span> {story.score}
      </p>

      <p className="text-gray-600">
        <span style={{ fontWeight: 'bold' }}>Time:</span> {formattedTime}
      </p>

      <p className="text-gray-600">
        <span style={{ fontWeight: 'bold' }}>Type:</span> {pageName}
      </p>
    </div>
  );
};

export default StoryCard;
