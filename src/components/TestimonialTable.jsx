import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const TestimonialTable = ({ cards }) => {
  return (
    <>
    {cards.map((card) => (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {/* 证言编号 */}
          <TableRow>
            <TableCell colSpan={4}><a name={card.testimonialId}>{card.testimonialId}</a></TableCell>
          </TableRow>
          {/* ハンドルネーム */}
          <TableRow>
            <TableCell colSpan={4}><strong>ハンドルネーム</strong></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>{card.handleName}</TableCell>
          </TableRow>
          {/* 年齢、性別、職業、居住地 */}
          <TableRow>
            <TableCell width="25%"><strong>年齢</strong></TableCell>
            <TableCell width="25%"><strong>性別</strong></TableCell>
            <TableCell width="25%"><strong>職業</strong></TableCell>
            <TableCell width="25%"><strong>居住地</strong></TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="25%">{card.age}</TableCell>
            <TableCell width="25%">{card.gender}</TableCell>
            <TableCell width="25%">{card.occupation}</TableCell>
            <TableCell width="25%">{card.residence}</TableCell>
          </TableRow>
          {/* 表題 */}
          <TableRow>
            <TableCell colSpan={4}><strong>表題</strong></TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={4}>{card.title}</TableCell>
          </TableRow>
          {/* 本文 */}
          <TableRow>
            <TableCell colSpan={4}>
              <p>{card.content}</p>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
))}
</>
  );
};

export default TestimonialTable;
