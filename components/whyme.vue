<template>
<div class="whyme">
   <div class="whyme-title sections-title title">
       <h2>Я открою вам дверь к жизни,<br> наполненной призванием и смыслом!</h2>
       <div class="hr-center">
           <hr>
       </div>
       <p>В путешествии к вашему призванию вы:</p>
   </div>
    <div class="whyme-content content">
        <div class="reason-1 reason">
            <div class="reason-1-icon reason-icon">
                <img src="/like.svg" loading="lazy">
            </div>
            <div class="reason-1-text reason-text">
                <div class="reason-1-title reason-title">
                    <h3>Открываете свою уникальную страсть и призвание</h3>
                </div>
                <div class="reason-1-information reason-information information">
                  <p>Погрузитесь в глубокий самоанализ и обнаружите то, что заставляет ваше сердце биться быстрее. Я помогаю вам раскрыть истинную страсть, которая будет двигать вами вперед, наполняя каждый день смыслом и вдохновением.</p>
                </div>
            </div>
        </div>
        <div class="reason-1 reason">
            <div class="reason-1-icon reason-icon">
            <img src="/new-life.svg" loading="lazy">
            </div>
            <div class="reason-1-text reason-text">
                <div class="reason-1-title reason-title">
                    <h3>Определите свое истинное призвание</h3>
                </div>
                <div class="reason-1-information reason-information information">
                    <p>Научитесь слушать внутренний голос и различать подлинные желания от наложенных обществом ожиданий. Мы поможем вам ясно увидеть ваше призвание и путь к его реализации, обеспечивая четкий план действий для достижения ваших целей.</p>
                </div>
            </div>
        </div>
        <div class="reason-1 reason">
            <div class="reason-1-icon reason-icon">
        <img src="/lotos.svg" loading="lazy">
            </div>
            <div class="reason-1-text reason-text">
                <div class="reason-1-title reason-title">
                    <h3>Преобразуете свою жизнь</h3>
                </div>
                <div class="reason-1-information reason-information information">
                    <p>Перестаньте жить по чужим правилам. Я даю инструменты для создания жизни, о которой вы всегда мечтали, жизни, полной радости, удовлетворения и достижений, соответствующих вашему истинному "я".</p>
                </div>
            </div>
        </div>
        <div class="reason-1 reason">
            <div class="reason-4-icon reason-icon">
                 <img src="/money.svg" loading="lazy">
            </div>
            <div class="reason-1-text reason-text">
                <div class="reason-1-title reason-title">
                    <h3>Освободитесь от прошлых ограничений</h3>
                </div>
                <div class="reason-1-information reason-information information">
                    <p>Избавьтесь от старых убеждений и страхов, которые мешают вам двигаться вперед. Вы собираетесь освободиться от прошлых препятствий и открыться новым возможностям, ведущим к успеху и самореализации.</p>
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