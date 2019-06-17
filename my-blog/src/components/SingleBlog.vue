<template>
    <div id="single-blog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <p>作者:{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories">
                {{category}}
            </li>
        </ul>
        <button @click="deleteSingleBlog()">删除</button>
        <router-link :to="'/edit/' + id"><button>编辑</button></router-link>
    </div>
</template>
<script>
export default {
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get("https://my-blog-84375.firebaseio.com/posts/" + this.id + ".json")
        .then(function(data){
            // this.blog = data.body;
            console.log(data)
            return data.json();
        })
        .then(function(data){
            this.blog = data;
        })
    }, 
    methods:{
        deleteSingleBlog:function(){
            this.$http.delete("https://my-blog-84375.firebaseio.com/posts/" + this.id + ".json")
            .then(response =>{
                this.$router.push({path:'/'})
            })
        }
    }
}
</script>
<style scoped>
h1{
    text-align: center;
}
#single-blog{
    max-width: 700px;
    margin: 0 auto;
    padding:20px;
    background:#eee;
    border:1px dotted black;
}
button{
    background-color: bisque;

}
</style>


