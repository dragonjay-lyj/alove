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
          <TableCell>【步骤1】
将褌的一端（イ）搭在肩上，用另一端（ロ）遮住裆部，并将布料从裆部绕到身后。当然，实际操作时需要用手按住布料。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417580/Fundoshi/6_02_ur1s7c.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤2】
将从裆部绕到身后的布料（ロ）斜着穿过臀部，绕到腰部，并从布料（イ）上方穿过，使布料（ロ）以腰部为中心逆时针绕一圈。（イ）仍然保持搭在肩上的状态。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417580/Fundoshi/6_03_yftt6s.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤3】
将布料（ロ）从内侧穿过横跨臀部的布料下方，并向反方向拉紧。</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417581/Fundoshi/6_04_sx3p0s.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤4】
将布料（ロ）夹在横绕腰部的布料（如同腰带一般）下方，暂时固定。</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_05_zck3cs.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤5】
将搭在肩上的布料（イ）放下，使其自然垂在身前。</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_06_rdqw88.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤6】
将布料（イ）从裆部绕到身后，并解开布料（ロ）的临时固定。</TableCell>
        </TableRow>
        <TableRow key="7">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6a_07_jecusr.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤7】
从背后看，将布料（イ）置于左侧，布料（ロ）置于右侧，并将两者交叉，左右用力拉紧。</TableCell>
        </TableRow>
        <TableRow key="8">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6a_08_rcwuva.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【步骤8】
将布料（イ）和（ロ）从下往上塞进横绕腰部的布料中。</TableCell>
        </TableRow>
        <TableRow key="9">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417581/Fundoshi/6a_09_z5jdtq.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【完成图1】
后视图。</TableCell>
        </TableRow>
        <TableRow key="10">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722417579/Fundoshi/6_10_tzzyrr.gif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>【完成图2】
前视图。注意将前袋（前面的三角形口袋）整理平整。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
