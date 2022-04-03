<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
      <div @click.stop class="dialog-content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin.js'
export default {
name: 'my-dialog',
mixins: [toggleMixin],
// props: {
//     show: {
//         type: Boolean,
//         default: false,
//     }
// },
// methods: {
//     hideDialog() {
//         this.$emit('update:show', false)
//     }
// }
mounted() {
    console.log('dialog mounted');
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
    padding: 30px;
}
</style>