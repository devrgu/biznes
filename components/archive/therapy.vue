<template>
            <div class="therapy-from-serik">
              <div class="tfs-title subtitle title">
                  <h2>Что вы получите от меня<br>во время лечения?</h2>
                  <div class="hr-center">
                      <hr>
                  </div>
                  <p>Не упустите такие возможности в вашей жизни.</p>
              </div>
               <div class="tfs-content">
                   <div class="tfs-block-1 tfs-block">
                   <div class="tfs-block-content">
                    <div class="tfs-flex-icon">
                     <div class="tfs-wrap-icon">
                      <div class="tfs-block-icon">
                           <img src="/iconpobeditel.svg">
                       </div>
                      </div>
                     </div> 
                       <div class="tfs-block-title">
                           <h2>Найдем корни ваших<br>проблем</h2>
                       </div>
                       <div class="tfs-block-text">
                           <p>У вас включится подсознательный процесс исцеления и регенераций здоровья. Онкологические заболевания в большинстве случаев связанные с депрессией и негативными эмоциями, ГАРАНТИРОВАННО начнут лечиться!</p>
                       </div>
                    </div>
                   </div>
                   
                   <div class="tfs-block-2 tfs-block">
                   <div class="tfs-block-content">
                    <div class="tfs-flex-icon">
                     <div class="tfs-wrap-icon">
                      <div class="tfs-block-icon">
                           <img src="/mislipravilnie.svg">
                       </div>
                      </div>
                    </div>
                       <div class="tfs-block-title">
                           <h2>Активируется подсознательное исцеление</h2>
                       </div>
                       <div class="tfs-block-text">
                           <p>В процессе лечения, найдем эмоциональные травмы или же инфовирус, который оброс корнем как паразит высасывая жизненную энергию. Эти "убеждения", привели бы вас к самоуничтожению. Мы вместе с вами остановим и вырвем с корнем их, улучшев ваше мировозрение.</p>
                       </div>
                       </div>
                   </div>
                   
                   <div class="tfs-block-3 tfs-block">
                   <div class="tfs-block-content">
                    <div class="tfs-flex-icon">
                     <div class="tfs-wrap-icon">
                      <div class="tfs-block-icon">
                           <img src="/iconpobeditel.svg">
                       </div>
                      </div> 
                    </div> 
                         
                       <div class="tfs-block-title">
                           <h2>У вас будет исцеление<br>тела и разума</h2>
                       </div>
                       <div class="tfs-block-text">
                           <p>Вы будете в процессе "чувствовать" и "видеть", в вашем нынешнем пути, продвижение в делах, бизнесе, отношениях, избавитесь от токсичных личностей в окружений.</p>
                       </div>
                   </div>
                   </div> 
               </div>
               
    </div> 
</template>
<style>
    .therapy-from-serik{
        margin: 100px 0;
    }
    .tfs-title{
        margin-bottom: 75px;
    }
    .tfs-block{
        width: 360px;
        height: 440px;
        background-color: #FFFFFF;
        border-radius: 7px;
        margin: 0 10px;
        box-shadow: 6px 5px 30px 0px rgb(0 0 0 / 12%);
        text-align: center;
        transition: .4s;
    }
    .tfs-block:hover{
        background-color: #41cb52;
        transform: translateY(-10px);
         box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
    }
    .tfs-block-content{
        padding: 20px 10px;
    }
    .tfs-block:hover .tfs-block-content div{
        color: #FFFFFF;
    }
    .tfs-block:hover .tfs-wrap-icon{
        background-color: #FFFFFF;
    }
    .tfs-block:hover .tfs-block-title h2{
        color: #FFFFFF;
    }
    .tfs-block:hover .tfs-block-text p{
        color: #FFFFFF;
    }
    .tfs-block:hover .tfs-block-text a{
        color: #FFFFFF;
    }
    .tfs-block:hover .tfs-block-text a i path{
        fill: #FFFFFF;
        transition: .8s;
    }
    .tfs-flex-icon{
        display: flex;
        justify-content: center;
        margin-bottom: 12px;
    }
    .tfs-wrap-icon{
        width: 130px;
        height: 130px;
        background-color: #edf4fc;
        border-radius: 100px;
         display: flex;
        justify-content: center;
        align-items: center;
       
    }
    .tfs-block-title h2{
        font-size: 23px;
        color: #232323;
        font-weight: 700;
        margin: 10px 0 10px;
    }
    .tfs-block-text p{
        font-size: 16px;
        color: #616161;
        font-weight: 400;
    }
    .tfs-block-text a{
        font-size: 14px;
        color: #326BFF;
        font-weight: 700;
        display: inline-block;
        margin-top: 25px;
    }
    .tfs-block-text a i{
        vertical-align: middle;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        margin-left: 7px;
    }
    .tfs-block-text a i path{
        fill:#326BFF;
    }
    .tfs-title{
        text-align: center
    }
    .tfs-content{
        display: flex;
        justify-content: space-between;
        max-width: 1150px;
        margin: 0 auto;
        flex-wrap: wrap;
    }
    @media (max-width: 1139px){
    .tfs-content{
        justify-content: center;
    }
        .tfs-block{
        width: 50%;
        margin: 16px 12px;
        display: flex
    }
        .tfs-block-content{
            padding: 30px 20px;
        }
    }
    @media (max-width: 900px){
        .tfs-block{
        width: 100%;
    }
    }
    @media (max-width: 565px){
        .title p{
            font-size: 17px;
        }
    }
    @media (max-width: 440px){
        .tfs-block{
            margin: 16px 0;
            min-height:440px;
            display: inline-table;
        }
        .tfs-block-title h2{
            font-size: 20px
        }
    }
</style>