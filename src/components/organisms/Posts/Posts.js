import React from 'react';
import Post from '../../molecules/Post/Post';
import './Posts.sass';

import laptop from './img/laptop.png';
import ava1 from './img/ava1.jpg';
import Container from '../../atoms/Container/Container';

const posts = [
  {
    authorName: 'Glen Williams',
    authorNameLink: 'google.com',
    avatar: ava1,
    category: 'PRODUCTIVITY',
    previewImg: laptop,
    previewImgAltText: 'laptop',
    text: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers...',
    timeAgo: '3 days ago',
    title: '7 Skills of Highly Effective Programmers',
    postPreviewBackground:
      'linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100% )',
    readMoreLink: 'google.com',
  },
  {
    authorName: 'Glen Williams',
    authorNameLink: 'google.com',
    avatar: ava1,
    category: 'PRODUCTIVITY',
    previewImg: laptop,
    previewImgAltText: 'laptop',
    text: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers...',
    timeAgo: '3 days ago',
    title: '7 Skills of Highly Effective Programmers',
    postPreviewBackground:
      'linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100% )',
    readMoreLink: 'google.com',
  },
  {
    authorName: 'Glen Williams',
    authorNameLink: 'google.com',
    avatar: ava1,
    category: 'PRODUCTIVITY',
    previewImg: laptop,
    previewImgAltText: 'laptop',
    text: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers...',
    timeAgo: '3 days ago',
    title: '7 Skills of Highly Effective Programmers',
    postPreviewBackground:
      'linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100% )',
    readMoreLink: 'google.com',
  },
];

export default function Posts() {
  return (
    <main className='posts'>
      <Container>
        {posts.map(post => (
          <Post
            authorName={post.authorName}
            authorNameLink={post.authorNameLink}
            avatar={post.avatar}
            category={post.category}
            previewImg={post.previewImg}
            previewImgAltText={post.previewImgAltText}
            text={post.text}
            timeAgo={post.timeAgo}
            title={post.title}
            postPreviewBackground={post.postPreviewBackground}
            readMoreLink={post.readMoreLink}
          />
        ))}
      </Container>
    </main>
  );
}
