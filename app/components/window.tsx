import type { PropsWithChildren } from "react";
import { useRef } from "react";

import { Flex, Stack } from "styled-system/jsx";
import { Button } from "~/recipes/button";
import Draggable from "react-draggable";
import { Box } from "~/recipes/box";

export interface WindowProps extends PropsWithChildren {
	heading: string;
}

export default function Window(props: WindowProps) {
	const nodeRef = useRef<HTMLElement>(null);

	return (
		<Draggable handle=".profile" nodeRef={nodeRef}>
			<Box>
				<Stack p="1" bg="blue.50">
					<Flex
						p="1"
						pl="2"
						gap="5"
						bg="sky.900"
						color="blue.50"
						align="center"
						justify="space-between"
						className="profile"
						ref={nodeRef}
					>
						<h1 color="blue.50">{props.heading}</h1>
						<Flex gap="1">
							<Button>_</Button>
							<Button>X</Button>
						</Flex>
					</Flex>

					{props.children}
				</Stack>
			</Box>
		</Draggable>
	);
}
