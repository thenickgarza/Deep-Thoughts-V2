import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERYTHOUGHTS } from '../utils/queries';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERYTHOUGHTS);
  const thoughts = data?.thoughts || [];
  console.log(thoughts)

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>{/* PRINT THOUGHT LIST */}</div>
      </div>
    </main>
  );
};

export default Home;
