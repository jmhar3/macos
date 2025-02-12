import type { Route } from "./+types/home";
import { css } from "styled-system/css";
import { Box, Stack } from "styled-system/jsx";
import Window from "~/components/window";
import { Button } from "~/recipes/button";

export function meta() {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<Box>
			<Window heading="Basic Info">
				<Stack px="5" py="3" align="center">
					<h1>Hello, I am the Hackerman</h1>
					<Button>Ignore</Button>
				</Stack>
			</Window>
		</Box>
	);
}
