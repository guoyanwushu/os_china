import router from './router.js'
import store from './store'
router.beforeEach( (to, from, next) => {
  if (to.meta.needAuth && !store.state.uid) {
    next('/login')
  } else {
    next();
  }
})
export default router
