import { installElementPlusIcons } from "./element-plus-icons"
import { installPermissionDirective } from "./permission-directive"
import { installSvgIcon } from "./svg-icon"
import { installVxeTable } from "./vxe-table"

export function installPlugins(app) {
  installElementPlusIcons(app)
  installPermissionDirective(app)
  installSvgIcon(app)
  installVxeTable(app)
}
