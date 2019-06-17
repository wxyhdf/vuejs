<template>
  <div id="edit-blog">
    <h1>编辑博客</h1>
    <form v-if="!submited">
          <label>博客标题</label>
          <input type="text" v-model="blog.title" required/>
          <label>博客内容</label>
          <textarea v-model="blog.content"></textarea>

          <div id="checkboxes">
              <label>明星</label>
              <input type="checkbox" value="明星" v-model="blog.categories">
              <label>音乐</label>
              <input type="checkbox" value="音乐" v-model="blog.categories">
              <label>动漫</label>
              <input type="checkbox" value="动漫" v-model="blog.categories">
              <label>竞技</label>
              <input type="checkbox" value="竞技" v-model="blog.categories">
              <label>运动</label>
              <input type="checkbox" value="运动" v-model="blog.categories">
          </div>
          <label>作者</label>
          <select v-model="blog.author">
            <option v-for="author in authors">{{author}}</option>
          </select>
          <button v-on:click.prevent="post">编辑博客</button>
    </form>

       <hr>

      <div id="preview">
          <p v-if="submited">编辑博客成功</p>
           <h3>博客总览:</h3>
           <p>博客标题:{{blog.title}}</p>
           <p>博客内容:</p>
           <p>{{blog.content}}</p>
           <p>博客分类：</p>
           <ul>
               <li v-for="category in blog.categories">
                   {{category}}
               </li>
           </ul>
           <p>作者：{{blog.author}}</p>
       </div>
  
  </div>

</template>

<script>
export default {
  name: 'edit-blog',
  data(){
    return {
      blog:{},
      id:this.$route.params.id,
      authors:['吴小燕','罗云熙','HELLO'],
      submited:false
    }
  },
  methods:{
        post:function(){
         
          this.$http.put("https://my-blog-84375.firebaseio.com/posts/" + this.id + ".json",this.blog)
          .then(function(data){
            // console.log(data);
            this.submited = true;
          })
        },
        fetchData(){
            this.$http.get("https://my-blog-84375.firebaseio.com/posts/" + this.id + ".json")
            .then(response =>{
                this.blog = response.body;
            })
        }
   },
   created:function(){
       this.fetchData();
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

   #edit-blog *{
    box-sizing: border-box;
  }

  #edit-blog{
    margin:20px auto;
    max-width: 600px;
    padding: 20px;
  }

  label{
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding:8px;
  } 
  input[type="text"]{
    margin-left: 0px;
    }

  textarea{
    height: 200px;
  }

  #checkboxes label{
    display: inline-block;
    margin-top: 0px;
  }
  #checkboxes input{
    display: inline-block;
    margin-right:10px;
  }

  button{
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 10px;
    border-radius: 6px;
    font-size: 18px;
    cursor: pointer;
  }

  #preview{
    padding:10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }

  h3{
    margin-top: 10px;
  }

</style>
