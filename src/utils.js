const fetcher = async (url) => {
  const response = await fetch(url);
  const json = await response.json();

  if (!response.ok) {
    throw response;
  }

  return json;
};

export default fetcher;
