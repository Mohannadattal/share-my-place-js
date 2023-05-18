const BING_API_KEY =
  'Au5Ue79FIOd-G1nbMQIQEjeT6h_VUteohg4nrHLIv2n1ZGXFdM9tINR5ct_jUclk';

export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `http://dev.virtualearth.net/REST/v1/Locations?address=${urlAddress}&key=${BING_API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch coordinates. Please try again');
  }

  const data = await response.json();

  if (data.error_message) {
    throw new Error(data.error_message);
  }

  const coordinates = data.results[0].geometry.location;
  return coordinates;
}
