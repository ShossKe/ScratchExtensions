This is an extension of Scratch. Install node.js, download the Scratch Foundation's scratch-gui-develop as a zip file, unzip the zip file, run `npm install` in that folder, and run `npm start`. Next, access `localhost:8601`. Scratch will appear.
Next, create a folder called scratch3_shs in scratch-gui-develop\node_modules\scratch-vm\src\extensions, put index.js in it, and add it to scratch-gui-develop\src\lib\libraries\extensions. Add a new 
` {
         name: 'shs',
         extensionId: 'shs'
     }`
It is written as By the way, it's from lines 321 to 324.
Next, on line 27 of scratch-gui-develop\node_modules\scratch-vm\src\extension-support\extension-manager.js
` shs: () => require('../extensions/scratch3_shs')`
It is written as Now let's access `localhost:8601`.
Press the extension button and scroll down and you should see "shs". Congratulations! It's done.    
日本語  
これはScratchの拡張機能です。 node.jsをインストールし、Scratch財団さんのscratch-gui-developをzipファイルとしてダウンロードし、zipファイルを解凍して、そのフォルダ内で`npm install`を実行し、`npm start`を実行します。 次に、`localhost:8601` にアクセスします。 スクラッチがでてきます。
つぎに、scratch-gui-develop\node_modules\scratch-vm\src\extensionsのなかにscratch3_shsというフォルダを作り、そのなかにindex.jsを置いて、scratch-gui-develop\src\lib\libraries\extensions\index.jsxのなかに新しく`{
        name: 'shs',
        extensionId: 'shs' 
    }`
と記述します。ちなみに321から324行目までです。
つぎに、scratch-gui-develop\node_modules\scratch-vm\src\extension-support\extension-manager.jsの27行目に
`    shs: () => require('../extensions/scratch3_shs')`
と記述します。これで`localhost:8601`にアクセスしてみましょう。
拡張機能のボタンを押して下にスクロールすると、"shs"があるはずです。おめでとう！できました。
