import { SharedObject, useReleasingSharedObject } from 'expo-modules-core';

import DemoExpoModule from './DemoExpoModule';

export declare class DemoExpoModuleSharedObject extends SharedObject {
  count: number;
}

/**
 * Creates a new DemoExpoModuleSharedObject instance.
 * You are responsible for releasing it from memory by calling `release()` when done.
 */
export function createDemoExpoModuleSharedObject(): DemoExpoModuleSharedObject {
  return new DemoExpoModule.DemoExpoModuleSharedObject();
}

/**
 * A hook that creates a DemoExpoModuleSharedObject instance and automatically
 * releases it when the component unmounts.
 */
export function useDemoExpoModuleSharedObject(): DemoExpoModuleSharedObject {
  return useReleasingSharedObject(() => new DemoExpoModule.DemoExpoModuleSharedObject(), []);
}
