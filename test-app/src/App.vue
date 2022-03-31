<template>

<div class="app">
  <my-dialog :show="true">
<post-form @create="createPost"/>
  </my-dialog>
  
<post-list 
:posts="posts"
@remove="removePost"
/>
 </div>

</template>


<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'

export default {
  components: {
    PostList,
    PostForm
  },
  data() {
    return {
     posts: [
       {
         id: 1,
         title: 'My skills',
         body: "About the skill"
       },
       {
         id: 2,
         title: 'My skills 2',
         body: "About the skill"
       },
       {
         id: 3,
         title: 'My skills 3',
         body: "About the skill"
       }
     ]
    }
  },
  methods: {
    createPost(post) {
    this.posts.push(post)
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    }
    // inputTitle(e) {
    //   this.title = e.target.value
    // },
    // inputBody(e) {
    //   this.body = e.target.value
    // }
  }
  

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}

</style>
