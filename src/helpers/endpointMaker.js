const endpointMaker = data => {
  const {method, url} = data;

  return {
    endpoint: `${method}_${url}`,
    url: url,
  };
};

export default endpointMaker;
