import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Popover, PopoverTrigger, PopoverContent } from "@nextui-org/popover";
import { Skeleton } from "@nextui-org/skeleton";
import { User } from "@nextui-org/user";

// 判断图片是否需要模糊处理
const blurNSFW = (category) => {
  return category.pron > 0.5 || category.sexy > 0.5 || category.hentai > 0.5 ? "filter: blur(30px);" : "";
};

// 单个图片卡片组件
const ImageCard = ({ imageSrc, altText, nsfwCategory, userName, promptSrc, siteLink, promptText }) => (
  <Card shadow="md" radius="lg" className="p-4">
    <CardHeader>
      <User name={userName} />
    </CardHeader>
    <CardBody>
      <Popover>
        <PopoverTrigger>
          <Image
            src={imageSrc}
            alt={altText}
            className="w-full h-48 object-cover"
            style={{filter: blurNSFW(nsfwCategory) ? 'blur(30px)' : 'none' }}
          />
        </PopoverTrigger>
        <PopoverContent>
        <Image
            src={promptSrc}
            alt={promptText}
            className="w-full h-48 object-cover"
          />
        </PopoverContent>
      </Popover>
    </CardBody>
    <CardFooter>
      <ButtonGroup>
        <Button as={Link} href={siteLink} color="primary">
          Visit Source
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
);

// 多个图片卡片的Grid布局组件
const ImageGrid = ({ cardsData, isLoading }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {cardsData.map((card, index) => (
      <Skeleton key={index} isLoaded={!isLoading}>
        <ImageCard
          imageSrc={card.imageSrc}
          promptSrc={card.promptSrc}
          altText={card.altText}
          nsfwCategory={card.nsfwCategory}
          userName={card.userName}
          promptText={card.promptText}
          siteLink={card.siteLink}
        />
      </Skeleton>
    ))}
  </div>
);

export default ImageGrid;
