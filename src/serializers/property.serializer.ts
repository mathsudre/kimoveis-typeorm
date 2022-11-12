import * as yup from 'yup';

const zipCode = /^\d{8}/;
const states = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MS',
  'MT',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

export const addressSerializer = yup.object().shape({
  district: yup.string().required().trim(),
  zipCode: yup
    .string()
    .required()
    .matches(zipCode, 'Only numbers in this field')
    .length(8, 'Must be exactly 8 digits')
    .trim(),
  number: yup.string().required(),
  city: yup.string().required().trim(),
  state: yup
    .string()
    .required()
    .trim()
    .oneOf(states)
    .length(2, 'Must be exactly 2 digits'),
});
