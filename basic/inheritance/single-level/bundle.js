const {
    FuseBox,
    WebIndexPlugin
} = require('fuse-box');

const fuse = FuseBox.init({
    homeDir: './',
    target: 'browser@es6',
    output: '../../../dist/single-level-inheritance/$name.js',
    plugins: [WebIndexPlugin()],
    cache: false
});

fuse.dev({
    root:'../../../dist/single-level-inheritance/'
})

fuse.bundle('app').instructions(' > index.ts').hmr().watch();
fuse.run();