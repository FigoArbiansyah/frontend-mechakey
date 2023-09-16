import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../dummies/products';
import GradientBadge from '../components/GradientBadge';
import TableRow from '../components/TableRow';
import BackButton from '../components/BackButton';
import DetailImage from '../components/DetailImage';

const DetailProduct: React.FC = () => {
  const { id } = useParams();
  const [count, setCount] = useState<number>(1);
  const filteredProducts = products.filter((product) => Number(product?.id) === Number(id))[0];
  const counterForCheckout = (_isAdding: boolean) => {
    if (_isAdding) {
        if (count < filteredProducts?.stock) {
            setCount(count + 1);
        }
    } else {
        if (count !== 1) {
            setCount(count - 1);
        }
    }
  };
  
  return (
    <section className='min-h-screen md:p-24 p-5'>
        <div>
            <BackButton to='/#products' />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            <DetailImage
                thumbnail={filteredProducts?.thumbnail}
                images={filteredProducts?.images}
            />
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
                    <div className="mt-10">
                        <div className="flex justify-between items-center gap-5">
                            <p className="text-slate-900" style={{
                                flex: 3,
                            }}>Jumlah : </p>
                            <div style={{
                                flex: 1,
                            }} className='flex justify-between items-center'>
                                <button
                                onClick={() => counterForCheckout(false)}
                                className='border p-1.5 rounded'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                    </svg>
                                </button>
                                <span>{count}</span>
                                <button
                                onClick={() => counterForCheckout(true)}
                                className='border p-1.5 rounded'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-5">
                            <button
                              className='p-2 border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white transition-all ease'
                            >Add to Cart</button>
                            <button
                              className='p-2 hover:bg-red-400 bg-rose-500 text-white transition-all ease'
                            >Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default DetailProduct;