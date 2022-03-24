<template>
  <v-container>
    <v-row>
      <v-progress-linear :value="expgoal" v-bind:color="expgoal >= 100 ? 'green' : 'blue'" height=25>
        <template v-slot:default="{ value }">
          <strong>{{ value }}%</strong>
        </template>
      </v-progress-linear>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data () {
      return {
        expgoal: 0,
      }
    },
    created () {
      this.connect()
    },
    methods: {
      connect () {
        var url = "ws://127.0.0.1:9595";
        this.conn = new WebSocket(url)

        this.conn.onmessage = (event) => {
          console.log("Event: " + event.data)
          var i = event.data.indexOf(':');
          var ic = [event.data.slice(0,i), event.data.slice(i+1)];
          switch(ic[0]) {
            case "EXPGOAL":
              this.expgoal = ic[1]
              break
          }
        }
        
      }
    }

  }
</script>
