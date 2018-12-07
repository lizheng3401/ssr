<template>
    <div>
        configuration
        <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
