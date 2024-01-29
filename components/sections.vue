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
						  <div><div>
  <p>
    Традиционные подходы часто оказываются <strong>бессильными</strong> перед задачей обретения своего призвания и истинного пути в жизни. Многие методики зациклены на поверхностной работе с убеждениями и эмоциями, не касаясь корня проблемы. Но что, если ключ к нахождению вашего призвания лежит глубже — в разрешении конфликтов прошлого и деструктивных подсознательных программ, которые тормозят ваше развитие и самореализацию?
  </p>
</div>
<div>
  <p>
    Моя методика "<strong>Путь к призванию</strong>" не просто учит вас справляться с повседневными проблемами через аффирмации или медитацию. Мы идем глубже, к самым корням вашего "я", к подсознательным установкам, которые определяют ваше восприятие себя и мира.
  </p>
</div>
<div>
  <p>
    Это не о простом улучшении — это о <strong>преобразовании жизни</strong> на самом фундаментальном уровне. "Путь к призванию" — это не просто терапия, это мост между вашим настоящим и будущим, где вы полностью реализуете свой потенциал. Мы работаем напрямую со сверхсознанием, обходя критический фильтр, чтобы вы могли избавиться от ментальных рубцов прошлых психотравм. Это самый быстрый и эффективный путь к осознанию и <strong>живому воплощению</strong> вашего призвания.
  </p>
</div>
</div>
                   </div>
                    </div>
                   <div class="hapiness-img">
                       <img loading="lazy" alt="Счастливые люди после сеанса" src="/hapiness%20img%20block.png">
                   </div>
                </div>
                   <div class="avtor">
                       <div class="avtor-img"></div>
                       <div class="avtor-text">
						   <p><strong>Серик Аубакиров</strong>
                               <span><br>Ваш путеводитель по жизни.<br></span></p>
                       </div>
                   </div>
               </div>
           </div>
</template>
<style>
    .hapiness{
		padding: 90px 0;
        margin-bottom: 120px;
		background-color: #f5f5f5
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

