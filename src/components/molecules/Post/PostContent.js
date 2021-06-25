import React from 'react';
import Link from '../../atoms/Link/Link';
import Title from '../../atoms/Title/Title';
import UserLink from '../../atoms/UserLink/UserLink';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Text from '../../atoms/Text/Text';

export default function PostContent({
  category,
  title,
  text,
  userName,
  userNameLink,
  timeAgo,
  avatar,
  readMoreLink,
}) {
  return (
    <div className='post__content'>
      <header className='post__content-header'>
        <h2 className='post__category'>{category}</h2>
        <time className='post__time-ago'>{timeAgo}</time>
      </header>
      <Title className='post__title'>{title}</Title>
      <Text className='post__text'>{text}</Text>
      <footer className='post__content-footer'>
        <UserLink userName={userName} link={userNameLink} avatar={avatar} />
        <Link to={readMoreLink}>
          Read more <HiOutlineArrowRight style={{ marginLeft: '0.3125rem' }} />
        </Link>
      </footer>
    </div>
  );
}
