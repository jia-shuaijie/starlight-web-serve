<template>
  <div class="layout">
    <el-container>
      <el-menu
        :collapse="openMenu"
        background-color="#9cb1cf"
        class="menu"
        default-active="2"
        :router="true"
        @close="handleClose"
        @open="handleOpen"
      >
        <el-menu-item index="4">
          <el-avatar class="avatar" size="small" :src="pkq" />
          <template #title>星光后台管理系统</template>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <Location />
            </el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="/home" route="/home">home</el-menu-item>
          <el-menu-item index="/about" route="/about">about</el-menu-item>
        </el-sub-menu>
      </el-menu>

      <el-container>
        <el-header class="header">
          <div @click="changeOpenMenu">
            <el-icon size="5vh" v-if="!openMenu">
              <Fold />
            </el-icon>
            <el-icon size="5vh" v-if="openMenu">
              <Expand />
            </el-icon>
          </div>
        </el-header>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import pkq from '@/assets/image/pkq.jpg'

const openMenu = ref(false)

const changeOpenMenu = () => {
  openMenu.value = !openMenu.value
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.menu {
  height: 100vh;
}

.avatar {
  text-align: center;
}

.header {
  color: #eaedf1;
  background-color: #9cb1cf;
}

.main {
  background-color: #f1f1f1;
  margin-left: 0.2vw;
  margin-top: 0.5vh;
}
.layout{
  width: 100vw;
  height: 100vh;
}
</style>
