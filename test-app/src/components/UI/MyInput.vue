<template>
  <input type="text" @input="inputValue" :value="modelValue" class="create-input">
</template>

<script>
export default {
    name: "my-input",
    props: {
        modelValue: [String, Number]
    },
    methods: {
        inputValue(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    }

}
</script>

<style scoped>
.create-input {
  padding: 15px;
  width: 100%;
  border: 1px solid blueviolet;
  margin-bottom: 10px;
  color: black;
}
</style>