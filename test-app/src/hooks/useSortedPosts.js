import { ref, computed } from 'vue'

export default function useSortedPosts(posts) {
    const selectedSort = ref('')
    const sortedPosts = computed(() => {
        return [...posts.value].sort((firstPost, nextPost) => firstPost[selectedSort.value]?.localeCompare(nextPost[selectedSort.value]))
    })

    return {
        selectedSort,
        sortedPosts
    }
}