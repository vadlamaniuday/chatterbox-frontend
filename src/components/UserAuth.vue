<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-center border-4 border-slate-700 rounded-full text-3xl p-2">
      Welcome to Chatterbox
    </h1>

    <div class="flex flex-col items-center justify-center min-h-screen">
      <Tabs default-value="account" class="w-[400px]">
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
              v-model="email"
            />
          </div>
          <div class="grid w-full max-w-sm items-center gap-1.5 mb-2">
            <Label for="username">Username</Label>
            <Input
              id="username"
              type="text"
              placeholder="Username"
              v-model="username"
            />
          </div>
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <Label for="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
        </TabsContent>
        <TabsContent value="login">
          <div class="grid w-full max-w-sm items-center gap-1.5 mb-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email"
              v-model="email"
            />
          </div>
          <div class="grid w-full max-w-sm items-center gap-1.5">
            <Label for="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<style scoped></style>
