const {
    FuseBox,
    WebIndexPlugin
} = require("fuse-box");
const fuse = FuseBox.init({
    homeDir: "./",
    target: "browser@es6",
    output: "../../dist/scope-with-export/$name.js",
    plugins: [WebIndexPlugin()],
    cache: false
});
fuse.dev({
    root: "../../dist/scope-with-export/"
}); // launch http server
fuse
    .bundle("app")
    .instructions(" > index.ts")
    .hmr()
    .watch();
fuse.run();