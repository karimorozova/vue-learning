import {  onMounted, ref } from 'vue'
import axios from 'axios';

export default function usePost(limit) {
    const posts = ref([]);
    const totalPages = ref(0);
    // const limit = ref(0);
    const isPostLoading = ref(true);
    const fetching = async () => {
        try {
           
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
              params: {
                _limit: limit,
                _page: 1,
              }
            });
            totalPages.value = Math.ceil(response.headers['x-total-count'] / limit) 
            // console.log(response);
            posts.value = response.data;
          } catch (error) {
            alert('Error!')
          } finally {
            isPostLoading.value = false;
          }
    }
    onMounted(fetching);
    return {
        posts, isPostLoading, totalPages
    }
    // onMounted()
    // onCreated()
    // computed()
    // watch()

       
  
     
}