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
    },
    created() {
        if(this.$session.getAll().token !== 'god') {
            this.$router.push('/404');
        }
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
