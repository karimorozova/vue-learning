<template>

<div >
 
    <!-- <h1>{{ $store.getters.doubleLikes }}</h1>
    <h1>{{ $store.state.isAuth ? 'Authorized' : 'Sign in'}}</h1>
    <div>
      <my-button @click="$store.commit('incrementLikes')">Like</my-button>
      <my-button @click="$store.commit('decrementLikes')">Dislike</my-button>
    </div> -->
  <h1 class="page-title">Page with posts</h1>
  <my-input type="text" :model-value="searchQuery" @update:model-value="setSearchQuery" v-focus placeholder="Search..."/> 
  <!-- <my-button @click="fetchUsers">
    Get posts list
  </my-button> -->
  <div class="app-btns">
<my-button
   @click="showDialog">
    Create post</my-button>

    <my-select 
    :model-value="selectedSort"
   @update:model-value="setSelectedSort"
    :options="sortOptions"/>

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
<div v-intersection="loadMorePosts" class="observer"></div> 
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
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'


export default {

  components: {
    PostList,
    PostForm,
  },

  data() {
    return {
     dialogVisible: false,
    }
  },

  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchUsers: 'post/fetchUsers'
    }),
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
    
  },

  mounted() {
        this.fetchUsers();
    },

    computed: {
      ...mapState({

         posts: state => state.post.posts,
     isPostLoading: state => state.post.isPostLoading, 
     selectedSort: state => state.post.selectedSort, 
      searchQuery: state => state.post.searchQuery, 
      page: state => state.post.page, 
      limit: state => state.post.limit, 
      totalPages: state => state.post.totalPages, 
     sortOptions: state => state.post.sortOptions, 

      }),

      ...mapGetters({
        sortedPosts: 'post/sortedPosts',
        searchAndSortedPosts: 'post/searchAndSortedPosts',
      }),
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
