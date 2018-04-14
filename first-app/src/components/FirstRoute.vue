<template>
  <div class="test">
    <span ></span>
    <input type="text" v-model="title"><br />
    <h1 v-html="title"></h1>
    <p v-if="active">{{user.firstName}} {{user.lastName}}</p>
    <p v-else>Nothin</p>
    <ul>
      <li v-for="item in items">{{item.title}}</li>
    </ul>

    <button v-on:click="greet">Say Greeting</button>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data() {
      return {
        title: 'Input title here',
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
    },
    methods: {
    greet: function () {
      console.log('hello');
    }
    }
  }
</script>
