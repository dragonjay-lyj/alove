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
将褌的一端（イ）搭在肩上，用另一端（ロ）遮住裆部，并从裆部绕至身后。当然，实际操作中需要用手按住。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417580/Fundoshi/6_02_ur1s7c.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤二】
将从裆部绕至身后的（ロ）端，斜着穿过臀部，绕至腰部，并从（イ）端上方穿过，使褌在腰部绕一圈（从上方看为逆时针方向）。（イ）端依然搭在肩上。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417580/Fundoshi/6_03_yftt6s.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤三】
将（ロ）端从内侧勾住穿过臀部的布料，向反方向拉紧。</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417581/Fundoshi/6_04_sx3p0s.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤四】
将（ロ）端夹在横绕腰部的布料（如同腰带般）之间，暂时固定。</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_05_zck3cs.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤五】
将搭在肩上的（イ）端放下，使其自然垂在身前。</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_06_rdqw88.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤六】
将（イ）端从裆部绕至身后，并解开（ロ）端的临时固定。</TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6a_07_jecusr.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤七】
从身后看，将（イ）端置于左侧，（ロ）端置于右侧，并将两者交叉，向左右两侧用力拉紧。</TableCell>
        </TableRow>
        <TableRow key="8">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6a_08_rcwuva.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤八】
将（イ）端和（ロ）端从下往上塞进横绕腰部的布料中。</TableCell>
        </TableRow>
        <TableRow key="9">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417581/Fundoshi/6a_09_z5jdtq.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【完成图一】
后视图。</TableCell>
        </TableRow>
        <TableRow key="10">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_10_tzzyrr.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【完成图二】
前视图。注意将前袋（前方三角形的兜裆布）整理平整。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
