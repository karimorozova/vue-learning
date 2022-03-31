<template>
  
  <div class="post-list">
    <h3 class="post-list-title">Posts list</h3>
     <post-item class="post" v-for="post in posts" :key="post" :post="post"/>
  </div>
  
 
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


