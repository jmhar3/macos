import { cva, type RecipeVariantProps } from "styled-system/css";
import { styled } from "styled-system/jsx";

const buttonStyle = cva({
	base: {
		px: "1.5",
		bg: "blue.50",
		w: "fit-content",
		color: "sky.900",
		borderLeft: "2px solid white",
		borderTop: "2px solid white",
		borderRight: "2px solid #0c4a6e",
		borderBottom: "2px solid #0c4a6e",
		boxShadow: "-2px -2px #93c5fd inset",
		_hover: {
			cursor: "pointer",
			borderLeft: "2px solid #0c4a6e",
			borderTop: "2px solid #0c4a6e",
			borderRight: "2px solid white",
			borderBottom: "2px solid white",
			boxShadow: "2px 2px #93c5fd inset",
		},
	},
	variants: {
		size: {
			sm: { padding: "4", fontSize: "12px" },
			lg: { padding: "8", fontSize: "24px" },
		},
	},
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>;

export const Button = styled("button", buttonStyle);
