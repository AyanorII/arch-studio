type Props = {
	children: React.ReactNode;
};

export const VerticalText = ({ children }: Props) => {
	return (
		<div className="absolute left-[8%] top-0 hidden h-full w-0 flex-col items-center min-[1200px]:flex">
			<div className="h-[104px] w-[1px] bg-[#C8CCD8]" />
			<span className="ml-6 mt-5 block h-0 w-0 origin-bottom-left rotate-90 text-lg font-medium uppercase tracking-[18px] text-[#C8CCD8]">
				{children}
			</span>
		</div>
	);
};
