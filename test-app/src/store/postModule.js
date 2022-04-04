// import { createStore } from "vuex";
import axios from "axios"

export const postModule = {
    state: () => ({
        posts: [],
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
    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((firstPost, nextPost) => firstPost[state.selectedSort]?.localeCompare(nextPost[state.selectedSort]))
          },
          searchAndSortedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
            
          }
    },
    mutations: {
        setPosts(state, newPosts) {
            state.posts = newPosts
        },
        setLoading(state, bool) {
            state.isPostLoading = bool
        },
        setSelectedSort(state, value) {
            state.selectedSort = value;
          
        },
        setSearchQuery(state, str) {
            state.searchQuery = str
        },
        setPage(state, number) {
            state.page = number
        },
        setTotalPages(state, number) {
            state.totalPages = number
        }


    },
    actions: {
        async fetchUsers({state, commit}) {
            try {
            //   this.isPostLoading = true;
              commit('setLoading', true);
             
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                  _limit: state.limit,
                  _page: state.page,
                }
              });
            //   this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit) 
            commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
              
            //   this.posts = response.data;
            commit('setPosts', response.data)
            } catch (error) {
              // alert('Error!')
              console.log(error);
            } finally {
                commit('setLoading', false);
            }
      
          },
          async loadMorePosts({state, commit}) {
            try {

            //  this.page += 1;
            commit('setPage', state.page + 1)
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                  _limit: state.limit,
                  _page: state.page,
                }
              });
            //   this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit) 
              commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
              commit('setPosts', [...state.posts, ...response.data])
            //   this.posts = [...this.posts, ...response.data]
              
            } catch (error) {
              // alert('Error!')
              console.log(error);
            } finally {
              // this.isPostLoading = false;
            }
      
          }
    },
    namespaced: true,
}