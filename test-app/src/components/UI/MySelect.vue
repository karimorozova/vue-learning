<template>
 <!-- <select v-model="modelValue" @change="changeOption"> -->
     <select model-value.sync="modelValue" @change="changeOption">
     <option  value="" > Choose something from the list</option>
     <option
      v-for="option in options"
       :key="option.value" 
       :value="option.value"
       >
       {{option.name}}
       </option>
 </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        
        changeOption(e) {
            this.$emit('update:modelValue', e.target.value)
        }
    },

}
</script>

<style scoped>

</style>