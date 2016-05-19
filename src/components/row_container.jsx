import React from 'react';
import Row from './row';
import timeSince from '../utils/time_since';

function fullName(first, last) {
  return `${first} ${last}`;
}

export default function RowContainer() {
  const art = this.props.article;
  if (art.length === 0) return <div></div>;
  return (
    <Row
      img={art.image}
      url={art.url}
      title={art.title}
      stamp={''}
      fullName={fullName(art.profile.first_name, art.profile.last_name)}
      wordCount={art.words}
      timeAgo={timeSince(art.publish_at)}
    />
  );
}

RowContainer.PropTypes = { article: React.PropTypes.object };
RowContainer.defaultProps = { article: {} };
