import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required(),
  inn: yup.number().required(),
  ogrn: yup.number().required(),
  //  .matches('/^(1\\d{12}|5\\d{12}|3\\d{14})$/', 'неверный формат'),
  bank_bik: yup.number().required(),
  bank_acnt: yup.number().required(),
});
