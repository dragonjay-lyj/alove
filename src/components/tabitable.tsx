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
          <TableCell>一般来说，先穿褌、衬裤这类遮盖下半身的内衣，然后再穿足袋。即使要穿汗衫或裙衬，也要先穿足袋，因为后穿足袋可能会弄乱衣着。至少在穿长襦袢之前要把足袋穿上。穿足袋时，要像左图那样，单腿站立，上身微微前倾。盘腿穿足袋的姿势是不正确的。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722916073/Fundoshi/w_tabi_2_n45prw.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>穿的时候，先将足袋向外翻折一半，轻轻套在脚上，用双手将足尖向内推到最里面。然后将翻折的部分复原，包裹住整个脚跟。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722915976/Fundoshi/w_tabi_3_butgki.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>金属挂钩必须按照从下往上的顺序，依次扣在系线上。系线通常有两条，但扣挂钩时，靠近内侧的是备用线。将挂钩扣在外侧的系线上才是正确的位置，此时足袋的尺寸才是准确的。选择足袋尺寸时，一定要将挂钩扣在外侧的系线上进行比对。如果挂钩难以扣上，可以抓住脚踝向外或向内扭动，以便扣紧。另外，脱足袋时则无需拘泥于顺序，随意脱下即可。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
