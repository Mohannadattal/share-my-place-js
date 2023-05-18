export class Map {
  constructor(coords) {
    // this.coordinates = coords;
    this.render(coords);
  }

  render(coordinates) {
    if (!Microsoft) {
      alert('Could not load maps library - please try again later!');
      return;
    }
    const map = new Microsoft.Maps.Map(document.getElementById('map'), {
      center: coordinates,
      zoom: 16,
    });

    const center = map.getCenter();

    const pin = new Microsoft.Maps.Pushpin(center, {
      position: coordinates,
      map: map,
      color: 'red',
    });

    map.entities.push(pin);
  }
}
