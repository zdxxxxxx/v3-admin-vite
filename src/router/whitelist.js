/** 免登录白名单（匹配路由 path） */
const whiteListByPath = ["/login"]
/** 免登录白名单（匹配路由 name） */
const whiteListByName = []
/** 判断是否在白名单 */
export function isWhiteList(to) {
  // path 和 name 任意一个匹配上即可
  return whiteListByPath.includes(to.path) || whiteListByName.includes(to.name)
}
