import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money,setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>grandpa money: {money}</p>
            <button onClick={() => setMoney(money+1000)}>send 1000 bdt</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Samia</Cousin>
            </section>
        </div>
    );
};

export default Uncle;