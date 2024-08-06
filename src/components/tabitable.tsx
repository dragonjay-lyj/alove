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
          <TableCell>正确的穿衣顺序是：先穿上褌或衬裤等遮盖下半身的内衣，然后再穿足袋。 如果您要穿衬裙或衬裤，也应该在穿上足袋之后再穿。 这是因为，如果先穿衬裙或衬裤，再穿足袋，可能会导致和服下摆出现褶皱，影响美观。 至少要在穿长襦袢之前穿上足袋。
穿足袋时，请您像左图所示，将要穿足袋的那只脚立起来，身体微微下蹲。 不要盘腿坐着穿足袋，这是一种不雅观的姿势。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722916073/Fundoshi/w_tabi_2_n45prw.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>如图所示，将足袋向外翻折一半左右，然后套在脚上，并用双手向后拉伸，确保脚趾完全伸入足袋内部。 然后将翻折的部分翻回来，包裹住脚后跟。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722915976/Fundoshi/w_tabi_3_butgki.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>固定搭扣时，请务必按照从下往上的顺序，将搭扣依次挂在“かけ糸” (kakeito) 上。 每枚搭扣都会有两条“かけ糸”，但只有外侧的那条才是正确的固定位置，内侧的“かけ糸”是备用的。 选择足袋尺码时，也应该将搭扣挂在外侧的“かけ糸”上进行判断。
如果搭扣难以固定，您可以尝试转动脚踝，或者用手将足袋向内或向外拉伸，以便于固定搭扣。
另外，脱足袋时则没有太多需要注意的地方，您可以随意脱下。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
