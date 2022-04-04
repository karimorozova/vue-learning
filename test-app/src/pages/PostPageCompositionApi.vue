<template>

<div >
  <h1 class="page-title">Page with posts</h1>
  <!-- <h1>{{ likes }}</h1>
  <my-button @click="addLike">Add like</my-button> -->
  <my-input type="text" v-model="searchQuery" v-focus placeholder="Search..."/>
  <div class="app-btns">

<my-button
   @click="showDialog">
    Create post</my-button>
    <my-select v-model="selectedSort" :options="sortOptions"/>
  </div>
  <!-- <div class="app-btns">
<my-button
   @click="showDialog">
    Create post</my-button>

    <my-select 
    :model-value="selectedSort"
   @update:model-value="setSelectedSort"
    :options="sortOptions"/>

  </div> -->
  
  <!-- <my-dialog v-model:show="dialogVisible">
<post-form @create="createPost"/>
  </my-dialog> -->
  
<post-list 
:posts="searchAndSortedPosts"

v-if="!isPostLoading"
/>
<div v-else>Loading...</div>
<!-- <div v-intersection="loadMorePosts" class="observer"></div> -->

 </div>

</template>


<script>
import PostList from '@/components/PostList.vue'
// import MySelect from '@/components/UI/MySelect.vue'
// import PostForm from '@/components/PostForm.vue'
// import { ref } from 'vue'
import usePosts from '@/hooks/usePosts.js'
import useSortedPosts from '@/hooks/useSortedPosts.js'
import useSearchAndSortedPosts from '@/hooks/useSearchAndSortedPosts.js'

export default {
  components: {
    PostList,
    // MySelect
    // PostForm
   
  },
  data() {
    return {
    
     dialogVisible: false,
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
  setup() {

      const {posts, totalPages, isPostLoading } = usePosts(10);
      const {selectedSort, sortedPosts} = useSortedPosts(posts);
      const { searchQuery, searchAndSortedPosts} = useSearchAndSortedPosts(sortedPosts);

    //  const likes = ref(10);
    //  const addLike = () => {
    //      likes.value += 1
    //  }
     return { 
         posts, 
         totalPages,
          isPostLoading,
          selectedSort, 
          sortedPosts,
          searchQuery, 
          searchAndSortedPosts
         }
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
