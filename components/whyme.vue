<template>
<div class="whyme">
   <div class="whyme-title sections-title title">
       <h2>Я помогаю вам придти к <br>лучшей жизни!</h2>
       <div class="hr-center">
           <hr>
       </div>
       <p>В программе лечения вы:</p>
   </div>
    <div class="whyme-content content">
        <div class="reason-1 reason">
            <div class="reason-1-icon reason-icon">
                <img src="/like.svg" loading="lazy">
            </div>
            <div class="reason-1-text reason-text">
                <div class="reason-1-title reason-title">
                    <h3>Избавитесь от боли и обретете свое счастье и призвание</h3>
                </div>
                <div class="reason-1-information reason-information information">
                  <p>Вы наконец-то ощутите свободу и избавитесь от тревог и безысходности</p>
                </div>
            </div>
        </div>
        <div class="reason-1 reason">
            <div class="reason-1-icon reason-icon">
            <img src="/new-life.svg" loading="lazy">
            </div>
            <div class="reason-1-text reason-text">
                <div class="reason-1-title reason-title">
                    <h3>Улучшите прибыль и эффективность в вашем призваний</h3>
                </div>
                <div class="reason-1-information reason-information information">
                    <p>Ваше призвание будет приносить вам и радость и стремление к лучшему</p>
                </div>
            </div>
        </div>
        <div class="reason-1 reason">
            <div class="reason-1-icon reason-icon">
        <img src="/lotos.svg" loading="lazy">
            </div>
            <div class="reason-1-text reason-text">
                <div class="reason-1-title reason-title">
                    <h3>Обретете покой души</h3>
                </div>
                <div class="reason-1-information reason-information information">
                    <p>Вы забудете о конфликтах, агрессии, спешки, стресса и не заболеете онкологий.</p>
                </div>
            </div>
        </div>
        <div class="reason-1 reason">
            <div class="reason-4-icon reason-icon">
                 <img src="/money.svg" loading="lazy">
            </div>
            <div class="reason-1-text reason-text">
                <div class="reason-1-title reason-title">
                    <h3>У вас наконец получиться!</h3>
                </div>
                <div class="reason-1-information reason-information information">
                    <p>Вы увидите как при малом усилий, ваши результаты будут удивительными в изменений жизни!</p>
                </div>
            </div>
        </div>
    </div>
</div>           
</template>
<script>
import iconpobeditel from '~/assets/img/iconpobeditel.svg?inline';

export default {
  components: {
    iconpobeditel
  }
}
</script>
<style>
    .whyme{
        margin-bottom: 100px;
    }
    .whyme-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .whyme-title{
        text-align: center;
        margin: 0 15px 75px !important;
    }
    .hr-center hr{
        width: 100px;
        height: 4px;
        border-radius: 100px;
        background-color:#41cb52;
        box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 10%);
        border-style: none;
    }
    .hr-center{
        margin: 20px 0 20px 0;
        text-align: center;
        display: inline-block;
    }
    .reason{
        width: 495px;
        min-height: 88px;
        border-radius: 4px 4px 4px 4px;
        box-shadow: 0px 0px 30px 0px rgb(0 0 0 / 10%);
        background-color: #FFFFFF;
        padding: 30px 30px 30px 30px;
        box-sizing: content-box;
        margin: 0 10px 20px 10px;
    }
    .reason-icon{
        flex-shrink: 0;
        width: 80px;
        height: 64px;
        padding-right: 25px;
        display: inline-block;
    }
    .reason-4-icon{
        width: 90px;
    }
    .reason-icon svg path{
        fill:#41cb52;
    }
    .reason-title h3{
        color: #212121;
        font-size: 23px;
        font-weight: 700;
        margin: 0 0 10px 0;
    }
    .reason-information{
        color: #616161;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
        line-height: 1.5;
    }
    @media (max-width: 440px){}
</style>