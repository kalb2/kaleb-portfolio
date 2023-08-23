import React from 'react';

export default function SectionBreak() {
  return (
    <div className='w-full grid grid-cols-3 border-b h-[calc(9vw + 3vh)]'>
      <div className='border-r' />
      <div className='border-r' />
      <div />
    </div>
  );
}
