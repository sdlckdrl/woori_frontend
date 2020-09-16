
module.exports = {
  lintOnSave : false,
  outputDir: 'D:\\project\\woori\\backend\\public',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
}

// //개발용
// module.exports = {
//   devServer: {
//     proxy: { // proxyTable 설정
//       '/api': {
//         target: 'http://localhost:3000/api',
//         changeOrigin: true,
//         pathRewrite: { "^/api": '' }
//       }
//     }
//   }
// }
