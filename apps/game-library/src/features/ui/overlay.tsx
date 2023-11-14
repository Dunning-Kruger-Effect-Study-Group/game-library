import { FC, useEffect, useState } from 'react';
import { CompanyForm } from '../form/companyForm';
import { useLocation } from 'react-router-dom';

export const Overlay: FC = () => {
  const asdw = useLocation();
//   const [location, setLocation] = useState('');
  useEffect(() => {
    console.log(asdw);
  }, [asdw]);
  return (
    <div className="absolute hidden flex flex-col items-center justify-center h-full w-full bg-Black bg-opacity-40 text-Baby_Blue">
      <div className="bg-Blue_Gray min-h-[50vh] min-w-[50vw]">
        <div className="flex items-center w-full h-8 bg-Dark_Blue">
          <div className="ml-2">name</div>
          <button className="ml-auto mr-2">X</button>
        </div>
        {/* {asdw.pathname.includes("platform") &&
            
        } */}
        <CompanyForm />
      </div>
    </div>
  );
};
