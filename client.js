// // This file contains the boilerplate to execute your React app.
// // If you want to modify your application's content, start in "index.js"

// import {ReactInstance} from 'react-360-web';

// function init(bundle, parent, options = {}) {
//   const r360 = new ReactInstance(bundle, parent, {
//     // Add custom options here
//     fullScreen: true,
//     ...options,
//   });

//   // Render your app content to the default cylinder surface
//   r360.renderToSurface(
//     r360.createRoot('Hello360', { /* initial props */ }),
//     r360.getDefaultSurface()
//   );

//   // Load the initial environment
//   r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
//   const player = r360.compositor.createVideoPlayer('myplayer');
// // Set the video to be played, and its format
//   player.setSource(r360.getAssetURL('SkyDive.mp4'), '2D');
 
// }

// window.React360 = {init};

// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
import {Location} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  // Create a location two meters in front of the user, and one meter down
  const location = new Location([0, 0, -20]);
  // const player = r360.compositor.createVideoPlayer('myplayer');
  // Render to this location
  r360.renderToLocation(
    r360.createRoot('Hello360'),
    location,
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('scenes/beach.jpg'));
}

window.React360 = {init};