module.exports = {
    base: '/blog-demo/',
    title: '笔记',
    description: 'Vuepress blog demo',
    themeConfig: {
     // 你的GitHub仓库，请正确填写
      repo: 'https://github.com/tottalijin',
      // 自定义仓库链接文字。
      repoLabel: 'My GitHub',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'web', link: '/web/html.md' }
        ],
        sidebar: [
            ['/', '首页'],
            ['/web/html.md', 'html'],
            ['/web/css.md', 'css']
          ]
    }
   
}
 