<template>
   <div class="hapiness">
               <div class="hapiness-content content">
                 <div class="hapiness-wrap">
                  <div class="hapiness-text">
                   <div class="hapiness-title title">
                       <h2>Я помогу вам обрести счастье и успех,<br>
                           <span>Вы достигните своих целей!</span></h2>
                   </div>
                      <div class="hapiness-conspect information">
                       <div>Психологи тщетно пытаются лечить психосоматические проблемы по типу депрессий, фобий, сложных отношений или же проблем в бизнесе. Они работают с убеждениями и эмоциями. Моя же методика устраняет глубинные причины непонимания и конфликтов. Речь о деструктивных подсознательных установках. Именно проработка глубинных программ подсознания гарантирует, что эти проблемы наладятся быстро и надолго.</div>
                       <div>Я не минимизирую проблемы. Я не учу вас жить в токсичной обстановке, терпеть унижения и обманывать себя ежедневными аффирмациями. Нет нужды смотреть на неработающие методы под другим углом, искать плюсы или жить воспоминаниями о былой жизни. Я могу помочь вам все исправить и снова почувствовать себя счастливыми.</div>
                       <div>Единственный метод, которому такое под силу, — гипно-программирование. Только она способна обойти критический фильтр и дать возможность работать напрямую с вашим сверх сознанием. Это самый быстрый, эффективный и притом абсолютно безопасный способ устранить ментальные рубцы от психотравм, которые разрушили вашу жизнь.</div>
                   </div>
                    </div>
                   <div class="hapiness-img">
                       <img loading="lazy" src="/hapiness%20img%20block.png">
                   </div>
                </div>
                   <div class="avtor">
                       <div class="avtor-img"></div>
                       <div class="avtor-text">
                           <p>Серик Аубакиров
                               <span><br>Ваш путеводитель по жизни.<br></span></p>
                       </div>
                   </div>
               </div>
           </div>
</template>
<style>
    .hapiness{
        margin-bottom: 120px
    }
    .hapiness-wrap{
        display: flex;
        justify-content: space-between;
    }
    .hapiness-text{
        font-size: 18px;
        color: #d1d1d1;
        max-width: 637px;
        display: inline-block;
         white-space:normal;
    }
    .hapiness-title h2{
        text-align: left !important;
    }
    .hapiness-title h2 span{
        font-size: 30px
    }
    .decorate-word{
        font-size: 18px;
        color: #A7A7A7;
        font-weight: 400;
    }
    .hapiness-conspect div{
        margin-top: 24px;
    }
    .hapiness-conspect{
        margin: 40px 20px 40px 12px;
    }
    .hapiness-img{
        float: right;
    }
    .avtor{
        display: flex;
        margin: 14px 0 0 40px;
    }
    .avtor-img{
        min-width: 100px;
        min-height: 100px;
        background-image: url(/photo-serik.jpg);
        background-position: center;
        background-size: cover;
        border-radius: 100px;
    }
    .avtor-text{
        margin-left: 16px;
        margin-top: 16px;
    }
    .avtor-text p{
        font-size: 16px;
        color: #666;
        font-weight: 500;
    }
    .avtor-text span{
      font-weight: 400;

    }
     .backgr-biog{
        z-index: -2;
         height: 600px;
         width: 400px;
         overflow: hidden;
    }
    .backgr-biog img{
        width: 540px;
        height: 700px;
    }
    @media (max-width: 1170px){
    .hapiness-wrap{
        flex-wrap: wrap;
        justify-content: center;
    }
    .hapiness-title{
        padding-left: 5%;
    }
    .hapiness-title h2 span{
        font-size: 24px;
    }
    }
    @media (max-width: 565px){
        .avtor{
            margin: 14px 0 0 20px
        }
        .avtor-img{
            min-width: 90px !important;
            min-height: 90px !important;
        }
        .hapiness-img{
            margin: 20px;
        }
    }
</style>

