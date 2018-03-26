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
      }, {
        id: 'keyword4',
        keyword: 'Campus Solutions'
      }, {
        id: 'keyword5',
        keyword: 'APIs'
      }, {
        id: 'keyword6',
        keyword: 'Rspec'
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
    styling: 'projects-calcentral'
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
        type: 'github',
        link: 'https://github.com/davidlimcheng/dog-project',
        descr: 'View this project on GitHub'
      }
    ],
    orientation: 'portrait',
    styling: 'projects-dog-breed-classifier'
  }
]

export default projects;
