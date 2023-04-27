<template>
<div class="main-page">
  <mainw></mainw>
  <problem></problem>
  <helpingyou></helpingyou>
  <problem-2></problem-2>
  <konsultatsia></konsultatsia>
  <sections></sections>
  <whyme></whyme>
  <mygoal></mygoal>
  <conque></conque>
  <reklama></reklama>
</div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
      name: 'IndexPage',
     computed: {
          ...mapGetters ({
           dialogx: 'dialog/getdialog',
    }),
          name: {
           get(){
             return this.dialogx
           },
        },
  },
  }
  
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900;1000&display=swap');
  /* Указываем box sizing */
  $body-font-family: 'Mulish';
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Убираем внутренние отступы */
ul[class],
ol[class] {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
    font-family: 'Mulish', sans-serif;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
    color: #FFFFFF;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    overflow: hidden;
}

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
  text-decoration-line: auto
}

/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
}
/* Указываем понятную периодичность в потоке данных у article*/

    .body{
        margin: 120px 0 0;
    }
  .line{
    text-align: center;
  }
  .line hr{
    width: 30%;
    background-color: #41cb52;
    height: 5px;
    border: none;
    display: inline-block;
    border-radius: 100%;
  }
  .noscroll{
    position: fixed;
    width: 100%;
  }
</style>