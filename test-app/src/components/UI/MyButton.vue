<template>
  <button class="create">
<slot></slot>
  </button>
</template>

<script>
export default {
name: "my-button",
}
</script>

<style scoped>
.create {
  /* align-self: flex-end; */
  padding: 10px;
  width: 200px;
  height: 50px;
  background-color: transparent;
  border-radius: 5px;
  outline: none;
  border: 1px solid blueviolet;
  cursor: pointer;
  
}

</style>

