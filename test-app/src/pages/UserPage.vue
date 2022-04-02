<template>

<div >
  <h1 class="page-title">Page with posts</h1>
  <my-input type="text" v-model="searchQuery" placeholder="Search..."/>
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
:posts="searchAndSortedPosts"
@remove="removePost"
v-if="!isPostLoading"
/>
<div v-else>Loading...</div>
<div ref="observer" class="observer"></div>
<!-- <div class="page-wrapper">
  <div 
  class="page" 
  v-for="pageNumber in totalPages" 
  :key="pageNumber"
  :class="{
    'current': page === pageNumber,
    }"
    @click="changePage(pageNumber)"
    >
  {{pageNumber}}
  </div>
</div> -->
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
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
     sortOptions: [
       {
         value: 'title',
         name: 'By title'
       },
       {
         value: 'body',
         name: 'By description'
       }
     ],
    
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
    // changePage(pageNumber) {
    //    this.page = pageNumber;
    //   //  this.fetchUsers();
    // },
    async fetchUsers() {
      try {
        this.isPostLoading = true;
        // setTimeout(async () => {
        //   const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        // // console.log(response);
        // this.posts = response.data;
        // this.isPostLoading = false;
        // }, 1000)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit) 
        // console.log(response);
        this.posts = response.data;
      } catch (error) {
        alert('Error!')
      } finally {
        this.isPostLoading = false;
      }

    },
    async loadMorePosts() {
      try {
        // this.isPostLoading = true;
       this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _limit: this.limit,
            _page: this.page,
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit) 
        // console.log(response);
        this.posts = [...this.posts, ...response.data]
        
      } catch (error) {
        alert('Error!')
      } finally {
        // this.isPostLoading = false;
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
        // console.log(this.$refs.observer);
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries) => {
    if(entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
        // console.log(observer);
        
    }
    
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(this.$refs.observer);
    },
    computed: {
      sortedPosts() {
        return [...this.posts].sort((firstPost, nextPost) => firstPost[this.selectedSort]?.localeCompare(nextPost[this.selectedSort]))
      },
      searchAndSortedPosts() {
        return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        
      }
    },
    watch: {
      // page() {
      //   this.fetchUsers()
      // }
      // selectedSort(newValue) {
      //   // console.log(newValue);
      //   this.posts.sort((firstPost, nextPost) => {
      //     return firstPost[newValue]?.localeCompare(nextPost[newValue])
      //   })
      // },
      // dialogVisible(value) {
      //   console.log(value);
      // } 
    }
  

}
</script>

<style scoped>

.page-title {
  margin-bottom: 20px;
}

.app-btns {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
}

.page-wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 15px;
}
.current {
  border: 2px solid tomato;
}
.observer {
  height: 30px;
  background-color: aqua;
}

</style>
