<template>
      <div class="userhome">
          <nav>
              <usernav></usernav>
          </nav>

          <main>
              <usermain></usermain>
          </main>
      </div>
</template>


<script>
import UserNav from '../components/userhome/Navbar.vue'
import UserMain from '../components/userhome/Main.vue'

export default {
  name: 'userhome',
  components: {
      'usernav': UserNav,
      'usermain': UserMain
  }
}
</script>


<style scoped>
main {
    width: 100%;
    height: auto;
}
.userhome {
    margin: 0 40px;
}
footer {
    margin-top: 100px;
}
</style>
