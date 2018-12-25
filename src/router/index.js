import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import BranchManagement from '@/views/BranchManagement'
import BranchForm from '@/components/BranchForm'
import TarifForm from '@/components/TarifForm'
import TarifList from '@/components/TarifList'
import VehicleForm from '@/components/VehicleForm'
import VehicleList from '@/components/VehicleList'
import StaffForm from '@/components/StaffForm'
import VendorStaffConfirmation from '@/components/VendorStaffConfirmation'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true,
        scopes: []
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {guest: true}
    },
    {
      path: '/branch-management',
      name: 'BranchManagement',
      component: BranchManagement,
      meta: {
        requiresAuth: true,
        scopes: []
      }
    },
    {
      path: '/branch-management/new',
      name: 'create.Branch',
      component: BranchForm,
      meta: {
        requiresAuth: true,
        scopes: []
      }
    },
    {
      path: '/tarif-management/new',
      name: 'create.Tarif',
      component: TarifForm,
      meta: {
        requiresAuth: true,
        scopes: []
      }
    },
    {
      path: '/tarif-management',
      name: 'read.Tarif',
      component: TarifList,
      meta: {
        requiresAuth: true,
        scopes: []
      }
    },
    {
      path: '/vehicle-management',
      name: 'read.Vehicle',
      component: VehicleList,
      meta: {
        requiresAuth: true,
        scopes: []
      }
    },
    {
      path: '/vehicle-management/new',
      name: 'create.Vehicle',
      component: VehicleForm,
      meta: {
        requiresAuth: true,
        scopes: []
      }
    },
    {
      path: '/staff-management/new',
      name: 'create.Staff',
      component: StaffForm,
      meta: {
        requiresAuth: true,
        scopes: ['vendor_owner']
      }
    },
    {
      path: '/staff/:vendorId/confirmation/:token',
      name: 'confirm.Staff',
      component: VendorStaffConfirmation,
      meta: {
        guest: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const accessToken = store.getters['auth/token']

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (accessToken == null) {
      store.commit('layout/setLayout', 'auth-layout')

      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    } else {
      const token = JSON.parse(atob(accessToken.split('.')[1]))
      const userScope = token.scopes

      store.commit('layout/setLayout', 'dashboard-layout')

      to.matched.some(record => {
        if (record.meta.scopes.length > 0) {
          record.meta.scopes.forEach(scope => {
            if (userScope.includes(scope)) {
              next()
            } else {
              store.commit('notif/warning', 'Anda tidak boleh mengakses halaman tersebut')
              next({name: 'HelloWorld'})
            }
          })
        } else {
          next()
        }
      })

      // if (to.matched.some(record => record.meta.vendor_owner)) {
      //   if (scopes.includes('vendor_owner')) {
      //     next()
      //   } else {
      //     store.commit('SET_ALERT', {
      //       type: 'warning',
      //       show: true,
      //       msg: 'Anda tidak memiliki hak akses untuk halaman tersebut'
      //     })
      //     next({ name: 'home' })
      //   }
      // } else {
      //   next()
      // }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (accessToken == null) {
      store.commit('layout/setLayout', 'auth-layout')

      next()
    } else {
      store.commit('layout/setLayout', 'dashboard-layout')
      next({ name: 'home' })
    }
  } else {
    next()
  }
})

export default router
