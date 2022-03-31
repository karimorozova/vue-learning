<template>
  <form class="create-post" @submit.prevent>
  <h4 class="form-title">Add new post</h4>
  <input v-model="post.title" type="text" class="create-input" placeholder="Title">
  <input v-model="post.body" type="text" class="create-input" placeholder="Body">
  <my-button class="create" @click="createPost" >Create post</my-button>
</form>
</template>

<script>
import MyButton from './MyButton.vue'
export default {
  components: {
    MyButton,
  },
  data() {
    return {
      post: {
        title: '',
        body: '',
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: '',
      }
    }
  }

}
</script>

<style scoped>
.create-post {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
}
.form-title {
  margin-bottom: 10px;
}
.create-input {
  padding: 15px;
  width: 100%;
  border: 1px solid blueviolet;
  margin-bottom: 10px;
}

</style>
