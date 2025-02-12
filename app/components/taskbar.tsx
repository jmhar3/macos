import { Box, Flex } from "styled-system/jsx";
import { Button } from "~/recipes/button";

export default function Taskbar() {
	return (
		<Box
			p="1"
			w="100%"
			left="0"
			bottom="0"
			bg="sky.50"
			position="fixed"
			borderTop="solid 2px"
			borderColor="white"
		>
			<Flex gap="1">
				<Button fontWeight="bold">Start</Button>
				<Button>Basic Info</Button>
			</Flex>
		</Box>
	);
}
