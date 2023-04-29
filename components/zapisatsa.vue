<template>
   <div class="zapis">
    <div class="dd">
    <div class="zapis-content">
        <div class="name-block block">
            <label>Ваше имя</label>
            <input class="name" ref="name" v-model="name" placeholder="Иван">
        </div>
        <div class="surname-block block">
            <label>Фамилия</label>
            <input class="surname" ref="surname" v-model="surname" placeholder="Смирнов">
        </div>
        <div class="email-block block">
            <label>Ваш E-mail</label>
            <input class="email" type="email" ref="email" v-model="email" placeholder="example@gmail.com">
        </div>
        <div class="email-block block">
            <label>Телефон / Whatsapp</label>
            <input class="number" type="number" ref="number" v-model="number" placeholder="+7 (999) 999 99 99">
        </div>
        <div class="textarea-block block">
            <label>Кратко опишите проблему</label> 
            <textarea v-model="problem" ref="problem" placeholder="Опишите проблему, вопросы, предложения."></textarea>
        </div>
         <div class="textarea-block block">
            <label>Удобное время, день недели для бесплатной консультаций</label> 
            <textarea v-model="date" ref="date" placeholder=""></textarea>
        </div>
    </div>
    </div>
    <div class="description-model">
                    <p>Нажимая на кнопку "Отправить заявку" Вы соглашаетесь с политикой конфиденциальности <nuxt-link to="/rights">Серика Аубакирова.</nuxt-link></p>
                </div>
                       <div class="main-buttons">
                <div class="zapisatsa-button" @click.prevent="send"  @click="$emit('someEvent', child)">
                <nuxt-link to="/">ОТПРАВИТЬ</nuxt-link>
                </div>
                </div>
</div>
</template>
<script>
    export default{
        data () {
    return {
        name: '',
        surname: '',
        email: '',
        number: '',
        problem: '',
        date: '',
        child: true 
    }
  },
        methods: {
    send() {
      this.$axios.$post('/mail/send',{
        from: 'ededededdd',
        subject: 'Contact form message',
        html: `Имя:${this.name},<br>Фамилия:${this.surname}<br>Почта:${this.email}<br>Номер:${this.number}
        <br>Проблема: ${this.problem}<br>Дата: ${this.date}`
      });
		const fullMessage = `Имя:${this.name}%0AФамилия:${this.surname}%0AПочта: ${this.email}%0AНомер: ${this.number}%0AПроблема: ${this.problem}%0AДата: ${this.date}`; 
		
		this.$axios.$post(`https://api.telegram.org/bot5956781144:AAHys-gKAYhLx6UcXRPgJCVuj38gJmQyrrI/sendMessage?chat_id=990445348&text=${fullMessage}`);
		
		this.name = '',
        this.surname = '',
        this.email = '',
        this.number = '',
        this.problem = '',
        this.date = ''
   },
            
 }
}

</script>
<style scoped>
    .dd{
        display: flex;
        justify-content: center;
    }
    .zapis-content{
        overflow: hidden;
        padding: 0 24px;
    }
    .block{
         max-width: 400px;
         margin-bottom: 32px;
    }
    .block label{
        display: inline-block;
        width: 100%;
        font-size: 18px;
        font-weight: 300;
        color: #000;
        vertical-align: middle;
        height: 100%;
        padding-right: 10px;
        padding-bottom: 5px;
    } 
    .block input{
        box-sizing: border-box;
        width: 100%;
        height: 55px;
        border: 1px solid rgba(0, 66, 105, 0.28);
        background-color: #FFFFFF;
        color: black;
        padding-left: 12px;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.33;
        border-radius: 4px;
        outline: none;
    }
    .block textarea{
        box-sizing: border-box;
        width: 100%;
        height: 90px;
        background-color: #FFFFFF;
        border: 1px solid rgba(0, 66, 105, 0.28);
        padding: 8px 0 0 12px;
        font-size: 18px;
        font-weight: 500;
        border-radius: 4px;
        outline: none;
    }
    .main-buttons{
        justify-content: center;
    }
</style>
<style>
.main-buttons{
    display: flex;
}
.zapisatsa-button{
        margin: 4px !important;
        align-self: center;
        background-color: #41cb52;;
        border-radius: 100px;
        width: 240px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .zapisatsa-button a{
        margin: 0;
        line-height: normal;
        text-decoration: none;
        color: #FFFFFF;
        text-align: -webkit-center;
        vertical-align: middle;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .description-model{
        text-align: center;
        font-size: 14px;
        margin-bottom: 24px;
        padding: 0 24px;
        color: #666 !important;
        background: none;
    }
    .description-model p a{
        font-weight: 700;
        font-size: 15px;
        color: #41cb52;
    }
  .v-dialog::-webkit-scrollbar{
    display: none
  }
  .v-dialog{
        width: 100% !important;
        margin: 0 !important;
        cursor: pointer;
        box-shadow: none !important;
      }
  .v-dialog:not(.v-dialog--fullscreen){
      max-height: none;
      height: 100% !important;
    }
  @media (max-width: 560px) {
        .main-buttons{
            flex-wrap: wrap;
        }
	  	.wrap-close{
			padding: 0px !important;
	  	}
       .v-dialog__content{
        padding-top: 50px !important;
      }
	  .v-dialog__content--active{
		  background-color: #000
	  }
	  .wrap-success .v-dialog__content--active{
		  background-color: none
	  }
      .block input{
          height: 50px !important
      }
    }
</style>