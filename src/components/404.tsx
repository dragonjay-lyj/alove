// src/pages/404.tsx
import React from 'react';
import { Button } from '@nextui-org/react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-content flex flex-col items-center justify-center min-h-screen bg-gray-100">
      < h1 className="-4xl font-bold -red-500">
        404
        </h1>
      <h2 className="-xl font-semibold mt-2">
        页面未找到
        </h2>
      <p className="-lg mt-4">
        抱歉，我们无法找到您要访问的页面。
        </p>
      <Button
        auto
        className="mt-6"
        onClick={() => (window.location.href = '/')}
      >
        返回首页
      </Button>
    </div>
  );
};

export default NotFoundPage;
