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
          <TableCell><Image src="https://s3plus.meituan.net/v1/mss_550586ef375b493da4aa79bebdfce4fa/csc-apply-file-web/prod/2024-10-03/74365f5d-573f-4178-a206-8a1e087ddf11.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>本来，在穿上褌或短裤等覆盖下半身的内衣后，再穿足袋。如果穿肌襦袢或裾袢，也要在穿足袋之后。如果后穿足袋，可能会导致衣服散开。至少在穿长襦袢之前，要先穿足袋。
穿足袋时，要像左边那样，立起要穿足袋的那只脚，稍微弯腰。盘腿坐着穿足袋，本来是不正确的姿势。</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://s3plus.meituan.net/v1/mss_550586ef375b493da4aa79bebdfce4fa/csc-apply-file-web/prod/2024-10-03/e7ce1b87-1fb5-442e-991e-a9e0fc995134.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>穿足袋时，要像左边那样，先将足袋外侧折回一半，然后套在脚上，用双手拉到脚趾能完全伸到足袋深处。然后，将折回的部分拉回，包住脚跟。</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://s3plus.meituan.net/v1/mss_550586ef375b493da4aa79bebdfce4fa/csc-apply-file-web/prod/2024-10-03/1a9a1466-f12f-40fe-9211-8fbfbd8710a3.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>小钩要从小钩孔的下方开始，依次挂在挂线上。挂线有两根，挂小钩时，面向内侧的是备用线。正确的小钩位置是挂在外侧的挂线上，这时的大小就是正确的尺寸。选择足袋尺寸时，一定要挂在外侧的挂线上选择。如果小钩挂起来困难，可以抓住脚踝，向外侧或内侧扭转，以便挂上小钩。顺便说一下，脱足袋时可以随意脱。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
