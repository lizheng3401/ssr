<template>
    <div>
        configuration
        <ul>
            <li v-for="todo in todos">
            <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            </li>
            <li><input placeholder="What needs to be done?" @keyup.enter="addTodo"></li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    name: 'configuration',
    computed: {
        todos () { return this.$store.state.todos.list }
    },
    methods: {
        addTodo (e) {
        this.$store.commit('todos/add', e.target.value)
        e.target.value = ''
        },
        ...mapMutations({
        toggle: 'todos/toggle'
        })
    }
}
</script>

<style>

</style>
