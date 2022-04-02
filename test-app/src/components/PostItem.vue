<template>
  <div class="post">
      
      <div class="text-wrapper">
          <div>{{post.id}}</div>
  <h2 class="post-title">{{post.title}}</h2>
  <p class="description">{{post.body}}</p>
  </div>
  <div class="btn-wrapper">
      <my-button class="delete-btn">Open</my-button>
      <my-button class="delete-btn" @click="$emit('remove', post)">Delete</my-button>
  </div>
</div>
</template>

<script>
// import MyButton from './UI/MyButton.vue'
export default {
    // components: {
    //     MyButton,
    // },
    props: {
        post: {
            type: Object,
            required: true,
        }
    }

}
</script>

<style scoped>
.post {
  border: 2px solid teal;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post:not(:last-child) {
margin-bottom: 30px;
}
.post-title {
  color: blueviolet;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
}
.description {
  
  font-size: 16px;
}
.btn-wrapper {
    display: flex;
    justify-content: space-between;
}
</style>