import React, { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import products from '../dummies/products';
import Card from '../components/Card';
import FloatingMenu from '../components/FloatingMenu';

const HomePage: React.FC = () => {
  const [reload, setReload] = useState<boolean>(false);
  useEffect(() => {
    setReload(r => !r);
  }, []);
  return (
    <main>
        <FloatingMenu reload={reload} />
        <section>
            <Jumbotron
                title='MechaKey'
                description='providing affordable mechanical keyboards with above-standard quality.'
                linkTo='#products'
            />
        </section>
        <section id='products' className='min-h-screen md:px-20 px-5 py-20'>
            <div>
                <h2 className="md:text-4xl text-2xl font-semibold text-slate-800">All Mechanical Keyboard</h2>
                <div className="w-32 h-3 bg-gradient-to-r from-rose-500 to-fuchsia-500"></div>
            </div>
            <div className="mt-10 grid md:grid-cols-4 gap-5">
                {products?.map(product => {
                    return (
                        <Card key={product.id} item={product} />
                    );
                })}
            </div>
        </section>
    </main>
  );
};

export default HomePage;