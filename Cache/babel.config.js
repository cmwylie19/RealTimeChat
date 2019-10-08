// // babel.config.js
// module.exports = {

//   plugins: ["@babel/transform-arrow-functions"], 
//     presets: [
//       [

//         '@babel/preset-env',
//         {
//           targets: {
//             node: 'current',
//           },
//         },
//       ],
//     ],
//   };

module.exports = {
  presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
  ]
}