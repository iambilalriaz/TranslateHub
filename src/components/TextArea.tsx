import React from 'react';

const TextArea = ({ placeholder }: { placeholder: string }) => {
  return (
    <textarea
      className='w-full textarea textarea-bordered'
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
