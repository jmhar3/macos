import { css } from "styled-system/css";

export default function Window() {
	return (
		<h1
			className={css({
				fontSize: "sm",
				fontWeight: "bold",
				color: "red.200",
			})}
		>
			Hello World
		</h1>
	);
}
