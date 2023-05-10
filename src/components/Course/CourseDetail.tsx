import React, { useState } from 'react';
import './index.css';
import { IComment, IVideo } from './interface';

const CourseDetail = ({ video }: { video: IVideo }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Implementar la lógica de envío de comentarios aquí
    setNewComment('');
  };

  return (
    <div className="course-detail-container">
      <div className="video-container">
        <video src={video.url} controls />
        <h3>{video.title}</h3>
        <p>{video.description}</p>

        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Escribe un comentario"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div className="comments-container">
        <h4>Comentarios</h4>
        <div className="comments-section">
          {video.comments.map((comment: IComment) => (
            <div key={comment.id} className="comment">
              <strong>{comment.author}</strong>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
