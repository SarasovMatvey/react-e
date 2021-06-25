import React from 'react';

export default function PostPreview({ img, altText, background }) {
  return (
    <div
      className='post__preview'
      style={{ background: background || '#BCD1FF' }}
    >
      <img
        className='post__preview-img'
        src={img}
        alt={altText || 'post peview'}
      />
    </div>
  );
}
