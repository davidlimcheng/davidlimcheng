const projects = [
  {
    id: 'project1',
    title: 'Predictive Text Generator',
    image: '../css/images/text.jpg',
    date: 'September 2018',
    desc: 'A recurrent neural network that utilizes Long Term Short Memory architecture to predict the next lines of a body of text.',
    hovered: false,
    links: [
      {
        id: 'link1',
        type: 'demo',
        link: '/textgen',
        descr: 'Demo'
      },
      {
        id: 'link2',
        type: 'github',
        link: 'https://github.com/davidlimcheng/aind2-rnn',
        descr: 'View Repository'
      }
    ],
    orientation: 'landscape',
    styling: 'projects-text-generator',
    type: 'project'
  }
]

export default projects;
