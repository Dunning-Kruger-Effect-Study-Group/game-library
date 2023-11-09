import { ICompany } from '@game-library/types';
import { FC } from 'react';

export const CompanyCard: FC<{ companyData: ICompany }> = ({ companyData }) => {
  return (
    <figure className="flex flex-col m-2 border-[3px] border-Baby_Blue items-center bg-Midnight_Blue text-Baby_Blue">
      <div className="absolute self-end bg-Dark_Blue border-b-[3px] border-l-[3px] p-1">
        
          {new Date(companyData.founded).getFullYear()}
      </div>
      <img className="h-full w-full" src={companyData.logo} alt={companyData.name} />
      <figcaption className="text-center">{companyData.name}</figcaption>
    </figure>
  );
};
