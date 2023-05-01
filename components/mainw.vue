<template>
    <div class="main">
 <div class="main-content content">
   <div class="main-text-content">
     <div class="main-text-wrapper">
       <h1>
Вы многие годы безуспешно пытаетесь выйти с оков работы, устранить стрессы и давление, стать здоровым? Но это не дало вам ничего кроме разочарования?</h1>
         <p>Через Ваше подсознание я Вас выведу из этого состояния в физическое пространство где вы наслаждаетесь своими мечтами...<br>
</p>
       <div class="buttons">
         <div class="main-button-zapis main-button" @click="dialogTrue">
           <a>Записаться на бесплатную консультацию</a>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</template>
<script>
    export default {
  data () {
    return {
        dialog: false,
        data:''
    }
  },
        methods:{
			dialogTrue(){
        this.$store.commit('dialog/dialogMutation', true);
     },
		}
}

</script>
<style>
.main{
    background: url(/background.jpeg);
	background-size: cover;
    height: 875px;
}
    .main-content{
        position: relative;
        z-index: 3;
        height: 100%;
        display: flex;
        align-items: center;
    }
    .main:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.7);
      height: inherit;
}
    .main-text-content{
      padding: 0 15px;
      position: relative;
      
    }
    .main-text-wrapper h1{
        width: 80%;
        font-size: 35px;
        font-weight: 800;
        color: #FFFFFF;
        line-height: 1.2;
    }
    .main-text-wrapper h1 span{
        color: #41cb52;
    }
    .main-text-wrapper p{
        font-size: 18px;
        color: #FFFFFF;
        margin: 25px 0 35px;
        width: 65%;
    }
    .main-text-wrapper p span{
        display: inline-block;
        padding-left: 10px;
        margin-top: 16px
    }
    .main-button{
        min-width: 200px;
        min-height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        font-weight: 700;
        font-size: 16px;
        margin: 12px;
		text-align: center;
		line-height: normal;
        padding: 0 30px;
		cursor: pointer !important;
    }
    .main-button-zapis{
        background-color: #41cb52;
    }
    .main-button-konsult{
        border: 1px solid #FFFFFF;
    }
    .buttons{
        display: flex;
        flex-wrap: wrap;
    }
    @media (max-width: 991px){
        .main-text-wrapper h1{
            font-size: 30px;
        }
    }
    @media (max-width: 768px){
        .main-text-wrapper{
          text-align: center;
        }
        .main-text-wrapper h1{
          font-size: calc(22px + (8 + 8 * 0.7) * ((100vw - 320px) / 1280));
            display: inline-block;
        }
        .main-text-wrapper p{
             width: auto;
        }
        .buttons{
            justify-content: center;
    }
    }
    @media (max-width: 565px){
        .main-text-wrapper h1{
            width: auto;
        }
        .main-text-wrapper{
          text-align: unset
        }
        .main-text-wrapper p{
             font-size: 17px;
        }
    }
</style>