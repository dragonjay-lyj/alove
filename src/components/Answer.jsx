import React from 'react';
import {Input} from "@nextui-org/input";
import {Select, SelectItem} from "@nextui-org/select";
import {Textarea} from "@nextui-org/input";
import {Card} from "@nextui-org/card";
const ReadOnlyForm = ({ data }) => {
  return (
    <div className="my-20">
      {data.map((formData, index) => (
        <Card key={index} className="grid my-20 lg:grid-cols-2 lg:gap-2 xl:grid-cols-2 xl:gap-2 2xl:grid-cols-2 2xl:gap-2">
          {/* 第1行：时间 */}
          <div className='flex gap-[2px] max-w-[400px]'>
            <Input type="date" classNames="input" bordered label="时间" value={formData.time} isReadOnly className="mt-1 w-full" />
          </div>

          {/* 第2行：名称 */}
          <div className='flex gap-[2px] max-w-[400px]'>
            <Input type="text" classNames="input" bordered label="用户名" value={formData.name} isReadOnly className="mt-1 w-full" />
          </div>

          {/* 第3行：标题 */}
          <div className='flex gap-[2px] max-w-[400px]'>
            <Input type="number" classNames="input" bordered label="年龄" value={formData.age} isReadOnly className="mt-1 w-full" />
          </div>

          <div className='flex gap-[2px] max-w-[500px]'>
            <Select bordered label="性别" classNames="select" placeholder={formData.gender} isDisabled disallowEmptySelection className="mt-1 w-full">
              <SelectItem value="男性">男性</SelectItem>
              <SelectItem value="女性">女性</SelectItem>
              <SelectItem value="跨性别">跨性别</SelectItem>
              <SelectItem value="保密">保密</SelectItem>
            </Select>
          </div>

          <div className='flex gap-[2px] max-w-[500px]'>
            <Select bordered label="职业" classNames="select" placeholder={formData.profession} isDisabled disallowEmptySelection className="mt-1 w-full" >
            <SelectItem value="公司职员">公司职员</SelectItem>
              <SelectItem value="公务员">公务员</SelectItem>
              <SelectItem value="教职员">教职员</SelectItem>
              <SelectItem value="自营业">自营业</SelectItem>
              <SelectItem value="小学生">小学生</SelectItem>
              <SelectItem value="中学生">中学生</SelectItem>
              <SelectItem value="高中生">高中生</SelectItem>
              <SelectItem value="大学生">大学生</SelectItem>
              <SelectItem value="兼职工作">兼职工作</SelectItem>
              <SelectItem value="无职业">无职业</SelectItem>
              <SelectItem value="僧人">僧人</SelectItem>
              </Select>
          </div>

          <div className='flex gap-[2px] max-w-[400px]'>
            <Input type="text" classNames="input" bordered label="居住地" value={formData.location} isReadOnly className="mt-1 w-full" />
          </div>

          {/* 其他问题类型 */}
          <div className='flex gap-[2px] max-w-[400px]'>
            <Input type="text" classNames="input" bordered label="您是什么时候第一次穿褌/足袋的？" value={formData.firstTime} isReadOnly className="mt-1 w-full" />
          </div>

          <div className='flex gap-[2px] max-w-[400px]'>
            <Input type="text" classNames="input" bordered label="是因为参加了什么活动吗？ 如果是的话，可以告诉我们是什么活动吗？" value={formData.event} isReadOnly className="mt-1 w-full" />
          </div>

          <div className='flex gap-[2px] max-w-[500px]'>
            <Select bordered label="您第一次穿的褌是什么类型的？" classNames="select" placeholder={formData.fundoshi} isDisabled disallowEmptySelection className="mt-1 w-full">
              <SelectItem value="六尺褌（前袋式）">六尺褌（前袋式）</SelectItem>
              <SelectItem value="越中褌">越中褌</SelectItem>
              <SelectItem value="黑猫褌">黑猫褌</SelectItem>
              <SelectItem value="祭典褌">祭典褌</SelectItem>
            </Select>
          </div>

          <div className='flex gap-[2px] max-w-[500px]'>
            <Select bordered label="您第一次穿的足袋是什么类型的？" classNames="select" placeholder={formData.tabi} isDisabled disallowEmptySelection className="mt-1 w-full">
              <SelectItem value="地下足袋">地下足袋</SelectItem>
              <SelectItem value="纯棉足袋">纯棉足袋</SelectItem>
              <SelectItem value="薄足袋">薄足袋</SelectItem>
              <SelectItem value="足袋袜子">足袋袜子</SelectItem>
            </Select>
          </div>

          <div className='flex gap-[2px] max-w-[500px]'>
            <Select bordered label="您第一次穿褌/足袋的时候感觉怎么样？" classNames="select" placeholder={formData.feeling} isDisabled disallowEmptySelection className="mt-1 w-full">
              <SelectItem value="感觉很帅气">感觉很帅气</SelectItem>
              <SelectItem value="感觉很丑">感觉很丑</SelectItem>
              <SelectItem value="感觉很舒服">感觉很舒服</SelectItem>
              <SelectItem value="感觉很难受">感觉很难受</SelectItem>
              <SelectItem value="很容易穿">很容易穿</SelectItem>
              <SelectItem value="很不容易穿">很不容易穿</SelectItem>
              <SelectItem value="不觉得害羞">不觉得害羞</SelectItem>
              <SelectItem value="觉得害羞">觉得害羞</SelectItem>
            </Select>
          </div>

          <div className='flex gap-[2px] max-w-[400px]'>
            <Textarea bordered label="可以跟我们分享一下您第一次穿褌/足袋的经历吗？" classNames="textarea" value={formData.experience} isReadOnly className="mt-1 w-full" />
          </div>

          <div className='flex gap-[2px] max-w-[500px]'>
            <Select bordered label="请问您是如何学会褌的系法/足袋的穿法的？" classNames="select" placeholder={formData.howto} isDisabled disallowEmptySelection className="mt-1 w-full">
              <SelectItem value="通过朋友">通过朋友</SelectItem>
              <SelectItem value="自己系">自己系</SelectItem>
              <SelectItem value="看教程">看教程</SelectItem>
            </Select>
          </div>

          <div className='flex gap-[2px] max-w-[400px]'>
            <Input type="text" classNames="input" bordered label="您是什么时候开始对褌/足袋产生兴趣的？" value={formData.interestStart} isReadOnly className="mt-1 w-full" />
          </div>

          <div className='flex gap-[2px] max-w-[400px]'>
            <Textarea bordered label="是什么原因让您对褌/足袋产生了兴趣呢？" classNames="textarea" value={formData.what} isReadOnly className="mt-1 w-full" />
          </div>

          <div className='flex gap-[2px] max-w-[500px]'>
            <Select bordered label="您现在还会穿褌/足袋吗？" classNames="select" placeholder={formData.stillWearing} isDisabled disallowEmptySelection className="mt-1 w-full">
              <SelectItem value="经常穿">经常穿</SelectItem>
              <SelectItem value="偶尔穿">偶尔穿</SelectItem>
              <SelectItem value="不怎么穿">不怎么穿</SelectItem>
              <SelectItem value="完全不穿">完全不穿</SelectItem>
            </Select>
          </div>

          <div className='flex gap-[2px] max-w-[400px]'>
            <Textarea bordered label="您通常会在什么情况下穿褌/足袋？" classNames="textarea" value={formData.wearingSituation} isReadOnly className="mt-1 w-full" />
          </div>

          <div className='flex gap-[2px] max-w-[500px]'>
            <Select bordered label="您的家人或伴侣知道您穿褌/足袋吗？" classNames="select" placeholder={formData.familyAware} isDisabled disallowEmptySelection className="mt-1 w-full">
              <SelectItem value="知道">知道</SelectItem>
              <SelectItem value="不知道">不知道</SelectItem>
              <SelectItem value="不清楚">不清楚</SelectItem>
            </Select>
          </div>

          <div className='flex gap-[2px] max-w-[500px]'>
            <Select bordered label="请问穿过六尺ふんどし（前袋型）、祭典褌、相扑褌的朋友：您通常如何放置阴茎？" classNames="select" placeholder={formData.placement} isDisabled disallowEmptySelection className="mt-1 w-full">
              <SelectItem value="向上">向上</SelectItem>
              <SelectItem value="向下">向下</SelectItem>
              <SelectItem value="横向">横向</SelectItem>
              <SelectItem value="我是女生">我是女生</SelectItem>
            </Select>
          </div>

          <div className='flex gap-[2px] max-w-[400px]'>
            <Textarea bordered label="请给那些还没有尝试过褌/足袋的朋友们留言吧！" classNames="textarea" value={formData.message} isReadOnly className="mt-1 w-full" />
          </div>

        </Card>
      ))}
    </div>
  );
};

export default ReadOnlyForm;
