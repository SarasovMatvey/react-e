import React from 'react';
import './Post.sass';
import PostContent from './PostContent';
import PostPreview from './PostPreview';

// TODO: make dinamic time text
export default function Post({
  text,
  previewImg,
  previewImgAltText,
  avatar,
  authorName,
  authorNameLink,
  title,
  category,
  timeAgo,
  postPreviewBackground,
  readMoreLink,
  previewImgRetina,
}) {
  return (
    <article className='post'>
      <PostPreview
        img={previewImg}
        imgRetina={previewImgRetina}
        altText={previewImgAltText}
        background={postPreviewBackground}
      />
      <PostContent
        category={category}
        text={text}
        title={title}
        userName={authorName}
        userNameLink={authorNameLink}
        timeAgo={timeAgo}
        avatar={avatar}
        readMoreLink={readMoreLink}
      />
    </article>
  );
}
