<template>

<div class="app">
  <h1 class="page-title">Page with posts</h1>
  <!-- <input type="text" v-model.number="modificatorValue"> -->
  <!-- <my-button @click="fetchUsers">
    Get posts list
  </my-button> -->
  <div class="app-btns">
<my-button
   @click="showDialog">
    Create post</my-button>

    <my-select v-model="selectedSort" :options="sortOptions"/>
  </div>
  
  <my-dialog v-model:show="dialogVisible">
<post-form @create="createPost"/>
  </my-dialog>
  
<post-list 
:posts="posts"
@remove="removePost"
v-if="!isPostLoading"
/>
<div v-else>Loading...</div>
 </div>

</template>


<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'
import axios from 'axios'


export default {
  components: {
    PostList,
    PostForm
   
  },
  data() {
    return {
     posts: [],
     dialogVisible: false,
     modificatorValue: '',
     isPostLoading: false,
     selectedSort: '',
     sortOptions: [
       {
         value: 'title',
         name: 'By title'
       },
       {
         value: 'body',
         name: 'By description'
       }
     ]
    }
  },
  methods: {
    createPost(post) {
    this.posts.push(post)
    this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchUsers() {
      try {
        this.isPostLoading = true;
        // setTimeout(async () => {
        //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        // // console.log(response);
        // this.posts = response.data;
        // this.isPostLoading = false;
        // }, 1000)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        // console.log(response);
        this.posts = response.data;
      } catch (error) {
        alert('Error!')
      } finally {
        this.isPostLoading = false;
      }

    }
    // inputTitle(e) {
    //   this.title = e.target.value
    // },
    // inputBody(e) {
    //   this.body = e.target.value
    // }
  },
  mounted() {
        this.fetchUsers();
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
.page-title {
  margin-bottom: 20px;
}

.app-btns {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

</style>
