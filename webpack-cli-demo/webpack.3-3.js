module.exports = {
    mode:'development',
    entry:{
        app:'./src/3-3/app.js'
    },
    output:{
        filename:'./3-3/[name].[hash:8].js'
    },
    module:{
        rules:[
            {
                test:/\.js/,
                use:{
                    loader:'babel-loader',
                    // options:{
                    //     presets:[
                    //         ['@babel/preset-env',{
                    //             targets:{
                    //                 browsers:['>1%','last 2 version']
                    //                 // chrome:'52'
                    //             }
                    //         }]
                    //     ]
                    // }
                },
                exclude:'/node_modules/'
            }
        ]
    }
};