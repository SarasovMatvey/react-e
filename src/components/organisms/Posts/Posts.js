import React, { useEffect, useState } from 'react';
import Post from '../../molecules/Post/Post';
import Container from '../../atoms/Container/Container';
import './Posts.sass';

import laptop from './img/laptop.png';
import laptopRetina from './img/laptop-retina.png';
import ava1 from './img/ava1.jpg';

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
            previewImgRetina={laptopRetina}
          />
        ))}
      </Container>
    </main>
  );
}
