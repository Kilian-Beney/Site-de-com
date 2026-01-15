export const ArtisticShowcaseSection = (): JSX.Element => {
  const artworks = [
    { id: 1, position: "top-[5%] left-[5%]", width: "w-[180px] md:w-[220px]", height: "h-[120px] md:h-[150px]" },
    { id: 2, position: "top-[15%] right-[8%]", width: "w-[200px] md:w-[280px]", height: "h-[140px] md:h-[200px]" },
    { id: 3, position: "top-[40%] left-[2%]", width: "w-[150px] md:w-[200px]", height: "h-[100px] md:h-[140px]" },
    { id: 4, position: "bottom-[25%] right-[5%]", width: "w-[180px] md:w-[250px]", height: "h-[120px] md:h-[180px]" },
    { id: 5, position: "top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2", width: "w-[250px] md:w-[400px]", height: "h-[180px] md:h-[300px]", zIndex: "z-20" },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 px-4 md:px-12 lg:px-[114px] bg-white">
      <div className="relative w-full h-[600px] md:h-[800px] overflow-hidden bg-white mb-12">
        <div className="absolute inset-0 flex items-center justify-center">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className={`absolute ${artwork.position} ${artwork.width} ${artwork.height} ${artwork.zIndex || 'z-10'} bg-[#E5E5E5] border border-gray-300 shadow-lg`}
            >
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-30">
          <h1 className="[font-family:'Helvetica_Neue-Bold',Helvetica] font-bold text-black text-[80px] md:text-[150px] lg:text-[200px] tracking-[-8px] md:tracking-[-15px] lg:tracking-[-20px] leading-none text-center">
            Jean Dupas
          </h1>
        </div>
      </div>
    </section>
  );
};
