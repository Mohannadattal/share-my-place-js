const BING_API_KEY = 'Au5Ue79FIOd-G1nbMQIQEjeT6h_VUteohg4nrHLIv2n1ZGXFdM9tINR5ct_jUclk';

export async function getCoordsFromAddress(address) {
  const urlAddress = encodeURI(address);
  const response = await fetch(
    `https://dev.virtualearth.net/REST/v1/Locations?addressLine=${urlAddress}&key=${BING_API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch coordinates. Please try again!');
  }

  const data = await response.json();

  if (data.errorDetails) {
    throw new Error(data.errorDetails[0]);
  }

  const resourceSets = data.resourceSets;
  if (resourceSets.length === 0) {
    throw new Error('Coordinates not found.');
  }

  const resources = resourceSets[0].resources;
  if (resources.length === 0) {
    throw new Error('Coordinates not found.');
  }

  const coordinates = resources[0].point.coordinates;
  return {
    latitude: coordinates[0],
    longitude: coordinates[1]
  };
}
