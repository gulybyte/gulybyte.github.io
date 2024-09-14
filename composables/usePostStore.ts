import type { Post } from '@/lib/types/Post'

export const usePostStore = defineStore('post', {
  state: () => ({
    post: { id: 0, title: '', content: '' } as Post
  }),
  actions: {
    async fetchPost(id: number) {
      const { posts } = await $fetch<{ posts: Post }>(`/api/posts/${id}`)
      this.post = posts
    }
  }
})
