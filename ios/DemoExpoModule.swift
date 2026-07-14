import ExpoModulesCore

public class DemoExpoModule: Module {
  public func definition() -> ModuleDefinition {
    Name("DemoExpo")

    Class(DemoExpoModuleSharedObject.self) {
      Constructor { () -> DemoExpoModuleSharedObject in
        return DemoExpoModuleSharedObject()
      }

      Property("count") { (ref: DemoExpoModuleSharedObject) -> Int in
        return ref.count
      }
      .set { (ref: DemoExpoModuleSharedObject, count: Int) in
        ref.count = count
      }
    }
  }
}
