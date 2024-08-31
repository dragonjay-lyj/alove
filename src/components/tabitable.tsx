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
          <TableCell>通常，先穿褌或衬裤等遮蔽下体的内衣，然后再穿足袋。即使穿汗衫或衬裙，也要在穿足袋之后再穿。因为如果先穿其他衣物再穿足袋，可能会导致衣物走样。至少在穿长襦袢之前要先穿上足袋。穿足袋时，像图中那样，单腿站立，上身略微前倾。盘腿坐着穿足袋，并不是正确的姿势。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722916073/Fundoshi/w_tabi_2_n45prw.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>穿足袋时，像图中那样，先将足袋向外翻折一半，然后套在脚上，并用双手将其向前拉，确保脚趾完全伸到足袋底部。然后再将翻折的部分翻回来，包裹住整个脚后跟。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722915976/Fundoshi/w_tabi_3_butgki.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>金属钩扣需由下至上依次挂在系带上固定。系带必有两条，挂钩时，靠近内侧一条为备用。将钩扣挂在外侧系带上才算正确，此时尺寸方为准确。选购足袋时，务必以挂在外侧系带上的尺寸为准。若钩扣难挂，可将脚踝向外或向内扭动辅助。顺带一提，脱足袋时则不必拘泥。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
