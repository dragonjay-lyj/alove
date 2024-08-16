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
          <TableCell>Traditionally, after donning undergarments like fundoshi or steteko, tabi are the next to be worn. Even when wearing hadajuban (undershirt) or susoyoke (overskirt), tabi come first. Putting on tabi afterwards can actually disrupt the fit of these garments. At the very least, make sure your tabi are on before your nagajuban.When putting on tabi, stand on one leg and bend at the waist, as shown on the left.  Sitting cross-legged while putting on tabi is not the proper way.</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722916073/Fundoshi/w_tabi_2_n45prw.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>Fold the tabi outward about halfway, as shown on the left, then slip your foot in, using both hands to pull the fabric forward so your toes reach the end.  Next, fold the back part up and over your heel.</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722915976/Fundoshi/w_tabi_3_butgki.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>When fastening the kohaze hooks, always start from the bottom and work your way up, hooking them onto the loops. You'll notice two loops for each hook. The inner loop is a spare. The correct position for fastening the kohaze is on the outer loop – this ensures a precise fit. When choosing your tabi size, always fasten the hooks on the outer loops for an accurate measurement. If you find the hooks difficult to fasten, try twisting your ankle outwards or inwards for better access.  And by the way, feel free to remove your tabi however you like.</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
