import { registerWebModule, NativeModule } from 'expo';

class DemoExpoModule extends NativeModule<{}> {}

export default registerWebModule(DemoExpoModule, 'DemoExpoModule');
