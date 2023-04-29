<template>
    <div class="goal">
        <div class="goal-content content">
            <div class="goal-title title">
                <h2>Я сделаю все, чтобы вернуть вам гармоничные отношения, 
                    здоровье и время!
                </h2>
                <h4>Но это не значит, что вы можете просто расслабиться
                     и получать удовольствие. Результат в равной степени зависит и от 
                     меня, и от Вас. Вы должны действительно хотеть кардинально
                      изменить свою 
                     жизнь и четко следовать моим рекомендациям. Но сначала:
                </h4>        
            </div>        
            <div class="main-button-continue-2 main-button goal-button" @click="dialogTrue">
                <a>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</a>
            </div>
        </div>       
    </div>
</template>
<script>
export default {
  methods:{
	dialogTrue(){
        this.$store.commit('dialog/dialogMutation', true);
    },
  }
}
</script>
<style>
.goal{
    background-image: url(/happy_family.jpg);
    background-position: center;
    min-height: 650px;
    width: 100%;
    z-index: -10;
    text-align: center;
}
.goal-content{
    padding-top: 100px;
}
.goal-title{
    display: inline-block;
    text-align: center;
    padding: 0 6px;
}
.goal-title h2{
    color: #fff;
}
.goal-title h4{
    margin: 40px 0;
    font-weight: 400;
    font-size: 20px !important;
}
.goal-button{
    max-width: 400px;
    width: auto;
    border-radius: 100px !important;
    background-color: #41cb52 !important;
    color: #fff !important;
    padding: 20px;
	margin-bottom: 40px;
    line-height: normal !important;
}
@media (max-width: 331px){
    .goal-button a{
        font-size: 16px;
    }
}  
@media (max-width: 410px){
    .goal-title h3{
        font-size: 18px !important;
    }
    .goal-content{
        padding-top: 80px;
    }
}
@media (max-width: 360px){
    div .main-button-continue-2{
        margin-top: 20px;
    }
}
@media (max-width: 767px){
    div.goal-title h2{
        font-size: calc(24px + (16 + 16 * 0.7) * ((100vw - 320px) / 1280)) !important;
    }
	div.goal-title h4{
        font-size: calc(18px + (6 + 6 * 0.7) * ((100vw - 320px) / 1280)) !important;
    }
}
</style>