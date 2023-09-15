import React, { useState, useRef } from 'react';

interface DetailImageProps {
    thumbnail: string;
    images: string[];
}

const DetailImage: React.FC<DetailImageProps> = ({ thumbnail, images }) => {
  const [currentImg, setCurrentImg] = useState<string>('');
  const [isThumbnail, setIsThumbnail] = useState<boolean>(true);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const handleChangeProductImage = (imgSource: string, _isThumbnail: boolean) => {
    if (imageRef && imageRef.current) {
        imageRef.current.src = imgSource;
        // console.log(imageRef.current.src);
        setCurrentImg(imageRef.current.src);
        setIsThumbnail(_isThumbnail);
    }
  };
  const thisImageIsShowed = (showedImage: string | undefined, optionImage: string) => {
    if (showedImage === optionImage) return true;
  };
  return (
    <div>
        <div className='rounded overflow-hidden'>
            <img ref={imageRef} src={thumbnail} className='w-full object-cover h-[25rem] transition-all ease duration-300' alt="" />
        </div>
        <div className="mt-3 flex flex-wrap justify-center items-center gap-2">
            <div
                onClick={() => handleChangeProductImage(thumbnail, true)} className="w-14 rounded aspect-square cursor-pointer"
            >
                <img
                    src={thumbnail}
                    alt={thumbnail}
                    className={`w-14 rounded aspect-square object-cover border-2 ${isThumbnail ? 'border-rose-500' : 'border-white'}`}
                />
            </div>
            {images?.map(((img, index) => {
                return (
                    <div
                        onClick={() => handleChangeProductImage(img, false)}
                        key={(index += 1)}
                        className={`w-14 rounded aspect-square cursor-pointer border-2 overflow-hidden ${
                            (!isThumbnail && thisImageIsShowed(currentImg, img))
                                ? 'border-rose-500'
                                : 'border-white'
                        }`}
                    >
                        <img src={img} alt={img} className='w-14 aspect-square object-cover' />
                    </div>
                );
            }))}
        </div>
    </div>
  );
};

export default DetailImage;