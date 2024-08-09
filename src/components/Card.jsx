import React from 'react';

const Card = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.map((cardData, index) => (
    <div key={index} className="card card-bordered shadow-lg">
      <figure className="image-full">
        <img src={cardData.image} alt={cardData.title} className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardData.title}</h2>
        <p>{cardData.description}</p>
        <div className="flex justify-between items-center mt-4">
          <a href={cardData.link} className="btn btn-primary btn-sm">详情</a>
        </div>
      </div>
    </div>
  ))}
  </div>
  );
};

export default Card;
