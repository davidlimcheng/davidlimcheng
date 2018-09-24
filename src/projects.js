const projects = [
  {
    title: 'Predictive Text Generator',
    image: '../css/images/text.jpg',
    date: 'September 2018',
    desc: 'A recurrent neural network that utilizes Long Term Short Memory architecture to predict the proceeding lines of a body of text.',
    hovered: false,
    links: [
      {
        type: 'demo',
        link: '/textgen',
        descr: 'Demo'
      },
      {
        type: 'github',
        link: 'https://github.com/davidlimcheng/aind2-rnn',
        descr: 'Github'
      }
    ],
    orientation: 'landscape',
    styling: 'projects-text-generator',
    tools: ['Python', 'Keras'],
    type: 'Project'
  }
]

export default projects;
