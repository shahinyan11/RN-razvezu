import * as yup from 'yup';

export default yup.object().shape({
  amount: yup.number().required(),
});
