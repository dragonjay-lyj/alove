import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import {Image} from "@nextui-org/image";

export default function App() {
  return (
    <Table hideHeader aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>NAME</TableColumn>
        <TableColumn>ROLE</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417581/Fundoshi/6_01_fhrk3h.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤一】
将褌的一端（イ）搭在肩上，用另一端（ロ）遮住裆部，从两腿之间绕到身后。当然，实际上是用手按住的。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417580/Fundoshi/6_02_ur1s7c.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤二】
将从裆部绕过来的那一端（ロ）斜着从臀部绕到腰间，从搭在肩上的那一端（イ）上方交叉，从上往下看，绕腰部逆时针缠绕一周。（イ）仍然搭在肩上。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417580/Fundoshi/6_03_yftt6s.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤三】
将（ロ）从内侧勾住横跨臀部的布料，向反方向拉紧。</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417581/Fundoshi/6_04_sx3p0s.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤四】
将（ロ）端塞进腰带（横跨臀部的布料），暂时固定。</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_05_zck3cs.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤五】
将搭在肩上的（イ）端放下，使其自然垂在身前。</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_06_rdqw88.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤六】
将搭在肩上的布端（イ）从胯下穿过绕到身后，然后解开（ロ）的固定。</TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6a_07_jecusr.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤七】
从背后看，将（イ）、（ロ）两端交叉，（イ）在左，（ロ）在右，左右用力拉紧。</TableCell>
        </TableRow>
        <TableRow key="8">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6a_08_rcwuva.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤八】
将（イ）和（ロ）从下往上绕过腰带。</TableCell>
        </TableRow>
        <TableRow key="9">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417581/Fundoshi/6a_09_z5jdtq.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【完成图一】
背后观赏图。</TableCell>
        </TableRow>
        <TableRow key="10">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_10_tzzyrr.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【完成图二】
正面观赏图。请务必将前襟（前方三角形的部分）整理平整。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
