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
               <div class="problem-section-1-titile problem-section-title title"><h3>Чувство потерянности и неопределенности</h3></div>
                <div class="problem-section-1-information problem-section-information">
					Вы без четкого понимания своего призвания можете чувствовать себя потерянным в мире возможностей, не зная, какой путь выбрать. Это чувство неопределенности может вызывать стресс и тревогу.
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/have_not_time.svg"></div>
               <div class="problem-section-1-text problem-section-text">
               <div class="problem-section-1-titile problem-section-title title"><h3>Недовольство текущей работой или карьерой</h3></div>
                <div class="problem-section-1-information problem-section-information">
					Ваша работа, которая не соответствует внутренним убеждениям и страстям, может вызывать ощущение застоя и уныния, делая каждый рабочий день испытанием.
                </div>
             </div>
             </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/zavist.svg"></div>
               <div class="problem-section-1-text problem-section-text">
				<div class="problem-section-1-titile problem-section-title title"><h3>Страх перед будущим и принятием решений</h3></div>
                <div class="problem-section-1-information problem-section-information">
					Боязнь сделать "неправильный" выбор может парализовать и мешать двигаться вперед, в результате чего вы остаетесь на месте, несмотря на желание изменений.
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/agression.svg"></div>
               <div class="problem-section-1-text problem-section-text">
               <div class="problem-section-1-titile problem-section-title title"><h3>Сравнение себя с другими</h3></div>
                <div class="problem-section-1-information problem-section-information">
					Наблюдение за успехами сверстников, которые, кажется, нашли свое призвание, может усилить чувство неполноценности и зависти, углубляя личный кризис.
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/ghost.svg"></div>
               <div class="problem-section-1-text problem-section-text">
               <div class="problem-section-1-titile problem-section-title title"><h3>Разочарование от неудачных попыток найти свое призвание</h3></div>
                <div class="problem-section-1-information problem-section-information">
					Многократные попытки найти страсть и неудачи в этих стремлениях могут привести к депрессий и сомнениям в своих способностях.
                </div>
            </div>
            </div>
             <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/broke_heart.svg"></div>
               <div class="problem-section-1-text problem-section-text">
               <div class="problem-section-1-titile problem-section-title title"><h3>Ощущение упущенного времени и возможностей</h3></div>
                <div class="problem-section-1-information problem-section-information">
					С годами может возникнуть чувство, что слишком поздно что-либо менять, и что лучшие годы и возможности уже упущены.
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