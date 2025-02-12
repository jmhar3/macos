import type { Route } from "./+types/home";
import { css } from "styled-system/css";
import { Box } from "styled-system/jsx";
import Window from "~/components/window";

export function meta() {
	return [
		{ title: "New React Router App" },
		{ name: "description", content: "Welcome to React Router!" },
	];
}

export default function Home() {
	return (
		<Box>
			<Window />
		</Box>
	);
}
