export default [
  {
    path: '/page1',
    el: 'Page1'
  },
  {
    path: '/page2',
    el: 'Page2',
    children: [
      {
        path: 'son1',
        el: 'Page2Son1'
      },
      {
        path: 'son2',
        el: 'Page2Son2'
      }
    ]
  },
  {
    path: '/page3',
    el: 'Page3'
  }
]
