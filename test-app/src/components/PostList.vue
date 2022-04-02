<template>
  
  <div class="post-list" v-if="posts.length > 0">
    <h3 class="post-list-title">Posts list</h3>
    <transition-group name="user-list">
     <post-item 
     class="post" 
     v-for="post in posts" 
     :key="post.id" 
     :post="post"
     @remove="$emit('remove', post)"
     />
     </transition-group>
  </div>
  <h2 v-else>The list is empty</h2>
 
</template>

<script>
// import PostItem from '@/components/PostItem.vue'
import PostItem from './PostItem.vue'
export default {
  components: {
    PostItem,
  },
props: {
  
  posts: {
    type: Array,
    required: true,
  }
}
}
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 1s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.user-list-move {
  transition: transform 0.8s ease;
}
</style>


