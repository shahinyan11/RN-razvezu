const handleFormikResponseError = (response, formik) => {
  const {data, status} = response;

  if (status === 422) {
    formik.setErrors(data.errors);
  }
};

export default handleFormikResponseError;
