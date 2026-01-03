function TechSlide({ src, alt, label }) {
	return (
		<div className="relative group flex items-center justify-center">
			<img src={src} alt={alt} className="w-36 h-36"/>
			<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
				{label}
			</div>
		</div>
	);
}

export default TechSlide;
