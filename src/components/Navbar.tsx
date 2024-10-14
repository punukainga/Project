/**
 * This component uses the `useNavigate` hook from `react-router-dom` for navigation and renders
 * navigation buttons styled with Tailwind CSS. Each button navigates to a different story category
 * when clicked.
 */

// Shadcn UI components are imported from this directory
import Button from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  // useNavigate hook from reac-router dpm to navigate
  const navigate = useNavigate();

  // Define Navigation items with their names and paths
  const navItems = [
    { name: 'Ask Stories', path: '/ask-stories' },
    { name: 'Best Stories', path: '/best-stories' },
    { name: 'Job Stories', path: '/job-stories' },
    { name: 'New Stories', path: '/new-stories' },
    { name: 'Top Stories', path: '/top-stories' },
    { name: 'Leaderboard', path: '/leaderboard' },
  ];

  return (
    // Tailwind CSS for styling the navigation bar
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="link"
              className="text-white"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
