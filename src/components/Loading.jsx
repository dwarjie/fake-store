function Loading() {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-4">
			<h2 className="font-medium text-lg text-dark-blue">LOADING</h2>
			<div className="flex items-center justify-center gap-2">
				<div className="w-3 h-3 rounded-full animate-pulse bg-dark-blue"></div>
				<div className="w-3 h-3 rounded-full animate-pulse bg-dark-blue"></div>
				<div className="w-3 h-3 rounded-full animate-pulse bg-dark-blue"></div>
			</div>
		</div>
	);
}

export default Loading;
