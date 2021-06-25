import React, { useEffect, useState } from 'react';
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
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setposts(json));
  }, []);

  return (
    <main className='posts'>
      <Container>
        {posts.map((post, index) => (
          <Post
            key={index}
            authorName='John'
            authorNameLink='google.com'
            avatar={ava1}
            category='films'
            previewImg={laptop}
            previewImgAltText='laptop'
            text={post.body}
            title={post.title}
            postPreviewBackground='linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100% )'
            readMoreLink='google.com'
          />
        ))}
      </Container>
    </main>
  );
}
