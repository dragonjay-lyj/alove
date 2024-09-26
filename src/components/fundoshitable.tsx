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
将褌一端（イ）搭于肩上，另一端（ロ）遮蔽私处，并绕至身后。自然，此步骤需以手扶持。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417580/Fundoshi/6_02_ur1s7c.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤二】
将绕至身后之（ロ）端，斜跨臀部，缠绕腰际，并穿过（イ）端上方，依反时针方向绕腰一周。（イ）端仍搭于肩上。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417580/Fundoshi/6_03_yftt6s.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤三】
将（ロ）端，由内向外，勾住斜跨臀部之布料，并向反方向拉紧。</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417581/Fundoshi/6_04_sx3p0s.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤四】
将（ロ）端塞入横绕腰际之布料（如同腰带一般）中，暂时固定。</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_05_zck3cs.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤五】
将搭于肩上之（イ）端放下，使其自然垂于身前。</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_06_rdqw88.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤六】
将（イ）端穿过私处，绕至身后。并解开（ロ）端之临时固定。</TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6a_07_jecusr.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤七】
将身后之（イ）（ロ）两端交叉，（イ）位于左侧，（ロ）位于右侧，并向两侧拉紧固定。</TableCell>
        </TableRow>
        <TableRow key="8">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6a_08_rcwuva.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤八】
将（イ）（ロ）两端，由下至上，卷入横绕腰际之布料中。</TableCell>
        </TableRow>
        <TableRow key="9">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417581/Fundoshi/6a_09_z5jdtq.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【完成图一】
后视图</TableCell>
        </TableRow>
        <TableRow key="10">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_10_tzzyrr.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【完成图二】
前视图。将前褌（前方三角形部分）整理平整</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
