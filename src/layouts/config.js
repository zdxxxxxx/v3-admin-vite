import { getLayoutsConfig } from "@@/utils/cache/local-storage"
/** 默认配置 */
const DEFAULT_CONFIG = {
  layoutMode: "left",
  showSettings: true,
  showTagsView: true,
  fixedHeader: true,
  showFooter: true,
  showLogo: true,
  showNotify: true,
  showThemeSwitch: true,
  showScreenfull: true,
  showSearchMenu: true,
  cacheTagsView: false,
  showWatermark: true,
  showGreyMode: false,
  showColorWeakness: false
}
/** 项目配置 */
export const layoutsConfig = Object.assign(Object.assign({}, DEFAULT_CONFIG), getLayoutsConfig())
