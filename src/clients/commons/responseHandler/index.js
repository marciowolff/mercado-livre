
const responseHandler = response => {
  if (response.status >= 300) {
    const err = response.data || {};
    err.status = response.status;
    return err;
  }

  return response.data;
};

export default responseHandler
