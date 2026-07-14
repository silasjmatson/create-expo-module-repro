// Reexport the native module. On web, it will be resolved to DemoExpoModule.web.ts
// and on native platforms to DemoExpoModule.ts
export { default } from './DemoExpoModule';
export * from './DemoExpo.types';
export * from './DemoExpoModuleSharedObject';
