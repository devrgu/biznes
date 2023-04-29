<template>
<div class="problem">
    <div class="problem-content content">
        <div class="problem-title title">
			<h2>Вы устали от этой знакомой <span>боли?</span></h2>
        </div>
        <div class="problem-sections">
            <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/family_problem.svg"></div>
               <div class="problem-section-1-text problem-section-text">
               <div class="problem-section-1-titile problem-section-title title"><h3>Отношения</h3></div>
                <div class="problem-section-1-information problem-section-information">
					вы сталкиваетесь с <strong>трудностями в отношениях</strong>, как личных, так и профессиональных, из-за того, что ваши расписания и обязательства могут <strong>создавать проблемы</strong> в поддержании баланса между работой и личной жизнью?
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/have_not_time.svg"></div>
               <div class="problem-section-1-text problem-section-text">
               <div class="problem-section-1-titile problem-section-title title"><h3>Управление временем</h3></div>
                <div class="problem-section-1-information problem-section-information">
					у вас часто <strong>очень много дел</strong>, и вы сталкиваетесь с трудностями в управлении своим <strong>временем и приоритетами?</strong>
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/zavist.svg"></div>
               <div class="problem-section-1-text problem-section-text">
				<div class="problem-section-1-titile problem-section-title title"><h3>Стресс и давление</h3></div>
                <div class="problem-section-1-information problem-section-information">
					вы сталкиваетесь с <strong>высоким уровнем стресса и давления</strong>, связанным с необходимостью постоянно принимать <strong>важные решения и поддерживать свой бизнес или работу?</strong>
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/agression.svg"></div>
               <div class="problem-section-1-text problem-section-text">
               <div class="problem-section-1-titile problem-section-title title"><h3>Ужасная агрессия?</h3></div>
                <div class="problem-section-1-information problem-section-information">
					У вас <strong>ужасная агрессия?</strong> Вы <strong>не можете контролировать свою ярость?</strong> Вас <strong>раздражает</strong>, когда Ваши дети и родственники Вас не слушаются и это <strong>Вас бесит?</strong> Даже ваша собака Вас <strong>подбешивает</strong>.
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/ghost.svg"></div>
               <div class="problem-section-1-text problem-section-text">
               <div class="problem-section-1-titile problem-section-title title"><h3>Доверие и взаимопонимание</h3></div>
                <div class="problem-section-1-information problem-section-information">
					Вам очень <strong>трудно доверять людям</strong>. Вы встречаете многих, но <strong>никогда не сближаетесь</strong> из-за <strong>страха потерять финансы</strong>. Вы сомневаетесь, действительно ли вы кому-то нравитесь или у них на уме лишь <strong>выгоды?</strong>
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/broke_heart.svg"></div>
               <div class="problem-section-1-text problem-section-text">
               <div class="problem-section-1-titile problem-section-title title"><h3>Проблемы здоровья</h3></div>
                <div class="problem-section-1-information problem-section-information">
					в связи с <strong>высоким уровнем стресса и давления</strong>, вы сталкиваетесь с проблемами <strong>здоровья</strong>, такими как <strong>бессонница</strong>, <strong>высокое кровяное давление?</strong>
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
        margin: 100px 0 40px;
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
        padding-bottom: 35px;
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
        margin-bottom: 10px;
    }
    .problem-section-icon img{
        width: 56px;
    }
	.problem-section-text .title{
		margin: 20px 0 12px !important;
	}
	.problem-title span{
		color: rgb(219, 33, 33) !important;
	}
    .problem-section-information{
        color: #616161;
        margin-top: 12px;
    }
    .title{
        white-space: normal !important
    }
    .title h3{
        font-size: 18px;
    }
</style>