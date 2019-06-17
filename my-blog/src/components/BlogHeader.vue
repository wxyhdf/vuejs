<template>
    <nav id="blog-header">
        <ul>
            <li>
                <router-link to="/" exact>博客</router-link>
                <router-link to="/add" exact>写博客</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name:'blog-header'
}
</script>
<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0px;
}
li{
    padding: 10px;
    font-size: 25px; 
}
a{
        color:#fff;
        margin-right: 30px;
        padding: 10px;
        border-radius: 5px;
}
a:hover{
    color: #A00000;
}
nav{
    background :rgb(161, 111, 113);
    margin-bottom: 20px;
}
.router-link-active{
    background:rgb(240, 235, 235,0.8);
    color: #444;
}
</style>


