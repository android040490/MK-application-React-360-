import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  // Create three roots: two flat panels on the left and the right, and a Location
  // to mount rendered models in 3D space
 
  const rightPanel = new Surface(800, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(0.3, 0);
  
  r360.renderToLocation(
    r360.createRoot('CharacterModel'),
    new Location([-20, -2, -10]),
  );
 
  r360.renderToSurface(
    r360.createRoot('ListOfCharacters'),
    rightPanel,
  );
  r360.compositor.setBackground('./static_assets/scenes/360_world.jpg');
}

window.React360 = {init};