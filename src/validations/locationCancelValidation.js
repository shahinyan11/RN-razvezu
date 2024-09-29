import * as yup from 'yup';

const locationCancelValidation = yup.object().shape({
  location_id: yup.number().required(),
  reason_id: yup.number().required(),
});

export default locationCancelValidation;
