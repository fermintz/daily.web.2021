<template>
  <v-app>
    <Drawer ref="drawer"/>
    <TopHeader @update="drawer"/>

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import TopHeader from '@/components/header'
import Footer from '@/components/footer'
import Drawer from '@/components/drawer'

export default {
  name: "App",
  components:{
    TopHeader, Footer, Drawer
  },
  data: () => ({
    //
  }),

  methods:{
    drawer(value){
      this.$refs.drawer.drawerHandle(value)
    }
  },


};
</script>
