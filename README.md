# vue-demo
vue学习过程：
- 1.在vue-cli项目中使用bootstrap
    - 1.1安装插件
    ```
    npm install jquery --save
    npm install bootstrap --save
    npm install popper.js --save
    ```
    - 1.2根目录中添加文件vue.config.js，然后写入下面配置
    ```
    const webpack = require('webpack')
    module.exports = {
      configureWebpack: {
        plugins: [
          new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
          })
        ]
      }
    }
    ```
    - 1.3main.js中添加
    ```
    import $ from 'jquery'
    import 'bootstrap'
    ```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

