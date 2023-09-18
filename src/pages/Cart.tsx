import React, { useEffect, useState } from 'react';
import ProductProps from '../models/ProductProps';
import BackButton from '../components/BackButton';
import Swal from 'sweetalert2';

interface ProductItem extends ProductProps {
    count: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<ProductItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  const handleCheck = (item_id: number) => {
    const isIncluded = checkedItems?.includes(item_id);
    if (isIncluded) {
        checkedItems?.splice(checkedItems?.indexOf(item_id), 1);
        let total = 0;
        const secondCartItems = cartItems;
        secondCartItems?.map(item => {
            for (let i = 0; i <= checkedItems?.length; i++) {
                if (item.id === checkedItems[i]) {
                    total += (item?.count * item?.price);
                }
            }
        });
        setTotalAmount(total);
    } else {
        checkedItems?.push(item_id);
        let total = 0;
        const secondCartItems = cartItems;
        secondCartItems?.map(item => {
            for (let i = 0; i <= checkedItems?.length; i++) {
                if (item.id === checkedItems[i]) {
                    total += (item?.count * item?.price);
                }
            }
        });
        setTotalAmount(total);
    }
  };

  console.log(totalAmount);

  const handleCounter = (id: number, isPlus: boolean) => {
    if (isPlus) {
        cartItems.map(item => {
            if (item?.id === id) {
                const newData = {
                    ...item,
                    count: item?.count >= item?.stock ? item?.count : item?.count + 1,
                };
                const indexOf = cartItems?.indexOf(item);
                cartItems.splice(indexOf, 1);
                cartItems.unshift(newData);
                handleCheck(item?.id);
            }
        });
    } else {
        cartItems.map(item => {
            if (item?.id === id) {
                const newData = {
                    ...item,
                    count: item?.count <= 1 ? item?.count : item?.count - 1,
                };
                const indexOf = cartItems?.indexOf(item);
                cartItems.splice(indexOf, 1);
                cartItems.unshift(newData);
                handleCheck(item?.id);
            }
        });
    }
    
    localStorage.setItem('cart_item', JSON.stringify(cartItems));
    const cart_item = localStorage.getItem('cart_item');
    typeof (cart_item) === 'string' && setCartItems(JSON.parse(cart_item));
  };

  const deleteItem = (id: number) => {
    cartItems.map(item => {
        if (item?.id === id) {
            const indexOf = cartItems?.indexOf(item);
            cartItems.splice(indexOf, 1);
        }
    });
    localStorage.setItem('cart_item', JSON.stringify(cartItems));
    const cart_item = localStorage.getItem('cart_item');
    typeof (cart_item) === 'string' && setCartItems(JSON.parse(cart_item));
  };

  const openModalConfirmation = (id: number) => {
    Swal.fire({
        icon: 'question',
        text: 'Are you sure you want to delete this item?',
        showCancelButton: true,
        confirmButtonText: 'Sure',
      }).then((result) => {
        if (result.isConfirmed) {
            deleteItem(id);
            Swal.fire('Deleted!', '', 'success');
        } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info');
        }
      });
  };

  useEffect(() => {
    const cart_item = localStorage.getItem('cart_item');
    typeof (cart_item) === 'string' && setCartItems(JSON.parse(cart_item));
  }, []);

  const renderEmpty = () => {
    return (
        <section className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] grid place-items-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={.7} stroke="currentColor" className="w-36 h-36 text-rose-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>
            <div className="mt-5">
                <p className="text-3xl font-semibold text-rose-500">Cart is Empty</p>
            </div>
        </section>
    );
  };

  return (
    <main>
        {cartItems?.length === 0 && renderEmpty()}
        <section className='min-h-screen md:p-20 p-5 pb-36'>
            <div>
                <BackButton to='/#products' />
            </div>
            {cartItems?.map((item, index) => {
                return (
                    <div key={index} className='flex gap-4 mb-6'>
                        <div>
                            <div className='pt-[2px] mb-2'>
                                <input type="checkbox" className='w-6 aspect-square cursor-pointer' onChange={() => handleCheck(item?.id)} name="" id="" />
                            </div>
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
                            <div className='mt-5'>
                                <button onClick={() => openModalConfirmation(item?.id)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-red-300 text-red-500">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
        <div className="fixed bottom-0 w-full py-4 px-10">
            <div className="flex justify-end items-center gap-3">
                <h5 className="font-semibold text-lg">Total: </h5>
                <p className='text-lg'>Rp. {totalAmount?.toLocaleString('id-ID')}</p>
            </div>
        </div>
    </main>
  );
};

export default Cart;