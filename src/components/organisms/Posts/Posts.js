import React from 'react';
import Post from '../../molecules/Post/Post';
import './Posts.sass';

import laptop from './img/laptop.png';
import ava1 from './img/ava1.jpg';

const posts = [
  {
    authorName: 'Glen Williams', 
    authorNameLink: 'google.com', 
    avatar=ava1, category: 'PRODUCTIVITY', 
    previewImg: laptop, previewImgAltText: 'laptop', 
    text: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven skills of effective programmers...', 
    timeAgo: '3 days ago', 
    title: '7 Skills of Highly Effective Programmers', 
    postPreviewBackground: 'linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100% )', 
    readMoreLink: 'google.com'
  }
];

export default function Posts() {
  return (
    <main className='posts'>
      {posts.map(post => (
        <Post
          authorName='John'
          authorNameLink='google.com'
          avatar={ava1}
          category='films'
          previewImg={laptop}
          previewImgAltText='laptop'
          text='Lorem ipsum dolor sit amet amet ipsum dolor sit amet amet ipsum dolor sit amet amet ipsum dolor sit amet amet ipsum dolor sit amet amet ipsum dolor sit amet amet ipsum dolor sit amet amet ipsum dolor sit amet amet'
          timeAgo='10 days'
          title='Hello how are you'
          postPreviewBackground='linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100% )'
          readMoreLink='google.com'
        />
      ))}
    </main>
  );
}
