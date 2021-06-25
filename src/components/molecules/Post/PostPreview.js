import React from 'react';

export default function PostPreview({ img, imgRetina, altText, background }) {
  return (
    <div
      className='post__preview'
      style={{ background: background || '#BCD1FF' }}
    >
      <picture>
        <source sizes='2x' srcSet={imgRetina} />
        <img
          className='post__preview-img'
          src={img}
          alt={altText || 'post peview'}
        />
      </picture>
    </div>
  );
}
