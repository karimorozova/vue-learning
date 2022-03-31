<template>
  <div class="dialog" v-if="show">
      <div class="dialog-content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
export default {
name: 'my-dialog',
props: {
    show: {
        type: Boolean,
        default: false,
    }
}
}
</script>

<style scoped>
.dialog {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
}

.dialog-content {
    margin: auto;
    background-color: white;
    border-radius: 12px;
    min-width: 300px;
    min-height: 50px;
}
</style>