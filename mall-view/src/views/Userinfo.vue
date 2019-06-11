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
    },
    created() {
        if(this.$session.exists()) {
            if(this.$session.getAll().token !== 'god') {
                this.$router.push('/404');
            } else {
                this.$message({
                    message: '可修改信息自动保存'
                })
            }
        } else {
            this.$router.push("/");
            this.$message({
                showClose: true,
                message: '尚未登陆，请登录',
                type: 'warning'
            })
        }
    }
}
</script>


<style scoped>
.userhome {
    margin: 0 40px;
}
</style>
