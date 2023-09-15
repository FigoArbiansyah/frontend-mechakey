import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../dummies/products';
import GradientBadge from '../components/GradientBadge';
import TableRow from '../components/TableRow';
import BackButton from '../components/BackButton';
import DetailImage from '../components/DetailImage';

const DetailProduct: React.FC = () => {
  const { id } = useParams();
  const filteredProducts = products.filter((product) => Number(product?.id) === Number(id))[0];
  
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
                </div>
            </div>
        </div>
    </section>
  );
};

export default DetailProduct;