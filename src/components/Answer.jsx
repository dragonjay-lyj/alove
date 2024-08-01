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

              {/* 第四行: 四列数据 */}
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

              {/* 其他问题及其回答 */}
              {data.questions.map((q, i) => (
                <React.Fragment key={i}>
                  <TableRow>
                    <TableCell className="bg-gray-100 font-semibold text-center">
                      {q.title}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-center text-white">
                      {q.answer}
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
};

export default TableComponent;
