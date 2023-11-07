import { Router } from 'express';
import { CreateCompany, UpdateCompany, CompanyList } from '../controller/company';
import { ICompany, ICompanyDoc } from '@game-library/types';

export const CompanyRouter: Router = Router();

CompanyRouter.post('', async (req, res) => {
  const company: ICompany = { ...req.body };
  res.json(await CreateCompany(company));
});

CompanyRouter.get('/list', async (req, res) => {
  res.status(200).json(await CompanyList());
});

CompanyRouter.put('', async (req, res) => {
  const company: ICompanyDoc = { ...req.body };
  res.json(await UpdateCompany(company));
});
