<template>
  <header>
    <div class="nav-wrap" :class="{'navbar--scrolled': scrolled}">
    <nav class="content">
      <div class="hamburger-menu" @click="isActive = !isActive">
      <div class="bar-wrap">
       <div class="bar" :class="{animate: isActive}"></div>
       </div>
    </div>
      <ul>
       <div class="nav-list" v-show="isActive">
       <div class="nav-list-content">
        <li><nuxt-link to="/" exact>ГЛАВНОЕ</nuxt-link></li>
          <li><a href="tel:+87771235176">+7 (777) 123 51 76</a></li>
        </div>
       </div>
             <div class="button" @click="dialogTrue"><p>ЗАПИСАТЬСЯ</p></div>
      </ul>
    </nav>
    </div>
    <v-app>
      <v-dialog v-model="name">
      <div class="close-button" @click="Close">
       <svg role="presentation" class="t-popup__close-icon" width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       <g stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd"><rect transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect><rect transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) " x="10.3137085" y="-3.6862915" width="2" height="30"></rect></g>
       </svg>
      </div>
        <v-card height="800">
          <div class="window">
            <div class="window-content">
               <div class="window-title">
                       <p>Оставьте заявку для<br>
                           <span>Обратной связи</span></p>
                </div>
                   <div class="window-forms">
                <keep-alive>
                <zapisatsa @someEvent="Close"/>

                </keep-alive>
              </div>
            </div>
          </div>
        </v-card>
      </v-dialog>
      <v-dialog v-model="success" width="800">
        <v-card height="400">
          <div class="window">
            <div class="window-content">
               <div class="window-title success-title">
                       <p>Вы успешно оставили заявку<br>
                           <span>Ожидайте ответа</span></p>
                </div>
                 <div class="description-model">
                    <p>Вы готовы изменить свою жизнь, раз и навсегда? Приготовьтесь!</p>
                </div>
                <div class="main-buttons">
                <div class="zapisatsa-button" @click="success = false">
                <nuxt-link to="/success">ОТЛИЧНО</nuxt-link>
                </div>
                </div>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </v-app>
  </header>
</template>
<script>
import { mapGetters } from 'vuex'
import zapisatsa from '~/components/zapisatsa.vue'
export default {
  data () {
    return {
        data:'',
        success: false,
        isActive: undefined,
        scrolled: false
    }
  },
    components: {
      zapisatsa,
      
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
  },
    mounted() {
    this.handleView();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("resize", this.handleView)
    console.log(this.dialogx)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
    methods:{
         handleView() {
      window.innerWidth <= 768
        ? (this.isActive = false)
        : (this.isActive = true);
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
    @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900;1000&display=swap');
    .content{
      max-width: 1170px;
      margin: 0 auto;
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
        background-color: #6666;
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
    li a img {
        vertical-align: middle;
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
    .theme--dark.v-card {
        background-color: #FFFFFF !important;
    }
    .v-card{
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;
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
      right: 16px;
    }
    .window-content{
        overflow: hidden;
    }
    .window-title{
        font-size: 32px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 56px;
    }
    .window-title span{
        color: #41cb52
    }
    .window-title p{
        color: #1D1919;
    }
    @media (max-width: 768px) {
        .button{
            margin-right: 6vw;
            margin-left: 0;
        }
        .hamburger-menu{
          margin-left: 32px;

        }
        nav{
          justify-content:space-between;
        }
    @media (max-width: 560px) {
        .window-title{
        font-size: 6vw;
        font-weight: 600;
        text-align: center;
        margin-bottom: 48px;
        }    
    }
      
    @media (min-width: 767px){
         h1 {
          font-size: calc(24px + (16 + 16 * 0.7) * ((100vw - 320px) / 1280));
         }
    }
        
        .hamburger-menu {
        display: block;
        padding-right: 40px;
        height: 54px;
        cursor: pointer;
}
    .nav-list{
        position: absolute;
        left: 0;
        top: 80px;
        background-color: #1D1919;
        width: 250px;
        height: 70vh;
        z-index: 10;
    }
    .nav-list-content li{
        margin: 0;
        display: block;
        text-align: center;
    }
    .nav-list-content li a{
        font-size: 16px;
        padding: 24px 0;
        display: block;
        border-bottom: 1px solid #A7A7A7;
    }
        li a:after{
            height: 0px;
        }
        nav li a.nuxt-link-active,
        nav li a.nuxt-link-exact-active:after{
          background-color: #326BFF;
          cursor: pointer;
        }
        @media (max-width: 370px) {
            .window{
                margin: 48px 0;
            }
        }
        @media (max-width: 330px) {
            
        }
.bar,
.bar:after,
.bar:before {
  width: 40px;
  height: 4.5px;
}

.bar {
  position: relative;
  transform: translateY(25px);
  background: white;
  transition: all 0ms 300ms;
}
.bar.animate {
  background: rgba(255, 255, 255, 0);
}

.bar:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 13px;
  background: white;
  transition: bottom 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.bar:after {
  content: "";
  position: absolute;
  left: 0;
  top: 13px;
  background: white;
  transition: top 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.bar.animate:after {
  top: 0;
  transform: rotate(45deg);
  transition: top 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
}

.bar.animate:before {
  bottom: 0;
  transform: rotate(-45deg);
  transition: bottom 300ms cubic-bezier(0.23, 1, 0.32, 1), transform 300ms 300ms cubic-bezier(0.23, 1, 0.32, 1);
}
         
    }
</style>

