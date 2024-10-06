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
          <TableCell>本来，穿上褌或束腿裤等覆盖下半身的内衣后，接下来就是穿足袋。如果穿着肌襦袢或裾よけ，也要在穿足袋之后进行。如果后穿足袋，可能会导致衣服变形。至少在穿长襦袢之前，应该先穿足袋。穿足袋时，应像左图所示，将一只脚抬起，身体稍微前倾。盘腿坐着穿足袋原本是不正确的姿势。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722916073/Fundoshi/w_tabi_2_n45prw.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>足袋应像左图所示，先将其外侧折回一半，然后套在脚上，用双手将足袋的前部拉紧，使脚趾能够完全伸到足袋的深处。接着，将折回的部分恢复原状，包裹住脚跟。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722915976/Fundoshi/w_tabi_3_butgki.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>系带必须从下往上依次挂在挂绳上并固定。挂绳通常有两根，但系带时，内侧的那根是备用绳。正确的固定位置是外侧的挂绳，此时的大小才是准确的尺寸。选择足袋尺寸时，务必挂在外侧的挂绳上。如果系带难以固定，可以抓住脚踝向外或向内扭转来固定。顺便说一下，脱足袋时可以随意脱下。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
