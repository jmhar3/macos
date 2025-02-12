import { Flex } from "styled-system/jsx";
import File from "./file";
import fileImage from "public/pngegg.png";

export default function DesktopFiles() {
	return (
		<Flex gap="1" top="2" left="2" position="fixed">
			<File title="Resume" image={fileImage} />
		</Flex>
	);
}
