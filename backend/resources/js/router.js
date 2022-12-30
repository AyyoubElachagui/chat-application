import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import RegisterComponent from "./components/RegisterComponent.vue";
// // lazy-loaded
const ProfileComponent = () => import("./components/ProfileComponent.vue")
// const BoardAdmin = () => import("./components/BoardAdmin.vue")
// const BoardModerator = () => import("./components/BoardModerator.vue")
// const BoardUser = () => import("./components/BoardUser.vue")


const loggedIn = localStorage.getItem('user');

const routes = [
  {
    path: "/",
    name: "home",
    component: !loggedIn ? LoginComponent : HomeComponent,
  },
  {
    path: "/home",
    component: HomeComponent,
  },
  {
    path: "/login",
    component: LoginComponent,
  },
  {
    path: "/register",
    component: RegisterComponent,
  },
  {
    path: "/profile",
    name: "profile",
    // lazy-loaded
    component: ProfileComponent,
  },
//   {
//     path: "/admin",
//     name: "admin",
//     // lazy-loaded
//     component: BoardAdmin,
//   },
//   {
//     path: "/mod",
//     name: "moderator",
//     // lazy-loaded
//     component: BoardModerator,
//   },
//   {
//     path: "/user",
//     name: "user",
//     // lazy-loaded
//     component: BoardUser,
//   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;