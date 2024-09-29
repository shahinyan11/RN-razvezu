import * as yup from 'yup';

const validationSignIn = yup.object().shape({
  phone: yup.object().shape({
    unMasked: yup.string().required(),
    masked: yup.string(),
  }),
});

export default validationSignIn;
