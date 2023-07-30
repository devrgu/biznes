<template>
  <header>
    <div class="nav-wrap" :class="{'navbar--scrolled': scrolled}">
    <nav class="content">
      <div class="hamburger-menu">
    </div>
      <ul>
       <div class="nav-list">
       <div class="nav-list-content">
        <li class="main-link-navbar"><nuxt-link to="/" exact v-if="phoneicone">ГЛАВНОЕ</nuxt-link></li>
         <li><a href="tel:+87771235176" class="phone"><span v-if="phoneicone">+7 (777) 123 51 76</span> <span class="phone-icon" v-else><phone version="1.0" xmlns="http://www.w3.org/2000/svg"
 					width="64" height="64" viewBox="0 0 512.000000 512.000000"
 					preserveAspectRatio="xMidYMid meet"/></span></a></li>
        </div>
       </div>
             <div class="button" @click="dialogTrue"><p>Нужна помощь?</p></div>
      </ul>
    </nav>
    </div>
    <v-app>
      <v-dialog v-model="name" width="600">
      <div class="close-button" @click="Close">
       <svg role="presentation" class="t-popup__close-icon" width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       <g stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd"><rect transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect><rect transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect></g>
       </svg>
      </div>
       <div class="wrap-close" @click.self="Close">
        <v-card min-height="800" @click="none">
          <div class="window">
            <div class="window-content">
               <div class="window-title">
                       <p>Оставьте заявку для<br>
                           <span>Бесплатной консультаций!</span></p>
                </div>
                   <div class="window-forms">
                <keep-alive>
                <zapisatsa @someEvent="Close"/>

                </keep-alive>
              </div>
            </div>
          </div>
        </v-card>
     </div>
      </v-dialog>
      <span v-html="style" v-if="name"></span>
      <div class="wrap-success">
 	  <v-dialog v-model="success" width="800" content-class="success-dialog">
        <v-card height="400">
          <div class="window">
            <div class="window-content">
               <div class="window-title success-title">
                       <p>Вы успешно оставили заявку<br>
                           <span>Ожидайте ответа</span></p>
                </div>
                 <div class="description-model description-success">
                    <p>Вы готовы изменить свою жизнь, раз и навсегда? Приготовьтесь!</p>
                </div>
                <div class="main-buttons">
                <div class="zapisatsa-button" @click="success = false">
                <nuxt-link to="/">ОТЛИЧНО</nuxt-link>
                </div>
                </div>
            </div>
          </div>
        </v-card>
      </v-dialog>
	 </div>
    </v-app>
  </header>
