import { Box, Stack } from "styled-system/jsx";

export interface FileProps {
	title: string;
	image: string;
}
export default function File({ title, image }: FileProps) {
	return (
		<Stack
			pt="1"
			pb="2"
			px="2"
			gap="0"
			w="24"
			h="fit-content"
			align="center"
			border="dashed 2px"
			borderColor="pink.50"
			_hover={{ borderColor: "sky.900" }}
		>
			<img src={image} aria-label={title} />
			<h1>{title}</h1>
		</Stack>
	);
}
