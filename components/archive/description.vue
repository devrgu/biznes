<template>
<div class="description">
  <div class="description-content content">
      <div class="description-title title">
         <h2>Внимание!</h2>
         <div class="hr-center">
           <hr>
       </div>
      </div>
      <div class="description-information information">
          <p>Запишитесь на сеанс! Если вы не получите нужное лечение сейчас, то из-за вашей нынешней ситуацией, возникнут необратимые болезни и страхи перед вашим положением на данный момент, как фобий, боязнь будущего, депрессия, онкология и гормональные растроиства которые возможно, уже находятся внутри Вас.</p>
      </div>
  </div>
</div>
</template>
<style>
    .description{
        padding: 100px 0;
        background-color: #f5f5f5
    }
    .description-content{
        text-align: center;
    }
    .description-information{
        padding: 0 160px;
    }
    @media (max-width: 991px){
        .information{
            font-size: 17px !important;
        }
        .description-information{
        padding: 0 5%;
    }
    }
    @media (max-width: 767px){
        .description-information{
            font-size: 16px !important;
    } 
    }
    @media (max-width: 565px){
        .information{
            font-size: 16px !important;
        }
    }
</style>