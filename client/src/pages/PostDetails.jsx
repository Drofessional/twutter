import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostsByID } from '../api/posts';

export default function PostDetails() {
  const [postData, setPostData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getPostsByID(id);
        setPostData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [id]);
  

  return (
    
    <div>
      {console.log(postData)}
      <h2>Post</h2>
      <p>{postData.author && postData.author.handle}</p>
      <p>{postData.text}</p>
      <p>{postData.date}</p>
    </div>
  );
}