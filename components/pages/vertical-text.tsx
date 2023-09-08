type Props = {
	children: React.ReactNode;
};

export const VerticalText = ({ children }: Props) => {
	return (
		<div className="absolute left-[8%] top-0 hidden w-0 flex-col items-center min-[1200px]:flex">
			<div className="mb-28 h-[104px] w-[1px] bg-[#C8CCD8]" />
			<span className="rotate-90 text-lg font-medium uppercase tracking-[18px] text-[#C8CCD8]">
				{children}
			</span>
		</div>
	);
};
