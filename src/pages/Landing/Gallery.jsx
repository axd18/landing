const galleryData = [
  // Columna 1
  [
    "/images/01.jpg",
    // "/images/02.jpg",
    // "/images/03.jpg",
    // "/images/04.jpg"
  ],
  // Columna 2
  [
    "/images/02.jpg",
    // "/images/01.jpg",
    // "/images/03.jpg",
    // "/images/02.jpg",
  ],
  // Columna 3
  [
    "/images/05.jpg",
    // "/images/04.jpg",
    // "/images/01.jpg",
    // "/images/03.jpg",
  ],
  // Columna 4
  [
    // "/images/04.jpg",
    // "/images/02.jpg",
    // "/images/03.jpg",
    // "/images/04.jpg",
  ]
];

const Gallery = () => {


  return (
    <section className="py-10 bg-white sm:py-16 lg:py-24 overflow-hidden">
      {/* <h2 className="text-center text-3xl font-bold leading-tight text-slate-950 sm:text-4xl xl:text-5xl font-pj"
        
       
      >
        Profesionales que confían en nosotros
      </h2> */}
      <div className="mt-16 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {galleryData.map((column, columnIndex) => (
        <div key={columnIndex} className="grid gap-4">
          {column.map((imageSrc, imageIndex) => (
            <div key={imageIndex}>
              <img
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={imageSrc}
                alt="gallery-photo"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
      </div>
    </section>
  );
};

export default Gallery;
