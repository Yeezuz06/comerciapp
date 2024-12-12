import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await supabase.from('reviews').select('*');
      setReviews(data);
    };
    fetchReviews();
  }, []);

  const addReview = async () => {
    const { error } = await supabase.from('reviews').insert([{ comment }]);
    if (!error) {
      setReviews([...reviews, { comment }]);
      setComment('');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Reseñas</h1>
      <input
        type="text"
        placeholder="Escribe tu reseña"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        style={{ margin: '10px', padding: '10px', width: '300px' }}
      />
      <br />
      <button onClick={addReview} style={{ padding: '10px 20px' }}>
        Agregar Reseña
      </button>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>{review.comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
