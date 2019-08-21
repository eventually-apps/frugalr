// import Vue from 'vue';
// import upperFirst from 'lodash.upperfirst';
// import camelCase from 'lodash.camelcase';

// // automatically register components ending in .Vue that live in the components/ directory.
// const requireComponent: __WebpackModuleApi.RequireContext = require.context(
//   '@/components',
//   true,
//   /\.vue$/,
// );

// requireComponent.keys().forEach((fileName) => {
//   const componentConfig: any = requireComponent(fileName);

//   const componentName: string = upperFirst(
//     camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')),
//   );

//   Vue.component(componentName, componentConfig.default || componentConfig);
// });
