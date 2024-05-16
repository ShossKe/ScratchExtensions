This is an extension of Scratch. Install node.js, download the Scratch Foundation's scratch-gui-develop as a zip file, unzip the zip file, run `npm install` in that folder, and run `npm start`. Next, access localhost:8601. Scratch will appear.
Next, create a folder called scratch3_shs in scratch-gui-develop\node_modules\scratch-vm\src\extensions, put index.js in it, and add it to scratch-gui-develop\src\lib\libraries\extensions. Add a new ` { in \index.jsx
         name: 'shs',
         extensionId: 'shs'
     },`
It is written as By the way, it's from lines 321 to 324.
Next, on line 27 of scratch-gui-develop\node_modules\scratch-vm\src\extension-support\extension-manager.js
` shs: () => require('../extensions/scratch3_shs'),`
It is written as Now let's access localhost:8601.
Press the extension button and scroll down and you should see "shs". Congratulations! It's done.
