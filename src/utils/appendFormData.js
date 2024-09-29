const appendFormData = data => {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => {
        formData.append(`${key}[]`, item);
      });
      return;
    }

    if (value) {
      formData.append(key, value);
    }
  });

  return formData;
};

export default appendFormData;
