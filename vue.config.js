//配置别名  一般@是src的别名 可以直接通过this.获得的就不用添加别名了
module.exports={
    configureWebpack:{
        resolve:{
            alias:{
               'assets':'@/assets',
               'common':'@/commonJs',
               'components':'@/components',
               'network':'@/network',
               'views':'@/views',
            }
        }
    }
}