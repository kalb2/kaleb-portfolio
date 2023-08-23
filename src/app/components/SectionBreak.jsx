import React from 'react';

export default function SectionBreak() {
  const sectionStyle = {
    minHeight: 'calc(9vw + 3vh)',
    lineHeight: '1',
  };

  return (
    <div className='w-full grid grid-cols-3 border-b'>
      <div className='border-r' style={sectionStyle} />
      <div className='border-r' style={sectionStyle} />
      <div style={sectionStyle} />
    </div>
  );
}


// import React from 'react';

// export default function SectionBreak() {
//   return (
//     <div className='w-full grid grid-cols-3 border-b h-[calc(9vw + 3vh)]'>
//       <div className='border-r' />
//       <div className='border-r' />
//       <div />
//     </div>
//   );
// }
