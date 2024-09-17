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
          <TableCell>正确的穿着顺序是，先穿上褌或衬裤等遮盖下半身的内衣，然后再穿足袋。如果要穿肌襦袢或衬裙，也要在穿上足袋之后再穿。因为如果先穿其他衣物再穿足袋，可能会导致衣物变形。至少要在穿上长襦袢之前先穿上足袋。

穿足袋时，像左图所示，将要穿足袋的那条腿立起，身体半蹲。盘腿坐着穿足袋是不正确的姿势。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722916073/Fundoshi/w_tabi_2_n45prw.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>穿足袋时，像左图所示，将足袋向外翻折一半，然后套在脚上，用双手向前拉，使脚趾完全伸入足袋底部。接着将翻折的部分恢复原状，包裹住脚跟。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722915976/Fundoshi/w_tabi_3_butgki.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>系绊扣时，一定要按照从下往上的顺序，将绊扣依次挂在挂绳上并扣紧。每条挂绳都有两根线，系绊扣时，靠近内侧的那根线是备用线。将绊扣挂在外侧的挂绳上才是正确的系法，这时测量的尺寸才是准确的尺码。选择足袋尺码时，一定要将绊扣挂在外侧的挂绳上进行测量。如果绊扣难以扣紧，可以抓住脚踝向外或向内扭动，以便扣紧绊扣。另外，脱足袋时则没有特别的讲究，随意脱下即可。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
