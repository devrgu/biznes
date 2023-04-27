<template>
<div class="problem">
    <div class="problem-content content">
        <div class="problem-title title">
            <h2>Вы устали от этой знакомой боли?</h2>
        </div>
        <div class="problem-sections">
            <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/family_problem.svg"></div>
               <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-information problem-section-information">
                 Отношения: вы сталкиваетесь с трудностями в отношениях, как личных, так и профессиональных, из-за того, что ваши расписания и обязательства могут создавать проблемы в поддержании баланса между работой и личной жизнью?
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/have_not_time.svg"></div>
               <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-information problem-section-information">
                 Управление временем: у вас часто очень много дел, и вы сталкиваетесь с трудностями в управлении своим временем и приоритетами?
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/zavist.svg"></div>
               <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-information problem-section-information">
                 Стресс и давление: вы сталкиваетесь с высоким уровнем стресса и давления, связанным с необходимостью постоянно принимать важные решения и поддерживать свой бизнес или работу?
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/agression.svg"></div>
               <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-information problem-section-information">
                 У вас ужасная агрессия? Вы не можете контролировать свою ярость? Вас раздражает, когда Ваши дети и родственники Вас не слушаются и это Вас бесит? Даже ваша собака Вас подбешивает.
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/ghost.svg"></div>
               <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-information problem-section-information">
                 Вам очень трудно доверять людям. Вы встречаете многих, но никогда не сближаетесь из-за страха потерять финансы. Вы сомневаетесь, действительно ли вы кому-то нравитесь или у них на уме лишь выгоды?
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/broke_heart.svg"></div>
               <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-information problem-section-information">
                 Проблемы здоровья: в связи с высоким уровнем стресса и давления, вы сталкиваетесь с проблемами здоровья, такими как бессонница, высокое кровяное давление?
                </div>
            </div>
            </div>
    </div>
</div>
</div>
</template>
<script>
</script>
<style>
    .problem{
        margin-top: 100px;
    }
    .problem-content{
        text-align: center;
    }
    .problem-sections{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 80px 0 0 0;
    }
    .problem-section{
        max-width: 350px;
        margin: 20px;
        padding-bottom: 20px;
        text-align: center
    }
    .problem-section-icon{
        height: 100px;
        width: 100px;
        background-color:#41cb52;
        border-radius: 100px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .problem-section-icon img{
        width: 56px;
    }
    .problem-section-information{
        color: #616161;
        margin-top: 10px;
    }
    .title{
        white-space: normal !important
    }
    .title h3{
        font-size: 18px;
    }
</style>