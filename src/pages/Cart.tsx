import React, { useEffect, useState } from 'react';
import ProductProps from '../models/ProductProps';
import BackButton from '../components/BackButton';

interface ProductItem extends ProductProps {
    count: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);
//   const [checkedItems, setCheckedItems] = useState<number[]>([]);
//   const [loading, setLoading] = useState(false);

//   const handleCheck = (item_id: number) => {
//     const isIncluded = checkedItems?.includes(item_id);
//     if (isIncluded) {
//         const newCheckedData = checkedItems?.splice(checkedItems?.indexOf(item_id), 1);
//     }
//   };

  const handleCounter = (id: number, isPlus: boolean) => {
    if (isPlus) {
        cartItems.map(item => {
            if (item?.id === id) {
                const newData = {
                    ...item,
                    count: item?.count + 1,
                };
                const indexOf = cartItems?.indexOf(item);
                cartItems.splice(indexOf, 1);
                cartItems.unshift(newData);
            }
        });
    } else {
        cartItems.map(item => {
            if (item?.id === id) {
                const newData = {
                    ...item,
                    count: item?.count - 1,
                };
                const indexOf = cartItems?.indexOf(item);
                cartItems.splice(indexOf, 1);
                cartItems.unshift(newData);
            }
        });
    }
    
    localStorage.setItem('cart_item', JSON.stringify(cartItems));
    const cart_item = localStorage.getItem('cart_item');
    typeof (cart_item) === 'string' && setCartItems(JSON.parse(cart_item));
  };

  useEffect(() => {
    const cart_item = localStorage.getItem('cart_item');
    typeof (cart_item) === 'string' && setCartItems(JSON.parse(cart_item));
  }, []);
  return (
    <main>
        <section className='min-h-screen md:p-20 p-5'>
            <div>
                <BackButton to='/#products' />
            </div>
            {cartItems?.map((item, index) => {
                return (
                    <div key={index} className='flex gap-4 mb-6'>
                        <div className='pt-[2px]'>
                            <input type="checkbox" className='w-6 aspect-square cursor-pointer' name="" id="" />
                        </div>
                        <div className="w-36 aspect-square rounded overflow-hidden">
                            <img src={item?.thumbnail} className='w-full h-full object-cover' alt="" />
                        </div>
                        <div>
                            <h4 className='font-semibold text-lg'>{item?.name}</h4>
                            <p className="mt-1 text-rose-500 font-semibold">
                                Rp. {item?.price?.toLocaleString('id-ID')}
                            </p>
                            <div className='mt-5 flex'>
                                <button
                                    onClick={() => handleCounter(item?.id, false)}
                                    className='border rounded p-1'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                                    </svg>
                                </button>
                                <div className="px-1 w-16 grid place-items-center">
                                    <span>{item?.count}</span>
                                </div>
                                <button
                                    onClick={() => handleCounter(item?.id, true)}
                                    className='border rounded p-1'
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-slate-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    </main>
  );
};

export default Cart;