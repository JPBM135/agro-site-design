interface VerticalDividerProps {
	className?: string;
	height?: number | string;
	opacity?: number;
	width?: number | string;
}

export function VerticalDivider({
	width = 2,
	height = 24,
	opacity = 0.8,
	className = 'bg-raisin-black',
}: VerticalDividerProps) {
	return (
		<div
			className={`h-full ${className}`}
			style={{
				width,
				height,
				opacity,
			}}
		/>
	);
}
