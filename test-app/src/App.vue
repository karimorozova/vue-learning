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
<form class="create-post" @submit.prevent>
  <h4 class="form-title">Add new post</h4>
  <input v-bind:value="title" @input="title = $event.target.value" type="text" class="create-input" placeholder="Title">
  <input v-bind:value="body" @input="body = $event.target.value" type="text" class="create-input" placeholder="Body">
  <button class="create" @click="createPost" >Create post</button>
</form>
<div class="post" v-for="post in posts" v-bind:key="post">
  <h2 class="post-title">{{post.title}}</h2>
  <p class="description">{{post.body}}</p>
</div>
 </div>
</template>


<script>

export default {
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
     ],
     title: "",
     body: "",
    }
  },
  methods: {
    createPost() {
      // e.preventDefault();
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,

      };
      this.posts.push(newPost);
      this.title = '';
      this.body = '';
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
.post {
  border: 2px solid teal;
  padding: 10px;
}
.post:not(:last-child) {
margin-bottom: 30px;
}
.post-title {
  color: blueviolet;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
}
.description {
  
  font-size: 16px;
}
.create-post {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}
.form-title {
  margin-bottom: 10px;
}
.create-input {
  padding: 15px;
  width: 100%;
  border: 1px solid blueviolet;
  margin-bottom: 10px;
}
.create {
  align-self: flex-end;
  padding: 10px;
  width: 200px;
  height: 50px;
  background-color: transparent;
  border-radius: 5px;
  outline: none;
  border: 1px solid blueviolet;
  cursor: pointer;
  
}
</style>
