import { cva, type RecipeVariantProps } from "styled-system/css";
import { styled, Box as JSXBox } from "styled-system/jsx";

const boxStyle = cva({
	base: {
		color: "sky.900",
		w: "fit-content",
		borderLeft: "2px solid white",
		borderTop: "2px solid white",
		borderRight: "2px solid #0c4a6e",
		borderBottom: "2px solid #0c4a6e",
		boxShadow: "-2px -2px #93c5fd inset",
	},
});

export type BoxVariants = RecipeVariantProps<typeof boxStyle>;

export const Box = styled(JSXBox, boxStyle);
