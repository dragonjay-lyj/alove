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
如图所示，将褌的一端 (イ) 搭在肩上，用另一端 (ロ) 遮盖住裆部，并从两腿之间绕到身后。 (当然，在实际操作过程中，需要用手按住褌，防止其滑落。)</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417580/Fundoshi/6_02_ur1s7c.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤二】
将从裆部绕到身后的布端 (ロ) 斜着穿过臀部，缠绕腰部，并从搭在肩上的布端 (イ) 上方穿过，继续沿着腰部逆时针绕一圈。 (此时，布端 (イ) 仍然搭在肩上。)</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417580/Fundoshi/6_03_yftt6s.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤三】
将布端 (ロ) 从内侧勾住步骤二中横过臀部的布料，并向反方向拉紧。</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417581/Fundoshi/6_04_sx3p0s.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤四】
            将布端 (ロ) 塞进腰带中，暂时固定。</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_05_zck3cs.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤五】
将搭在肩上的布端 (イ) 放下，自然垂在身前。</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_06_rdqw88.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤六】
将布端 (イ) 从两腿之间穿过，绕到身后。 然后松开步骤四中固定的布端 (ロ)。</TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6a_07_jecusr.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤七】
从背后看，将布端 (イ) 和 (ロ) 交叉，(イ) 位于左侧，(ロ) 位于右侧，然后用力向两侧拉紧。</TableCell>
        </TableRow>
        <TableRow key="8">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6a_08_rcwuva.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤八】
将布端 (イ) 和 (ロ) 从下往上塞进腰带中。</TableCell>
        </TableRow>
        <TableRow key="9">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417581/Fundoshi/6a_09_z5jdtq.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【完成图一】
后视图</TableCell>
        </TableRow>
        <TableRow key="10">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_10_tzzyrr.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【完成图二】
前视图。 (将前片整理平整，打造出自然的三角形。)</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
