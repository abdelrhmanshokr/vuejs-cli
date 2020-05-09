// this is the new component we just created 
<template>
    <ul>
        <li v-for="ninja in ninjas" :key="ninja">
            {{ ninja }}
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            ninjas: ['shokr', 'abdelrhman', 'adel']
        }
    }
}
</script>

<style>

</style>