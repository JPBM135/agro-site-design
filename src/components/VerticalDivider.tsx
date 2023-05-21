interface VerticalDividerProps {
	height?: number;
	opacity?: number;
	width?: number;
}

export function VerticalDivider({ width = 2, height = 24, opacity = 0.8 }: VerticalDividerProps) {
	return (
		<div
			className="bg-raisin-black h-full"
			style={{
				width,
				height,
				opacity,
			}}
		/>
	);
}
