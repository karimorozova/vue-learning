import { ref, computed } from 'vue'

export default function useSearchAndSortedPosts(sortedPosts) {
    const searchQuery = ref('');
    const searchAndSortedPosts = computed(() => {
        return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchQuery,
        searchAndSortedPosts
    }
}