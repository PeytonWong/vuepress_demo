module.exports = {

  title: 'Peyton的测试心路历程',
  description: '记录入行心得',
  link: '/docs',
  host: '10.1.80.13',
  port: '8999',
  head: [
    ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `./logo.png` }]
 ],
  themeConfig: {
    editLinks: true,
    displayAllHeaders: true,
    head: [
      ['link', {
        rel: 'icon',
        href: '/logo.png'
      }],    
    ],
    nav: [
      // {
      //   text: '主页',
      //   link: '/bar/'
      // },
      {
        text: '精选文章',
        link: '/foo/'
      },
      {
        text: '技术分享',
        link: '/share/'
      },
      {
        text: '度娘',
        link: 'https://www.baidu.com'
      },
      {
        text: '相关社区',
        link: 'http://www.testclass.net/'
      }
    ], //导航栏

    sidebar: {
      '/docs/': [{
        title: 'home',
        collapsable: true,
        children: [
          '',
          'test'

        ]
      }],
      '/bar/': [{
        title: '主页',
        collapsable: true,
        children: [
          '',
          'one'
        ]
      }],
      '/foo/': [{
        title: '精选文章',
        collapsable: true,
        children: [
          
          'interview',
          'app-type',
          'PAY_test',
          'testing process',
          'Tester positioning',
          
        ]
      }],
      '/share/': [{
        title: '技术分享',
        collapsable: true,
        children: [          
          'E2E-test',                   
        ]
      }],
      sidebarDepth: 2,
      lastUpdated: 'Last Updated',
    }
  }
  //   // 侧边栏在 /foo/ 上
  //   '/foo/': [
  //     '/',
  //     'one'
  //   ],
  //   // 侧边栏在 /bar/ 上
  //   // '/bar/': [
  //   //   '',
  //   //   'three',
  //   //   'four'
  //   // ]
  // }

}