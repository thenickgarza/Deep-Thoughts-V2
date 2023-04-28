import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERYTHOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERYTHOUGHTS);
  const thoughts = data?.thoughts || [];
  console.log(thoughts)

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList thoughts={thoughts} title="Read Our Thoughts" />
          )}
          </div>
      </div>
    </main>
  );
};

export default Home;
