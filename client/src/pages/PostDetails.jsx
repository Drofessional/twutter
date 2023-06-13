import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostDetails() {
  const [postData, setPostData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8090/api/post/${id}`)
      .then(response => response.json())
      .then(data => {
        setPostData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h2>Post</h2>
      <p>{postData.author && postData.author.handle}</p>
      <p>{postData.text}</p>
      <p>{postData.date}</p>
    </div>
  );
}