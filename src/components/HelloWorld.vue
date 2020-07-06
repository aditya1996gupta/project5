<template>
  <div>
    <p v-for="notification in notifications" :key="notification">
      {{notification}}
    </p>
    <button @click="addHey">Add Hey!</button>
  </div>
</template>

<script>
import state from '@/state'

export default {
  created () {
    this.$store.registerModule('notifications', state)
  },
  computed: {
    notifications () {
      return this.$store.state.notifications
    }
  },
  methods: {
    addHey () {
      this.$store.commit('addNotification', 'Hey!')
    }
  }
}
</script>
