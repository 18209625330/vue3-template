import { createStore } from 'vuex'
import admin from './modules/admin';
import routes from './modules/routes';


export default createStore({
  modules:{
    admin,
    routes
  }
})


