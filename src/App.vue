<template>
  <v-app>
    <Drawer ref="drawer"/>
    <Header @update="drawer"/>

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import Drawer from '@/components/drawer'

export default {
  name: "App",
  components:{
    Header, Footer, Drawer
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
