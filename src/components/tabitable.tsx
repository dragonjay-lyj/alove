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
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722915777/Fundoshi/w_tabi_1_jsn6v7.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>着褌或衬裤等亵衣后，方可穿足袋。若着肌襦袢或衬裙，亦应先穿足袋，以免衣衫走样。至少在穿长襦袢之前，应先穿好足袋。
          穿足袋之时，宜单腿站立，屈膝弯腰，如左图所示。盘腿而坐穿足袋，实为不雅之姿。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722916073/Fundoshi/w_tabi_2_n45prw.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>穿足袋，先将足袋外翻至半，套入足中，以双手将趾尖拉至最深处，再将外翻部分复原，包裹至脚跟，如左图所示。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722915976/Fundoshi/w_tabi_3_butgki.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>系小钩，须自下而上，依次扣于挂线。挂线有两根，靠内侧者为备用。将小钩扣于外侧挂线，方为正确位置，此时尺寸最为精准。选购足袋，亦应以外侧挂线为准。若小钩不易扣合，可将脚踝向外或向内扭转。脱足袋则无需讲究。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
