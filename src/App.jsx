import { useState } from 'react';
import './App.css';
import { twMerge } from 'tailwind-merge';

const Cards = [
  {
    name: 'Basic',
    baseAmount: '19.00',
    NewAmount: '199.00',
    storage: '500 GB',
    No: '2',
    send: '2',
    padding: 'p-8',
    color: 'bg-white',
    bacColor: 'text-coolGray-600',
    texColor: 'text-white',
    buttonColor: 'bg-gradient-to-r from-indigo-300 to-indigo-300 to-violet-50 to-violet-50',
    textHov: 'hover:text-lime-400',
    bordercolor: 'hover:border-coolGray-600'
  },
  {
    name: 'Professional',
    baseAmount: '24.99',
    NewAmount: '249.99',
    storage: '1 TB',
    No: '5',
    send: '10',
    padding: 'py-16',
    color: 'bg-gradient-to-r from-indigo-300 to-indigo-500',
    bacColor: 'text-white',
    texColor: 'text-indigo-300',
    buttonColor: 'bg-gradient-to-r from-violet-50 to-violet-50 to-violet-50 to-indigo-300 to-indigo-300 to-indigo-500',
    textHov: 'hover:text-violet-50',
    bordercolor: 'hover:border-violet-50'  
},

  {
    name: 'Master',
    baseAmount: '39.99',
    NewAmount: '399.99',
    storage: '2 TB',
    No: '10',
    send: '20',
    padding: 'p-8',
    color: 'bg-white',
    bacColor: 'text-coolGray-600',
    texColor: 'text-white',
    buttonColor: 'bg-gradient-to-r from-indigo-300 to-indigo-300 to-violet-50 to-violet-50',
    textHov: 'hover:text-lime-400',
    bordercolor: 'hover:border-coolGray-600',

  },
];

function App() {
  const [count, setCount] = useState(false);

  return (
    <main className="w-full h-screen bg-violet-50 flex justify-center items-center font-Mont font-700 sm:column flex-wrap">
      <div className="text-center">
      <h2 className='text-center bold text-center text-3xl py-8  '>Our Pricing</h2>

<div className="flex text-lg pb-8 gap-6 w-full justify-center">
  Anually
  <label for="check" className='bg-indigo-300 w-20 h-10 rounded-full relative'>
  <input type="checkbox" id="check" class="sr-only peer" value={count} onChange={(e) => setCount(e.target.checked)}/>
    <span className='w-2/5 h-4/5 bg-white absolute rounded-full
    left-1 top-1 peer-checked:bg-violet-50 peer-checked:left-11
    transition-all durarion-500'></span>

  </label>

   Monthly
</div>

<div className="text-lg flex w-full items-center justify-center">
    {Cards.map(card => (
      <div className={twMerge("bg-white center w-96 p-6 rounded-xl",card.padding,card.color,card.bacColor)} key={card.name}>
        <h2 className='text-md opacity-70'>{card.name}</h2>
        <div className="amp">
          <p></p>
        </div>
        <p className='text-md flex justify-center items-center pt-4'>
          $ <span className='text-6xl bold '>{count ? card.baseAmount : card.NewAmount}</span>

        </p>
        <ul className='py-8 opacity-50'>
          <li className='py-4  border-t-2  border-coolGray-400 w-full'>{card.storage} storage</li>
          <li className='py-4 border-t-2 border-coolGray-400 '>{card.No} Users Allowed</li>
          <li className='py-4  border-t-2 border-coolGray-400  border-b-2'>Send up to {card.send} GB</li>
        </ul>
        <button className={twMerge('w-full transition rounded-xl text-white bg-left hover:bg-right hover:border-2 uppercase bold h-12 text-sm bold bg-blue-100 mt-6 mb',card.buttonColor,card.texColor,card.butHover,card.textHov,card.bordercolor)} style={{backgroundSize:'300%'}}>Learn More</button>
      </div>
    ))}

</div>
      </div>
    </main>
  );
}

export default App;
