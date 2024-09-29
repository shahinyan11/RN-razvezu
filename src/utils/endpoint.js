const endpoint = (method, route) => ({
  endpoint: `${method}_${route}`,
  url: route,
});

export default endpoint;
