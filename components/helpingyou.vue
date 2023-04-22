<template>
    <div class="whatdoing">
        <div class="whatdoing-content content">
            <div class="whatdoing-img">
                <img src="/photo-section-1.jpeg">
            </div>
            <div class="whatdoing-text">
                <div class="whatdoing-title title">
                    <h2>Вы не потеряли надежду?<br> <span>Значит выход есть!</span></h2>
                    <div class="hr-center">
                    <hr>
                    </div>
                </div>
                <div class="whatdoing-information information">
                    <p>
                    <span>
Меня зовут Серик Аубакиров, я сертифицированный специалист и эксперт American Academy Holistic Mind Therapy.</span>
<span>Обращайтесь ко мне, я знаю всю вашу боль. Я знаю, как пройти через это. Вам в подсознание нужен образ мира, которого вы не замечаете. Это ваше притяжение! Я приведу вас в ресурсное состояние покоя. Только при этом раскладе у вас откроется притяжение успеха ваших действий.</span>
<span>Я не очередной семейный психолог, к которому нужно ходить как на работу. Вам не понадобится много сеансов, ведь я не просто выслушиваю своих пациентов, а помогаю устранить первопричину проблем в бизнесе и даю четкие инструкции, как снова привести свою жизнь в порядок и забыть проблемы которые когда-то не оставляли вас в покое.</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .whatdoing{
        padding: 60px 0 10px 0    
    }
    .whatdoing-content{
        display: flex;
    }
    .title p{
        font-size: 18px;
        color: #666
    }
    .title h2{
        color: #232323;
        font-size: 39px;
        font-weight: 800;
        line-height: 1.2;
    }
    .title h2 span{
        color: #41cb52;
    }
    .whatdoing-img{
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    .whatdoing-img img{
        width: 100%;
        height: 565px;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }

    .whatdoing-text{
        margin-left: 25px;
        min-width: 553px;
        flex-shrink: 6;
    }
    .whatdoing-title{
        display: inline-block;
    }
    .information{
        color: #343a40;
        font-size: 18px;
    }
    .information p span{
        margin: 6px 0;
        display: inline-block;
    }
    
    .avtor{
        display: flex;
        margin: 32px 0 0 24px;
    }
    @media (max-width: 991px){
        .whatdoing-content{
            flex-wrap: wrap
        }
        .whatdoing-img{
            padding: 0 0 58% 0;
        }
        .whatdoing-text{
            margin-top: 48px;
            min-width: 0;
        }
    }
    @media (max-width: 767px){
        .title h2{
            font-size: calc(28px + (16 + 16 * 0.7) * ((100vw - 320px) / 1280));
        }
    }
    @media (max-width: 465px){
        .whatdoing-text{
            margin-left: 16px;
            margin-right: 16px
        }
        .whatdoing-img{
            padding: 0 0 270px 0;
        }
        .whatdoing-img img{
            top: -70px;
        }
    }
</style>