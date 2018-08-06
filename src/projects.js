const projects = [
  {
    id: 'project1',
    title: 'Dog Breed Classifier',
    image: '../css/images/leo.jpg',
    desc: 'A neural network built with Keras, trained to classify a dog\'s breed given an image.  If an image of a human is inputted, the network will use facial recognition keypoints to return the dog breed most similar to the person in the image.',
    keywords: [
      {
        id: 'keyword1',
        keyword: 'Python'
      }, {
        id: 'keyword2',
        keyword: 'Keras'
      }, {
        id: 'keyword3',
        keyword: 'AI'
      }, {
        id: 'keyword4',
        keyword: 'Transfer Learning'
      }, {
        id: 'keyword5',
        keyword: 'CNN'
      }
    ],
    links: [
      {
        id: 'link1',
        type: 'demo',
        link: '/dog',
        descr: 'Demo'
      }, {
        id: 'link2',
        type: 'github',
        link: 'https://github.com/davidlimcheng/dog-project',
        descr: 'View Repository'
      }
    ],
    orientation: 'portrait',
    styling: 'projects-dog-breed-classifier',
    hovered: false
  }, {
    id: 'project2',
    title: 'Predictive Text Generator',
    image: '../css/images/text.jpg',
    desc: 'A recurrent neural network that utilizes Long Term Short Memory architecture to predict the next lines of a body of text.',
    keywords: [
      {
        id: 'keyword1',
        keyword: 'Python'
      }, {
        id: 'keyword2',
        keyword: 'Keras'
      }, {
        id: 'keyword3',
        keyword: 'RNN'
      }, {
        id: 'keyword4',
        keyword: 'Long Short Term Memory'
      }, {
        id: 'keyword5',
        keyword: 'Keras.js'
      }
    ],
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
    hovered: false
  }
]

export default projects;
