<template>

    <div id="box">
        <div class="box-title">
            <textarea class="input-title"  placeholder="输入标题"></textarea>
            <hr>
        </div>
        
        <div class="box-img">
            <img src="#" alt="" />
            <input id="file-img" ref="fileImg" type="file" value="选择图片" @change="show_img">
            <hr>
        </div>

        <div class="box-step">
            <span>步骤：</span>
            <br>
            <textarea class="input-content" cols="30" rows="10"></textarea>
            <hr>
        </div>
        
        <input class="btn-send" type="button" value="发表">
    </div>

</template>
<script>
    export default {
        data() {
            return {
                srcImg: ''
            }
        },
        methods: {
            show_img: function(e) {
                var file = this.$refs.fileImg.files[0] ;
                var reader  = new FileReader();

                reader.readAsDataURL(file);
                
                console.log(reader.__proto__.result);
            }
        },
        watch: {
            srcImg (val , oldVal){
                if (val != oldVal){
                     alert("111");
                }
            }
        }
    }
    
</script>
<style>
    @import './style/style.css'
</style>


