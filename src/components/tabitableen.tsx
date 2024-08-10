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
          <TableCell>Traditionally, tabi are donned after undergarments like fundoshi (loincloth) or steteko (long underwear) have been secured. Even when layering garments such as hadajuban (undershirts) or susuyoke (underskirts), tabi come first. This sequence is crucial for maintaining the structural integrity of the kimono ensemble, preventing unsightly bunching or twisting. As a general rule, always put on your tabi before your nagajuban (long undershirt).Stand on one leg, slightly bending the knee of the leg you'll be putting the tabi on. This allows for greater ease of movement and ensures a proper fit. Avoid putting on tabi while sitting cross-legged, as this can lead to twisting and discomfort.</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722916073/Fundoshi/w_tabi_2_n45prw.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>Hold the tabi in your hand and fold the upper section outward about halfway. Slip your foot into the tabi, ensuring your toes reach the very end. Use both hands to gently pull the fabric forward, smoothing out any wrinkles.Once your toes are comfortably in place, unfold the upper section of the tabi and wrap it snugly around your heel.</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell><Image src="https://res.cloudinary.com/dkhp3hucr/image/upload/v1722915976/Fundoshi/w_tabi_3_butgki.avif" loading="lazy" isZoomed alt="Midas" /></TableCell>
          <TableCell>Always fasten the kohaze in order from the bottom upEach kohaze has two loops. The outer loop is the correct one for fastening, ensuring a snug fit. The inner loop serves as a spare. When trying on tabi, always fasten the kohaze to the outer loop to determine the correct size.If you find it difficult to fasten the kohaze, try gently twisting your ankle inward or outward to create a bit of slack.And finally, a word on tabi removal: while a specific method is prescribed for putting them on, feel free to take them off however you please!</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
