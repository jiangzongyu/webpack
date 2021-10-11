const { SyncHook } = require('tapable')

class TestOrderWebpackPlugin {
    constructor(options) {
        this.options = options;
        // console.log(options)
        // console.log(path.join(__dirname, './dist'));
        // fsReadFileAsync()
    }

    apply(compiler) {
        compiler.hooks.emit.tapAsync('TestOrderWebpackPlugin', (compilation, callback) => {

          setTimeout(() => {
            console.log('jiang')
            callback()
          }, 2000)

            // callback()
        });
    }
}

module.exports = TestOrderWebpackPlugin