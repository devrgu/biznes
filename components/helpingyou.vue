<template>
    <div class="whatdoing">
        <div class="whatdoing-content content">
            <div class="whatdoing-img">
                <img src="/serik.jpg" alt="Целитель гипнотерапевт Серик Аубакиров">
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
						Меня зовут <strong>Серик Аубакиров,</strong> я сертифицированный <strong>специалист</strong> и <strong>эксперт American Academy Holistic Mind Therapy.</strong></span>
						<span>Обращайтесь ко мне, я знаю всю вашу <strong>боль.</strong> Я знаю, как пройти через это. Вам в <strong>подсознание</strong> нужен образ новой жизни, которое вы воспримите в реальности. Работая с вашим подсознанием и личными убеждениями, я помогу вам <strong>найти свою настоящую страсть и призвание в жизни!</strong> Только при этом раскладе, вы наконец-то <strong>обретете настоящее наслаждение и успех от вашего дела!</strong></span>
						<span>Я <strong>не очередной семейный психолог,</strong>к которому нужно ходить как на работу. Вам <strong>не понадобится много сеансов,</strong> ведь я не просто выслушиваю своих пациентов, а помогаю <strong>устранить первопричину проблем, в поиске вашего призвания</strong> и даю вам <strong>четкие инструкции,</strong> как <strong>найти свое призвание и дело вашей жизни!</strong></span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .whatdoing{
        padding: 60px 0 90px 0;
		background-color: #f5f5f5
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
		margin: 0 !important;
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
            flex-wrap: wrap;
			max-width: 767px !important;
        }
        .whatdoing-img{
            display: flex;
			justify-content: center;
			order: 1;
			margin: 20px 20px 0px;
        }
		.whatdoing-img img{
			width: 565px;
			position: static;
		}
        .whatdoing-text{
            margin: 48px 20px 0 25px;
            min-width: 0;
        }
    }
	@media (max-width: 767px) {
		.information{
			font-size: calc(17px + (2 + 2 * 0.7) * ((100vw - 320px) / 1280)) !important;
		}
	}
	@media (max-width: 560px){
		.whatdoing-img img{
			height: 450px;
		}
	}
    @media (max-width: 465px){
        .whatdoing-text{
            margin-left: 16px;
            margin-right: 16px
        }
    }
	@media (max-width: 465px){
		.whatdoing-img img{
			height: 400px;
		}
	}
</style>