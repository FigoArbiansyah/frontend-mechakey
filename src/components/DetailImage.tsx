import React, { useState, useRef } from 'react';

interface DetailImageProps {
    thumbnail: string;
    images: string[];
}

const DetailImage: React.FC<DetailImageProps> = ({ thumbnail, images }) => {
  const [currentImg, setCurrentImg] = useState<string>('');
  const [isThumbnail, setIsThumbnail] = useState<boolean>(true);
  const [isZoomed, setIsZoomed] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // eslint-disable-next-line no-unused-vars
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

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
        <div
            className='rounded overflow-hidden w-full h-[25rem] relative transition-all ease-in-out duration-300 cursor-zoom-in'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
        >
            <img
                ref={imageRef}
                src={thumbnail}
                className={`w-full object-cover h-full  ${
                    isZoomed ? 'relative scale-150' : 'relative scale-100'
                }`}
                alt=""
                style={{
                    top: isZoomed ? `-${cursorPosition.y / 7}px` : 0,
                    left: isZoomed ? `-${cursorPosition.x / 7}px` : 0,
                }}
            />
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