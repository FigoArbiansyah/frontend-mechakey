import React, { useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import products from '../dummies/products';
import GradientBadge from '../components/GradientBadge';
import TableRow from '../components/TableRow';

const DetailProduct: React.FC = () => {
  const { id } = useParams();
  const [currentImg, setCurrentImg] = useState<string>('');
  const [isThumbnail, setIsThumbnail] = useState<boolean>(true);
  const filteredProducts = products.filter((product) => Number(product?.id) === Number(id))[0];

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
    <section className='min-h-screen md:p-24 p-5'>
        <div className="grid md:grid-cols-2 gap-8">
            <div>
                <div className='rounded overflow-hidden'>
                    <img ref={imageRef} src={filteredProducts?.thumbnail} className='w-full object-cover h-[25rem]' alt="" />
                </div>
                <div className="mt-3 flex flex-wrap justify-center items-center gap-2">
                    <div
                        onClick={() => handleChangeProductImage(filteredProducts?.thumbnail, true)} className="w-14 rounded aspect-square cursor-pointer"
                    >
                        <img
                            src={filteredProducts?.thumbnail}
                            alt={filteredProducts?.thumbnail}
                            className={`w-14 rounded aspect-square object-cover border-2 ${isThumbnail ? 'border-rose-500' : 'border-white'}`}
                        />
                    </div>
                    {filteredProducts?.images?.map(((img, index) => {
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
            <div>
                <div>
                    <div>
                        <h2 className="text-2xl text-slate-800 font-semibold">
                            {filteredProducts?.name}
                        </h2>
                        <div className="w-20 h-2 bg-gradient-to-r from-rose-500 to-fuchsia-500"></div>
                    </div>
                    <h4 className='text-xl font-bold mt-3'>
                        Rp. {filteredProducts?.price?.toLocaleString('id-ID')}
                    </h4>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {filteredProducts?.backlight && (
                            <GradientBadge
                                from='rose-500'
                                to='fuchsia-500'
                                textColor='white'
                                content='Backlight'
                            />
                        )}
                    </div>
                    <div className='mt-4'>
                        <p className="text-slate-600">{filteredProducts?.description}</p>
                    </div>
                    <div className='mt-4'>
                        <TableRow
                            rowTitle='Stock'
                            rowCell={filteredProducts?.stock?.toString() + ' pcs'}
                            rowCellStyle='text-rose-500'
                        />
                        <TableRow rowTitle='Connection' rowCell={filteredProducts?.connection} />
                        <TableRow rowTitle='Backlight' rowCell={filteredProducts?.backlight ? 'Yes' : 'No'} />
                        <TableRow rowTitle='Layout' rowCell={filteredProducts?.layout} />
                        <TableRow rowTitle='Switch' rowCell={filteredProducts?.switch_type} />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default DetailProduct;