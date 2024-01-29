<template>
<div class="konsultatsia">
    <div class="konsultatsia-content">
       <div class="konsultatsia-wrap content">
        <div class="konsultatsia-title title">   
            <h3>"Путь к призванию" — это не просто программа, это ключ к открытию вашей истинной страсти и цели в жизни. Созданная мной, эта уникальная методика уже подарила новый смысл жизни множеству людей, которые когда-то чувствовали себя потерянными и безнадежными. Ваше призвание ждет — начните этот путь уже сегодня!</h3>
        </div>
        <div class="main-button-continue-2 main-button" @click="dialogTrue">
           <a>БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</a>
        </div>
    </div>
    </div>
    <div class="konsultatsia-recvisits">
       <a href="https://t.me/SerukAubakirov">
        <div class="office recvisit">
            <div class="recvisit-box-icon recvisit-box-icon-phone">
                <telegram version="1.0" xmlns="http://www.w3.org/2000/svg"
 					width="64" height="64" viewBox="0 0 512.000000 512.000000"
 					preserveAspectRatio="xMidYMid meet"/>
            </div>
            <div class="recvisit-box-text">
                <div class="recvisit-box-title">
                    <h3>Мой Telegram</h3>
                </div>
                <div class="recvisit-box-information information">
                    <p>@SerukAubakirov</p>
                </div>
            </div>
        </div>
        </a>
        <a href="mailto:saubakirov36@gmail.com">
        <div class="office recvisit">
            <div class="recvisit-box-icon">
                <email version="1.0" xmlns="http://www.w3.org/2000/svg"
 					width="64" height="64" viewBox="0 0 512.000000 512.000000"
 					preserveAspectRatio="xMidYMid meet"/>
            </div>
            <div class="recvisit-box-text">
                <div class="recvisit-box-title">
                    <h3>Электронная почта</h3>
                </div>
                <div class="recvisit-box-information information">
                    <p>saubakirov36@gmail.com</p>
                </div>
            </div>
        </div>
		</a>
        <a href="tel:+87771235176">
        <div class="office recvisit">
            <div class="recvisit-box-icon">
                <phone version="1.0" xmlns="http://www.w3.org/2000/svg"
 					width="64" height="64" viewBox="0 0 512.000000 512.000000"
 					preserveAspectRatio="xMidYMid meet"/>
            </div>
            <div class="recvisit-box-text">
                <div class="recvisit-box-title">
                    <h3>Номер телефона</h3>
                </div>
                <div class="recvisit-box-information information">
                    <p>+8 (777) 123 51 76</p>
                </div>
            </div>
        </div>
		</a>
    </div>
</div>
</template>
<script>
import iconpobeditel from '~/assets/img/iconpobeditel.svg?inline';
import phone from '~/assets/img/phone.svg?inline';
import telegram from '~/assets/img/telegram.svg?inline';
import email from '~/assets/img/email.svg?inline';

export default {
  components: {
    iconpobeditel,
	 phone,
	 telegram,
	  email
  },
  methods:{
	dialogTrue(){
        this.$store.commit('dialog/dialogMutation', true);
    },
  }
}
</script>
<style>
    .konsultatsia{
        min-height: 500px;
        background-color: #FFFFFF;
        margin-bottom: 30px;
    }
    .konsultatsia-content{
        background-color: #19D567;
    }
    .konsultatsia-wrap{
        text-align: center;
        padding-top: 90px;
        padding-bottom: 120px;
        position: relative;
        min-height: 500px;
    }
    div.konsultatsia-title h2{
        color: #FFFFFF;
        font-size: 45px;
        margin: 10px 0 35px 0;
    }
    div.konsultatsia-title h3{
        color: #FFFFFF;
        font-size: 30px;
        font-weight: 600;
        margin: 0 40px 40px
    }
    div .main-button-continue-2{
        background-color: #FFFFFF;
        color: #41cb52;
        display: inline-flex;
        border-radius: 5px;
        height: 55px;
		cursor: pointer
    }
    .konsultatsia-recvisits{
        display: flex;
        position: relative;
        bottom: 70px;
        justify-content: center;
        flex-wrap: wrap;
    }
	.konsultatsia-recvisits a{
		all: unset;
		display: contents;
	}
    .recvisit{
        width: 353px;
        height: 90px;
        box-sizing: content-box;
        background: #ffffff;
        box-shadow: 0 0 5px rgb(0 0 0 / 25%);
        border-bottom: 3px solid #41cb52;
        border-radius: 6px 6px 6px 6px;
        padding: 30px 20px 25px 20px;
        position: relative;
        display: flex;
        margin: 0 10px 24px 10px;
		cursor: pointer;
    }
    .recvisit-box-text{
        text-align: initial !important;
        margin-top: 5px;
    }
    .recvisit-box-icon{
        flex-shrink: 0;
        width: 90px;
        height: 90px;
        border-radius: 90px;
        background-color: #f7f9fa;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 20px;
    }
    .recvisit-box-icon svg{
        width: 38px;
    }
    .recvisit-box-icon svg path{
        fill: #41cb52 !important;
    }
    .recvisit-box-title h3{
        color: #232323;
        font-size: 18px;
        text-transform: uppercase;
        line-height: 1.3;
        margin: 10px 0;
    }
    .recvisit-box-information{
        font-size: 16px;
        color: #616161;
    }
    @media (max-width: 767px) {
        div.konsultatsia-title h3{
            font-size: calc(17px + (19 + 19 * 0.7) * ((100vw - 320px) / 1280)) !important;
            margin: 0 0 10px;
        }
        div .main-button-continue-2{
            margin-top: 40px;
        }
    }
    @media (max-width: 360px) {
        .recvisit-box-title h3{
            font-size: 16px
        }
    }
    @media (max-width: 440px){
        .recvisit{
            width: 100%;
        }
    }
</style>