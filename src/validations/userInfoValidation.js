import * as yup from 'yup';

export default yup.object().shape({
  fullName: yup.string(),
  last_name: yup.string().required(),
  first_name: yup.string().required(),
  middle_name: yup.string().required(),
  birthday: yup.string().required(),
  gender: yup.string().required(),
  city_id: yup.number().required(),
  driving_experience: yup.string().required(),
  email: yup.string().email().required(),
});