</template>
<script type="text/javascript">
import { mapGetters } from 'vuex'
import zapisatsa from '~/components/zapisatsa.vue'
import phone from '~/assets/img/phone.svg?inline';	
export default {
  data () {
    return {
        data:'',
        success: false,
        scrolled: false,
        phoneicone: undefined
    }
  },
    components: {
      zapisatsa,
      phone
  },
      computed: {
          ...mapGetters ({
           dialogx: 'dialog/getdialog',
    }),
          name: {
           get(){
             return this.dialogx
           },
           set(newValue){
             this.$store.commit('dialog/dialogMutation', newValue);
            console.log('newValue')
           } 
        },
        style() {
      return (
        `<style> html { height: 100vh;
    min-height: 100vh;
    overflow: hidden;} 
  </style>`
      );
    }
  },
    mounted() {
      this.phoneicone = window.innerWidth > 788;
    window.addEventListener('resize', this.updateWidth);
    window.addEventListener('scroll', this.handleScroll);
    console.log(this.dialogx)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
    methods:{
    none(){
      console.log()
    },
    updateWidth() {
      this.phoneicone = window.innerWidth > 788;
      console.log(this.phoneicone)
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    dialogTrue(){
        this.$store.commit('dialog/dialogMutation', true);
    },
    Close (child) {
      this.$store.commit('dialog/dialogMutation', false);
      if(child == true){
        this.success = true
      }
    },
    Changekonsultatsia () {
      this.component = 'zapisatsa'
    },
    Changezapisatsa () {
      this.component = 'konsultatsia'
    }
    }
  }
    
</script>
<style>
    .content{
      max-width: 1170px;
      margin: 0 auto;
    }
    .v-ripple__container {
      display:none !important;
    }
    nav li a:focus:after, 
    nav li a:hover,
    nav li a.nuxt-link-active,
    nav li a.nuxt-link-exact-active:after{
      color: #FFFFFF;
      cursor: pointer;
      width: 100%;
    }
    .navbar--scrolled {
        background-color: rgba(0, 0, 0, 0.7);
        transition-duration: 0.5s;
    }
    .nav-wrap{
      width: 100%;
      height: 80px;
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 999;
      transition-duration: 0.5s;
    }
    nav {
      height:80px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    nav ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    nav div img{
        width: 150px;
    }
    ul li {
        display: inline-block;
        margin: 20.5px
    }
    li a {
       font-size: 16px;
        font-weight: 500;
        color: #FFFFFF;
        position: relative;
	line-height: 1; /*задаём высоту строки*/
    }
	.phone-icon{
		display: block;
		width: 42px;
		height: 42px;
		background-color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 64px;
		
	}
	.phone-icon svg{
		width: 24px;
	}
	.main-buttons{
		justify-content: center;
	}
    .button p{
        color: #41cb52;
        padding: 11px 30px;
        border-radius: 10px;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.75);
        font-size: 16px;
        font-weight: 700;
        
    }
    .button{
		text-align: center;
        margin-left: 128px;
        cursor: pointer;
    }
    li a {
    text-decoration: none;    
}
   li a:after {
	display: block;
	position: absolute;
	left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
	width: 0;/*задаём длинну линии до наведения курсора*/
	height: 2px; /*задаём ширину линии*/
	background-color: #41cb52
; /*задаём цвет линии*/
	content: "";
	transition: width 0.3s ease-out; /*задаём время анимации*/
}
     .v-application--wrap {
      min-height: unset !important;
      z-index: 1000;
    }
    .v-dialog__content--active{
        overflow: hidden;
    }
	.success-dialog{
		display: flex;
		justify-content: center;
		align-items: center
	}
	  .wrap-close{
		padding: 65px 50px;
	  }
    .theme--dark.v-card {
        background-color: #FFFFFF !important;
    }
    .v-card{
        overflow: hidden;
        font-family: 'Mulish', sans-serif;
        width: 600px;
        margin: 0 auto;
        cursor: auto
    }
    .window{
        margin: 64px 0 64px 0;
        display: flex;
        justify-content: center;
    }
    .close-button{
      width: auto;
      position: absolute;
      top: 16px;
      right: 14.5px;
    }
    .window-content{
        overflow: hidden;
    }
    .window-title{
        font-size: 32px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 56px;
    }
    .window-title span{
        color: #41cb52
    }
    .window-title p{
        color: #1D1919;
    }
    @media (max-width: 788px) {
        .button{
            margin-right: 6vw;
            margin-left: 0;
        }
        nav{
          justify-content:space-between;
        }
        nav ul {
          width: 100%;
        }
		ul .main-link-navbar{
			display: none;
			margin: 0;
		}
      .nav-list{
        margin: 0 30px;
      }
      .window-title{
          font-size: calc(22px + (10 + 10 * 0.7) * ((100vw - 320px) / 788));
        }
  }      
    @media (max-width: 560px) {
        .window-title{
        margin-bottom: 48px;
        }
        .success-title{
		margin-bottom: 36px !important;
	    }
		.nav-list{
			margin: 0;
		}
		.button p{
			font-size: 15px;
			padding: 10px 30px;
		}
    }
      
    @media (min-width: 767px){
         h1 {
          font-size: calc(24px + (16 + 16 * 0.7) * ((100vw - 320px) / 1280));
         }
    }
      
</style>

