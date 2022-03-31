<template>
  
  <div class="post-list" v-if="posts.length > 0">
    <h3 class="post-list-title">Posts list</h3>
     <post-item 
     class="post" 
     v-for="post in posts" 
     :key="post.id" 
     :post="post"
     @remove="$emit('remove', post)"
     />
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

</style>>


