<template>
  <div class="boradCreate">
    <div class="inner">

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      subject:'',
      context:'',
      user_id:1,
      created_at:Date(),
      updated_at: null,
      updateObject: null,
      updateMode: null, 
    }
  },
}
</script>

<style lang="scss" scoped>
.boradCreate{

}
</style>