import React from 'react';
import ProductProps from '../models/ProductProps';
import { Link } from 'react-router-dom';

interface CardProps {
    item: ProductProps
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className='rounded overflow-hidden' key={item.id}>
        <Link to={`/product/${item.id}`}>
            <img src={item?.thumbnail} className='h-[15rem] object-cover w-full' alt="" />
        </Link>
        <div className="p-2">
            <Link to={`/product/${item.id}`}>
                <h4 className="font-semibold hover:underline-">{item?.name}</h4>
            </Link>
            <p className="text-slate-700">{item?.description.substr(0, 30)}...</p>
            <div className="grid grid-cols-3 mt-1">
                <div className='col-span-2'>
                    <h4 className="font-semibold text-lg">Rp. {item?.price?.toLocaleString('id-ID')}</h4>
                    <div className='w-10 h-1 bg-gradient-to-r from-rose-500 to-fuchsia-500'></div>
                </div>
                <div className='col-span-1 text-right'>
                    <p className='mt-1 text-rose-500 text-sm'>
                        <span>{item?.stock} pcs</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Card;