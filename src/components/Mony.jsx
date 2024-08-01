import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

const TableComponent = ({ dataList }) => {
  return (
    <div className="space-y-4 justify-center">
      {dataList.map((data, index) => (
        <TableContainer key={index} className="border border-gray-300 rounded-lg w-full max-w-4xl">
          <Table>
            <TableBody>
              {/* 第一行: 时间 */}
              <TableRow>
                <TableCell className="bg-gray-100 font-semibold text-center">
                  时间
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-white">
                  {data.time}
                </TableCell>
              </TableRow>

              {/* 第二行: 名称 */}
              <TableRow>
                <TableCell className="bg-gray-100 font-semibold text-center">
                  名称
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-white">
                  {data.name}
                </TableCell>
              </TableRow>

              {/* 第三行: 四列数据 */}
              <TableRow>
                <TableCell className="bg-gray-100 font-semibold text-center w-1/4">
                  年龄
                </TableCell>
                <TableCell className="bg-gray-100 font-semibold text-center w-1/4">
                  性别
                </TableCell>
                <TableCell className="bg-gray-100 font-semibold text-center w-1/4">
                  职业
                </TableCell>
                <TableCell className="bg-gray-100 font-semibold text-center w-1/4">
                  居住地
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-white w-1/4">
                  {data.age}
                </TableCell>
                <TableCell className="text-center text-white w-1/4">
                  {data.gender}
                </TableCell>
                <TableCell className="text-center text-white w-1/4">
                  {data.occupation}
                </TableCell>
                <TableCell className="text-center text-white w-1/4">
                  {data.location}
                </TableCell>
              </TableRow>

              {/* 第六行: 标题 */}
              <TableRow>
                <TableCell className="bg-gray-100 font-semibold text-center">
                  标题
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-white">
                  {data.title}
                </TableCell>
              </TableRow>

              {/* 第八行: 文本 */}
              <TableRow>
                <TableCell className="bg-gray-100 font-semibold text-center">
                  文本
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-center text-white">
                {data.text.split('\n').map((line, idx) => (
                    <span key={idx}>
                      {line}
                      <br />
                    </span>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
};

export default TableComponent;
