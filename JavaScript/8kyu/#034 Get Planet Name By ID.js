const getPlanetName = id => {
  let planets = [ 'Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptunes' ];
  return planets[id-1];
}