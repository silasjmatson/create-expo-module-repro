package expo.modules.demoexpo

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class DemoExpoModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("DemoExpo")

    Class(DemoExpoModuleSharedObject::class) {
      Constructor {
        val instance = DemoExpoModuleSharedObject(appContext)
        return@Constructor instance
      }

      Property("count")
        .get { ref: DemoExpoModuleSharedObject ->
          ref.count
        }
        .set { ref: DemoExpoModuleSharedObject, count: Int ->
          ref.count = count
        }
    }
  }
}
