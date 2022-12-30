<template>
  <router-view />
</template>

<script>
// import Echo from 'laravel-echo'

// Enable pusher logging - don't include this in production
import Pusher from 'pusher-js';
// Pusher.logToConsole = true;

var pusher = new Pusher('b5a9d6b6cbf97562584f', {

  cluster: 'mt1',
  
  wsPort: 6001,
  wssPort: 6001,
    wsHost: 'http://127.0.0.1',
    wssHost: 'http://127.0.0.1',
    authEndpoint: 'http://127.0.0.1/broadcasting/auth',
    forceTLS: true
});


// channel.bind('test', function(data) {
// });

export default {
  name: 'App',
  mounted(){
    var channel = pusher.channel('testchannel');
  console.log("------------------------------------------------- subscribe")
        console.log(channel);
  },
  created(){
    // window.Echo.private('testchannel').listen('Test', (e) => {
    //           console.log('test successful ' + e)
      // })
    // window.Echo.channel(`testchannel`)
    // .listen('OrderShipmentStatusUpdated', (e) => {
    //     console.log(e.order.name);
    // });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
