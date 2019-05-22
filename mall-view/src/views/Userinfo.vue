<template>
      <div class="userhome">
          <nav>
              <usernav></usernav>
          </nav>

          <main>
              <usermain></usermain>
          </main>

          <footer>
              <userfooter></userfooter>
          </footer>
      </div>
</template>


<script>
import UserNav from '../components/userinfo/Navbar.vue'
import UserMain from '../components/userinfo/Main.vue'
import UserFooter from '../components/Footer.vue'

export default {
    name: 'userhome',
    components: {
        'usernav': UserNav,
        'usermain': UserMain,
        'userfooter': UserFooter
    }
}
</script>


<style scoped>
.userhome {
    margin: 0 40px;
}
</style>
