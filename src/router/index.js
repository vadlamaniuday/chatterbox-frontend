import Chat from "@/components/Chat.vue";
import UserAuth from "@/components/UserAuth.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/chats",
      name: "Chat",
      component: Chat,
    },

    {
      path: "/auth",
      name: "UserAuth",
      component: UserAuth,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (sessionStorage.getItem("authToken") !== null || to.path === "/auth") {
    next();
  } else {
    next("/auth");
  }
});

export default router;
