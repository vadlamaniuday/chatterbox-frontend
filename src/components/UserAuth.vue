<script setup>
import { reactive } from "vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import router from "@/router";
const formData = reactive({
  email: "",
  username: "",
  password: "",
});

const handleSignup = () => {
  axios
    .post("http://127.0.0.1:8000/auth/users/", formData)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
};

const handleLogin = () => {
  const credentials = {
    username: formData.username,
    password: formData.password,
  };

  axios
    .post("http://127.0.0.1:8000/auth/token/login/", credentials)
    .then((response) => {
      sessionStorage.setItem("authToken", response.data.auth_token);
      sessionStorage.setItem("username", formData.username);
      router.push("/chats");
    })
    .catch((error) => console.error(error));
};
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-center border-4 border-slate-700 rounded-full text-3xl p-2">
      Welcome to Chatterbox
    </h1>

    <div class="flex flex-col items-center justify-center min-h-screen">
      <Tabs default-value="signup" class="w-[400px]">
        <TabsList>
          <TabsTrigger value="signup"> Sign up </TabsTrigger>
          <TabsTrigger value="login"> Log In </TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <div class="grid w-full max-w-sm items-center gap-1.5 mb-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              v-model="formData.email"
            />
          </div>
          <div class="grid w-full max-w-sm items-center gap-1.5 mb-2">
            <Label for="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              v-model="formData.username"
            />
          </div>
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <Label for="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              v-model="formData.password"
            />
          </div>

          <div>
            <Button class="w-full mt-4 item-center" @click="handleSignup"
              >Signup</Button
            >
          </div>
        </TabsContent>
        <TabsContent value="login">
          <div class="grid w-full max-w-sm items-center gap-1.5 mb-2">
            <Label for="username">Username</Label>
            <Input
              id="username"
              type="username"
              placeholder="Username"
              v-model="formData.username"
            />
          </div>
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <Label for="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              v-model="formData.password"
            />
          </div>
          <div>
            <Button class="w-full mt-4 item-center" @click="handleLogin"
              >Login</Button
            >
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<style scoped></style>
