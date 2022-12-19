import Counter from './Counter';
import { useState } from 'react';

export default function State() {   

  return (
    <>
        <Counter startingCount={10} />
        <Counter startingCount={100} />
    </>
  );
}
