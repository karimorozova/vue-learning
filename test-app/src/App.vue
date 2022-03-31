<template>

 <!-- <p>Likes quantity {{likes}}</p>
 <p>Dislikes quantity {{dislikes}}</p>
  <button @click="addLike">Like</button>
  <button @click="addDislike">Dislike</button> -->
<!-- <article class="article">
  <h2 class="article-title">I'm smart</h2>
  <p class="description">I can do whatever I want</p>
</article>
<article class="article">
  <h2 class="article-title">I'm brave</h2>
  <p class="description">I can fix all my stuff</p>
</article> -->
<div class="app">
  <post-form @create="createPost"/>
<post-list :posts="posts"/>


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
