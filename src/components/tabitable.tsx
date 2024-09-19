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
          <TableCell>正确的穿着顺序是，先穿好褌或灯笼裤等下半身内衣，再穿足袋。若要穿着肌襦袢或衬裙，也应在穿好足袋之后，以免衣着散乱。至少在穿长襦袢之前，要先穿好足袋。
          穿足袋时，应如左图所示，单腿站立，身体略微前倾。盘腿而坐穿足袋，并非正确的姿势。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722916073/Fundoshi/w_tabi_2_n45prw.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>穿足袋时，应如左图所示，将足袋向外翻折一半，套在脚上，并用双手将足尖向后拉至底部。然后将翻折部分复原，包裹住脚跟。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722915976/Fundoshi/w_tabi_3_butgki.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>系小钩时，务必按照从下往上的顺序，将小钩依次挂在挂绳上。每处挂绳都有两条，靠近内侧的是备用绳。将小钩挂在外侧的挂绳上才是正确的固定位置，此时测量的尺寸才是准确的足袋尺寸。选择足袋尺寸时，务必将小钩挂在外侧挂绳上进行测量。如果小钩难以固定，可以抓住脚踝向外或向内扭动，以便固定。另外，脱足袋时则无需讲究顺序，随意即可。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
