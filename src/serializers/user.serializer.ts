import * as yup from 'yup';

const userCreateSerializer = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required()
    .min(1, 'Your name must be longer than 6 character'),
  email: yup.string().email().required(),
  password: yup
    .string()
    .trim()
    .required()
    .min(6, 'Your password must be longer than 6 character'),
  isAdm: yup.boolean().required(),
});

const userUpdateSerializer = yup.object().shape({
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  password: yup
    .string()
    .trim()
    .notRequired()
    .min(6, 'Your password must be longer than 6 character'),
});

const userWithOutPasswordSerializer = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  isAdm: yup.boolean().notRequired(),
  isActive: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});

const getUsersSerializer = yup.array(userWithOutPasswordSerializer);

export { userCreateSerializer, getUsersSerializer, userUpdateSerializer };
