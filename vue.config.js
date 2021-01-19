module.exports = {
    configureWebpack: {

    //   devServer: {
    //     proxy: { 
    //       '/api':{
    //             target:'http://eznotes-api',
    //             changeOrigin:true,
    //       } 
    //     },
    //     headers: { "Access-Control-Allow-Origin": "http://localhost:8080",
    //     "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PUT,DELETE",
    //     "Access-Control-Expose-Headers": "Set-Cookie",
    //     "Access-Control-Allow-Credentials": "true",
    //     "Access-Control-Allow-Headers": 
    //     "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"

    //           },
    //   }
    // }

    devServer: {
      proxy: { 
        '/api/*':{
              target:'http://eznotes-api',
              changeOrigin:true,
              pathRewrite: { '/api': ""}
        } 
      },
      headers: { "Access-Control-Allow-Origin": "http://localhost:8080",
      "Access-Control-Allow-Methods": "OPTIONS,GET,POST,PUT,DELETE",
      "Access-Control-Expose-Headers": "Set-Cookie",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": 
      "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"

            },
    }

  }

  

  };

