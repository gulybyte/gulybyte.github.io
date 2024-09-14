import type { Post } from '@/interfaces/Post'

export const usePostStore = defineStore('post', {
  state: () => ({
    post: { id: 0, title: '', body: '' } as Post
  }),
  actions: {
    async fetchPost(id: number) {
      const { posts } = await $fetch<{ posts: Post[] }>(`/api/posts`)
      this.post = posts[id - 1]
    }
  }
})
