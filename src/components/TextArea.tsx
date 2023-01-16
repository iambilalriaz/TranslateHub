import React from 'react';

const TextArea = ({ placeholder }: { placeholder: string }) => {
  return (
    <textarea
      className='w-full textarea textarea-bordered resize-none h-[10rem] sm:h-[15rem]'
      placeholder={placeholder}
    />
  );
};

export default TextArea;
