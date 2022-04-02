<template>
  <div class="navbar">
      <div @click="$router.push('/')"> VUE3</div>
          <div class="nav-btns">
              <my-button @click="$router.push('/posts')">Our posts</my-button>
              <my-button @click="$router.push('/about')">About me</my-button>
          </div>
      
       <!-- <router-link to="/posts">Our Posts</router-link>
  <router-link to="/about">About me</router-link> -->
  </div>
</template>

<script>
import MyButton from './MyButton.vue'
export default {
  name: "nav-bar",
  components: { MyButton },

// }
}
</script>

<style scoped>
.navbar {
height: 50px;
box-shadow: 2px 2px 4px grey;
background-color: grey;
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
}
.nav-btns {
  margin-left: auto;
}
</style>