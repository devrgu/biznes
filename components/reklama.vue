<template>
   <div class="otzivi">
    <div class="otzivi-content content">
      <div class="otzivi-titles">
        <div class="title">
           <div class="decorate-word"><p>#А чего вы ждете?</p></div>
            <h2>Счастливые люди, сделавшие<br><span>правильный выбор!</span></h2>
        </div>
    </div>
    <div class="video-content">
       <div class="video-row1 video-row">
        <div class="1-block-video block-video">
            <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/OAZcjdgQCv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="2-block-video block-video">
           <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/98ce17-TOJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        </div>
        <div class="video-row2 video-row">
        <div class="1-block-video block-video">
            <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/P5p-5VIDvuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="2-block-video block-video">
            <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/hwYjwam3LoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
		</div>
       <div class="video-row3 video-row">
        <div class="1-block-video block-video">
            <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/-iWjUG3xA2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="2-block-video block-video">
        <iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/p1yxLen1Ppc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
	</div>
    </div>
    </div>
</div>
</template>
<style scoped>
    .otzivi{
        display: flex;
        justify-content: center;
        text-align: center;
        overflow: hidden;
    }
    .otzivi-content{
          overflow: hidden;
    }
    .title{
		margin: 80px 0;
    }
    .decorate-word{
        text-align: center;
        
    }
    .otzivi-titles{
        margin-bottom: 64px;
    }
    .video-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
	.video-row{
		display: flex
	}
    .block-video{
        margin: 24px;
        
	}
	@media (max-width: 1260px) {
		.video-content {
         transform: scale(0.85); 
        }
		.title{
		 margin: 80px 0 0;
    	}
		.otzivi-titles{
         margin-bottom: 0;
    	}
	}
	@media (max-width: 1040px) {
		.video-content {
         transform: scale(0.75);
        }
		.otzivi-titles{
         margin-bottom: -5%;
    	}
	}
	@media (max-width: 940px) {
		.video-row{
		flex-wrap: wrap;
		justify-content: center
		}
		.video-content {
		 display: contents;
         transform: scale(1.5);
		 }
		.otzivi-titles{
         margin-bottom: 64px;
    	}
	}
    @media (max-width: 800px) {
		.video-content {
			transform: scale(1)
		}
    }
	@media (max-width: 600px) {
		iframe{
			width: 93.333vw;
			height: 52.500vw
		}
		
    }
	@media (max-width: 500px) {
		.video-content {
         transform: scale(0.75); 
        }
	}
	@media (max-width: 435px) {
		.video-content {
         transform: scale(0.65); 
        }
	}
    @media (max-width: 568px) {
        .decorate-word{
          text-align: center;
        
    }
    }
    @media (max-width: 390px) {
        
        
        
    }

</style>