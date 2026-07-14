import { NativeModule, requireNativeModule } from 'expo';

import type { DemoExpoModuleSharedObject } from './DemoExpoModuleSharedObject';

declare class DemoExpoModule extends NativeModule<{}> {
  DemoExpoModuleSharedObject: typeof DemoExpoModuleSharedObject;
}

export default requireNativeModule<DemoExpoModule>('DemoExpo');
