/**
 * LeaderBoard components displays the top 15 leaders in a grid format
 * Each Leader has a rank,username , and points 
 * if a leaderpoints is not available it will shows N/A 
 * each leaders name link to their detailed page and to component uses Tailwind CSS for styling
 
 */

import React from 'react';
import { Link } from 'react-router-dom';

// Define the Leader interface
interface Leader {
  rank: number;
  username: string;
  points: number | null;
}

// Display the Top 15 leaders
const leaders: Leader[] = [
  { rank: 1, username: 'tptacek', points: null },
  { rank: 2, username: 'ingve', points: null },
  { rank: 3, username: 'danso', points: null },
  { rank: 4, username: 'pseudolus', points: null },
  { rank: 5, username: 'rbanffy', points: null },
  { rank: 6, username: 'todsacerdoti', points: null },
  { rank: 7, username: 'tosh', points: null },
  { rank: 8, username: 'Tomte', points: null },
  { rank: 9, username: 'JumpCrisscross', points: null },
  { rank: 10, username: 'Animats', points: null },
  { rank: 11, username: 'lxm', points: 138876 },
  { rank: 12, username: 'patio11', points: 127522 },
  { rank: 13, username: 'ColinWright', points: 127465 },
  { rank: 14, username: 'rayiner', points: 121489 },
  { rank: 15, username: 'dragonwriter', points: 118265 },
];

const LeaderBoard: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Top 15 Leaders</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {leaders.map((leader) => (
          <div
            key={leader.rank}
            className="shadow-md rounded-lg p-4 m-2 bg-gray-100"
          >
            <h2 className="text-xl font-bold">
              #{leader.rank}{' '}
              <Link
                to={`/leader/${leader.username}`}
                className="text-blue-500 hover:underline"
              >
                {leader.username}
              </Link>
            </h2>
            <p className="text-gray-600">
              Points: {leader.points !== null ? leader.points : 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard;
