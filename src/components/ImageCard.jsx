import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Skeleton } from "@nextui-org/skeleton";
import {Image} from "@nextui-org/image";
import {Snippet} from "@nextui-org/snippet";

const ImageGallery = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.dragonjay.top/gallery.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {loading ? (
        Array.from({ length: 6 }).map((_, index) => (
          <Card key={index} fullWidth shadow="md" radius="lg">
            <CardHeader>
              <Skeleton classNames={{ base: "h-48 w-full" }} />
            </CardHeader>
            <CardBody>
              <Skeleton classNames={{ base: "h-20 w-full" }} />
            </CardBody>
          </Card>
        ))
      ) : (
        data.map((item, index) => (
          <Card key={index} fullWidth shadow="md" radius="lg">
            <CardHeader>
              <Image src={item.image} alt={`Gallery Image ${index + 1}`} className="h-48 w-full object-cover rounded-t-lg" />
            </CardHeader>
            <CardBody>
              <Tabs variant="solid" fullWidth size="md">
                <Tab title="照片分析与改进建议">
                  <div>
                    <p>构图: {item.analysis.composition}</p>
                    <p>色彩: {item.analysis.color}</p>
                    <p>光影: {item.analysis.lightShadow}</p>
                    <p>元素: {item.analysis.elements}</p>
                    <p>景深: {item.analysis.depthOfField}</p>
                  </div>
                </Tab>
                <Tab title="Midjourney提示词">
                  <div className="whitespace-pre-wrap break-words">
                    <Snippet size="sm" radius="md" hideSymbol={true}>
                      {item.prompts.text}
                    </Snippet>
                    <div className="mt-4">
                    {item.prompts.explanation && Array.isArray(item.prompts.explanation) ? (
  item.prompts.explanation.map((line, idx) => (
    <p key={idx}>{line}</p>
  ))
) : (
  <p>解释内容不可用</p>
)}
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </CardBody>
          </Card>
        ))
      )}
    </div>
  );
};

export default ImageGallery;
