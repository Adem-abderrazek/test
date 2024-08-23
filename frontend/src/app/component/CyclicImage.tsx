import Image from 'next/image';

const CyclicImage = () => {
  const images = [
    { src: 'https://products.eneba.games/resized-products/tNrtlfLHwICUQKENFyfGwAfNIArviHB3GtRxim-_Yfc_350x200_2x-0.jpg',  altText: 'Image 2 Description', title:'Dark Souls Prepare to Die Edition (PC) ' },
    { src: 'https://products.eneba.games/resized-products/pfh6p58zvuchhs6ayuaq_350x200_2x-0.jpg', altText: 'Image 3 Description', title: 'Deadpool ' },
    { src: 'https://products.eneba.games/resized-products/pUKOz72dHX1MlE_ICBiJoV8d5-jH5wMci-ikKM_53aY_350x200_2x-0.jpeg', altText: 'Image 4 Description', title: 'Fast & Furious Crossroads - Deluxe Edition' },
    { src: 'https://products.eneba.games/resized-products/tNrtlfLHwICUQKENFyfGwAfNIArviHB3GtRxim-_Yfc_350x200_2x-0.jpg',  altText: 'Image 2 Description', title:'Dark Souls Prepare to Die Edition (PC) ' },
    { src: 'https://products.eneba.games/resized-products/pfh6p58zvuchhs6ayuaq_350x200_2x-0.jpg', altText: 'Image 3 Description', title: 'Deadpool ' },
    { src: 'https://products.eneba.games/resized-products/pUKOz72dHX1MlE_ICBiJoV8d5-jH5wMci-ikKM_53aY_350x200_2x-0.jpeg', altText: 'Image 4 Description', title: 'Fast & Furious Crossroads - Deluxe Edition' },
    { src: 'https://products.eneba.games/resized-products/Cs8G1AuInWD4bT734UzC1Nk9cn1gvYm7pgfnzqwDz1Q_350x200_2x-0.jpeg', altText: 'Image 5 Description', title: 'PAC-MAN and the Ghostly Adventures' },
    { src: 'https://products.eneba.games/resized-products/iuJ2GAEd3P4Ka2FfDA3t7kVCuq7c5V_h2qn372E6UsM_350x200_2x-0.jpeg', altText: 'Image 6 Description', title: 'Fortnite: Save the World - Standard Founders Pack (Xbox One) Xbox Live' },
  ];

  return (
    <div className="w-full overflow-hidden">
<div className="flex items-center justify-center bg-primary">
  <h1 className="text-4xl font-bold text-gray ">Recomendations :</h1>
</div>  

      <div className="flex animate-scroll">
        
        {images.concat(images).map((imageObject, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col items-center">
            <div className="relative">
             
              <Image
                src={imageObject.src}
                alt={imageObject.altText}
                width={250}
                height={75}
                className="object-cover w-[250px] h-[300px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CyclicImage;
