import React from 'react';
import {Card} from "@nextui-org/card";
import {Image} from "@nextui-org/image";
import {Button} from "@nextui-org/button";
import {Link} from "@nextui-org/link";
const Cardprop = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.map((cardData, index) => (
    <Card key={index} className="shadow-lg">
      <figure className="image-full">
        <Image src={cardData.image} alt={cardData.title} loading='lazy' className="w-full h-48 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{cardData.title}</h2>
        <p>{cardData.description}</p>
        <div className="flex justify-between items-center mt-4">
          <Button href={cardData.link} as={Link} target="_blank" isExternal color='foreground' bordered className="">详情</Button>
        </div>
      </div>
    </Card>
  ))}
  </div>
  );
};

export default Cardprop;
