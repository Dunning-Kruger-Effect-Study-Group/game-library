import { ICompany } from '@game-library/types';
import { FC, useState } from 'react';

export const CompanyForm: FC = () => {
  const [name, setName] = useState('');
  const [founded, setFounded] = useState('');
  const [defunct, setDefunct] = useState('');
  const [logo, setLogo] = useState('');
  //   const a: ICompany = { founded: '', name: '', defunct: '', logo: '' };

  // return (
  //     <div className='grid grid-cols-5'>
  //         <div className='bg-White h-40 col-span-1'></div>
  //         <div className='bg-Black h-40 col-span-4'></div>
  //         <div className='bg-White h-40'></div>
  //     </div>
  // )

  return (
    <div className="flex flex-col p-2 h-full w-full gap-1">
      <div className="flex">
        <div className="w-[15%] ">Name:</div>
        <input
          className=" text-Black w-[85%]"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </div>
      <div className="flex">
        <div className="w-[15%]">Founded:</div>
        <input
          className="w-[85%] text-Black"
          type="date"
          onChange={(e) => {
            setFounded(e.target.value);
          }}
          value={founded}
        />
      </div>
      <div className="flex">
        <div className="w-[15%]">defunct:</div>
        <input
          className="w-[85%] text-Black"
          type="date"
          pattern="dd/mm/yyyy"
          onChange={(e) => {
            setDefunct(e.target.value);
          }}
          value={defunct}
        />
      </div>
      <div className="flex">
        <div className="w-[15%]">Logo:</div>
        <input
          className="w-[85%] text-Black"
          type="text"
          onChange={(e) => {
            setLogo(e.target.value);
          }}
          value={logo}
        />
      </div>
      <div className="flex content-center justify-center">
        <figure>
          <img
            className=" max-w-[400px] max-h-[400px]"
            src={logo}
            alt=""
          />
          <figcaption>Preview</figcaption>
        </figure>
      </div>
    </div>
  );
};
