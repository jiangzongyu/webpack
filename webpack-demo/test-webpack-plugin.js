const fs = require('fs');
const path = require('path');

class TestWebpackPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {

        // compiler.hooks.emit.tapAsync('MyWebpackPlugin', (compilation, callback) => {

        //     Object.keys(compilation.assets).forEach((data)=> {

        //         let content = compilation.assets[data].source() 

        //         content = content.replaceAll('webpack', 'jiangzongyu')

        //         compilation.assets[data] = {
        //             source(){
        //                 return content
        //             },
        //             size(){
        //                 return content.length
        //             }
        //         }
        //     })
        //     callback()
        // });
        compiler.hooks.compile.tap('TestWebpackPlugin', (compilation) => {

            console.log('zong')

            // callback()
        });
    }
}

module.exports = TestWebpackPlugin