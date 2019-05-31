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
import UserNav from '../components/userinfo/Navbar.vue'
import UserMain from '../components/userinfo/Main.vue'

export default {
    name: 'userhome',
    components: {
        'usernav': UserNav,
        'usermain': UserMain
    }
}
</script>


<style scoped>
.userhome {
    margin: 0 40px;
}
</style>
