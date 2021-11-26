<template>
  <div class="test">
    <div class="inner">
      <div class="canvas_wrap">
        <canvas id="canvas" width="500" height="500"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isDrawing: false,
      lastX:0,
      lastY:0,
    }
  },
  mounted(){
    this.draw()
    
  },
  methods:{    
    draw(){
      const canvas = document.getElementById('canvas')
      const canvasWrap = document.querySelector('.canvas_wrap')
      const context = canvas.getContext('2d')

      canvas.width = canvasWrap.clientWidth

      context.strokeStyle = '#292929'
      context.lineJoin='round';
      context.lineCap='round';
      context.lineWidth=5;

      const drawing = (e)=>{
        if(!this.isDrawing) return;
        console.log(e)

        context.beginPath();
        context.moveTo(this.lastX,this.lastY);
        context.lineTo(e.offsetX, e.offsetY)
        context.stroke();
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
      }

      canvas.addEventListener('mousemove', drawing);
      canvas.addEventListener('mousedown', (e)=> {
        this.isDrawing = true;
        [this.lastX, this.lastY] = [e.offsetX, e.offsetY];
      });
      canvas.addEventListener('mouseup', ()=> this.isDrawing = false);
      canvas.addEventListener('mouseout', ()=> this.isDrawing = false);

    }

    


  },
}
</script>

<style lang="scss" scoped>
#canvas{

}
.test{
  height:5000px;
  padding:90px 0;
  canvas{
    background:#f8f8f8;
  }
}
</style>