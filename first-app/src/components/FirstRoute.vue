<template>
  <div class="test">
    <span v-html="title"></span>
    <p v-if="active">{{user.firstName}} {{user.lastName}}</p>
    <p v-else>Nothin</p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>
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
        },
        active: true,
        items: [
          {title: 'title 1'},
          {title: 'title 2'},
          {title: 'title 3'}
        ]
      }
    }
  }
</script>
