<template>
    <div id="show-blogs" v-change="'changes'">
        <h1>博客总览</h1>
        <input type="text" v-model="search" placeholder="搜索">
        <div id="single-blogs" v-for="blog in filterdBlogs">
            <router-link v-bind:to="'/blog/'+ blog.id"><h2  v-colors="'colors'">{{blog.title | touppercase}}</h2></router-link>
            <article>{{blog.content | hide}}</article>
        </div>
    </div>
</template>
<script>
export default {
    name:'show-blogs',
    data:function(){
        return{
            blogs:[],
            search:""
        }
    },
    created:function(){
        this.$http.get('https://my-blog-84375.firebaseio.com/posts.json')
        .then(function(data){
            // this.blogs = data.body.slice(0,10);
            // console.log(data.json());
            return data.json();
        })
        .then(function(data){
            var blogArray = [];
            for(let key in data){
                // console.log(key);
                // console.log(data[key]);
                data[key].id = key;
                blogArray.push(data[key]);
            }
            // console.log(blogArray);
            this.blogs = blogArray;
            console.log(this.blogs);
        })
    },
    computed:{
        filterdBlogs:function(){
            return this.blogs.filter((blog) =>{
                return blog.title.match(this.search);
            })
        }
    },
    filters:{
        touppercase(value){
            return value.toUpperCase();
        },
        hide(value){
            return value.slice(0,100) + "...";
        }
    },//自定义标签
    directives:{
        "colors":{
            bind(el,binding,vnode){
            el.style.color = "#"+Math.random().toString(16).slice(2,8);
            }
        },
        "change":{
             bind(el, binding, vnode){
                if(binding.value == 'changes'){
                   el.style.background = "#A00000";
                }else if(binding.value == 'changest'){
                    el.style.background = 'green';
                }
                 }
        }
    }
}
</script>
<style>
/* h1{
    margin-left: 20px;
} */
/* input{
    margin-left:20px;
} */
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
    padding:20px;
}

#single-blogs{
    padding: 20px;
    margin: 20px 0px;
    box-sizing: border-box;
    background: #eee;
    border:1px dotted #aaa; 
}
#show-blogs a{
    text-decoration: none;
    
}
input[type="text"]{
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
}

</style>


