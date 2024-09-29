import * as yup from 'yup';

export default yup.object().shape({
  brand: yup.string().required(),
  year: yup
    .string()
    .matches(/^[0-9]+$/)
    .min(4)
    .max(4)
    .required(),
  mileage: yup.string().required(),
  engine_size: yup.string().required(),
  height_m: yup.number().required(),
  depth_m: yup.number().required(),
  width_m: yup.number().required(),
  weight_kg: yup.number().required(),
});
