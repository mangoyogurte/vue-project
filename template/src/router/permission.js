import router from './router'

// 不重定向白名单
const whiteList = ['/','/index','/login','/account/index','/classical/usdt','/classical/btc','/classical/eth','/flash','/account/index','/account/about','/account/help','/account/feedback','/c2c/trade','/kline','/invite','/download','/register'];
router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem('access_token')) {
    if (to.path === '/login') {
      next()
    } else {
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login') // 否则全部重定向到登录页
    }
  }
})

router.afterEach(() => {
})
