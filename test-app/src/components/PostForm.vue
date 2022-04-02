<template>
  <form class="create-post" @submit.prevent>
  <h4 class="form-title">Add new post</h4>
  <my-input v-model="post.title" type="text"  placeholder="Title"/>
  <my-input v-model="post.body" type="text"  placeholder="Body"/>
  <my-button class="create" @click="createPost" >Create post</my-button>
</form>
</template>

<script>
// import MyButton from './UI/MyButton.vue'
export default {
  // components: {
  //   MyButton,
  // },
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
  },
  // watch: {
  //   post: {
  //     handler(v) {
  //       console.log(v);
  //     },
  //     deep: true
      
  //   }
  // }

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


</style>
