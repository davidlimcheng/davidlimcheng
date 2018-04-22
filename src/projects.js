const projects = [
  {
    id: 'project1',
    title: 'UC Berkeley CalCentral',
    image: '../css/images/calcentral.jpg',
    desc: 'A one-stop hub for students, staff, and faculty at UC Berkeley. Users can enroll in classes, pay bills, view or submit grades, along with anything else they may need to do throughout their academic careers.',
    keywords: [
      {
        id: 'keyword1',
        keyword: 'AngularJS'
      }, {
        id: 'keyword2',
        keyword: 'Ruby on Rails'
      }, {
        id :'keyword3',
        keyword: 'Node.js'
      }
    ],
    links: [
      {
        id: 'link1',
        type: 'github',
        link: 'https://github.com/ets-berkeley-edu/calcentral',
        descr: 'View this project on GitHub'
      }
    ],
    orientation: 'landscape',
    styling: 'projects-calcentral',
    hovered: false
  }, {
    id: 'project2',
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
        descr: 'Demo this project'
      }, {
        id: 'link2',
        type: 'github',
        link: 'https://github.com/davidlimcheng/dog-project',
        descr: 'View this project on GitHub'
      }
    ],
    orientation: 'portrait',
    styling: 'projects-dog-breed-classifier',
    hovered: false
  }, {
    id: 'project3',
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
        descr: 'Demo this project'
      }
    ],
    orientation: 'landscape',
    styling: 'projects-text-generator',
    hovered: false
  }
]

export default projects;
