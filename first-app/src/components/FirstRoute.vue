<template>
  <div class="test">
    <span v-html="title"></span>
    <p>{{user.firstName}} {{user.lastName}}</p>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        title: '<h1>Hello there</h1>',
        user: {
          firstName: 'Joel',
          lastName: 'Myers'
        }
      }
    }
  }
</script>
