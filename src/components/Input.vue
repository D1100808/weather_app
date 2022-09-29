<template>
<div class="input-group mb-3" style="width: 300px; margin-left: 15px;">
    <input type="text" class="form-control no-border bg-light rounded" placeholder="Введите название города"
        aria-label="Recipient's username" aria-describedby="button-addon2"
        style="outline:0;margin: 10px 0 0 10px;background-color: #41e2ba;" v-model="cityVal">
    <button class="btn btn-outline-info rounded" type="button" id="button-addon2"
        style="width:50px;color: white;border: none;margin: 10px 0 0 10px" @click="getCity"><i
            class="bi bi-search"></i></button>
</div>

</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(props, { emit }) {
        const cityVal = ref('')
        
        const getCity = () => {
            emit('city', cityVal)
            cityVal.value = ''
        }
        return { cityVal , getCity}
    }
}
</script>

<style>

</style>