import React from 'react';
import keras from 'keras-js';

import { deepCopy } from '../helpers.js';
import model_path from '../keras/dog/weights.best.Xception.bin';
import bottleneck_model_path from '../keras/dog/bottleneck_features_model.bin';
import leo from '../keras/dog/leo.jpg';
import lisa from '../keras/dog/lisa.jpg';

/**
 * Keras model is derived from "dog-app" project Udacity's Artificial Intelligence course
 * The model takes, as an input, a 4D array of shape (nb_samples, 244, 244, 3)
 * where nb_samples = 1 (this is the number of photos to input)
 *       244 (width)
 *       244 (height)
 *       3 photo channels (in BGR order)
 * This 4D array is then fed into a Keras Xception model to extract bottleneck features (bottleneckModel), which are
 * finally fed into a model trained on dog breed classification (model).
 */

const defaultImages = [
  {
    title: 'Leo',
    image: leo
  }, {
    title: 'Lisa',
    image: lisa
  }
]

class Dog extends React.Component {
  constructor() {
    super();
    this.state = {
      defaultImages: defaultImages,
      featuredImage: leo,
      model: null,
      bottleneckModel: null
    }
    this.drawImage = this.drawImage.bind(this);
    this.loadBottleneckModelToState = this.loadBottleneckModelToState.bind(this);
    this.loadModelToState = this.loadModelToState.bind(this);
    this.inputToModel = this.inputToModel.bind(this);
    this.preprocessImageData = this.preprocessImageData.bind(this);
  }
  componentDidMount() {
    this.loadBottleneckModelToState();
    this.loadModelToState();
    this.drawImage();
  }
  drawImage() {
    let featuredImage = new Image();
    featuredImage.src = this.state.featuredImage;

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.drawImage(featuredImage, 0, 0, featuredImage.width, featuredImage.height,
                                     0, 0, canvas.width, canvas.height);
  }
  inputToModel() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    imageData = this.preprocessImageData(imageData);
    console.log(imageData);

    this.state.bottleneckModel
      .ready()
      .then(() => {
        const inputData = {
          input_1: new Float32Array(imageData)
        }
        return this.state.bottleneckModel.predict(inputData);
      })
      .then(outputData => {
        console.log(outputData);
      });
  }
  loadModelToState() {
    const model = new keras.Model({
      filepath: model_path
    });
    this.setState({model: model})
  }
  loadBottleneckModelToState() {
    const model = new keras.Model({
      filepath: bottleneck_model_path
    });
    this.setState({bottleneckModel: model});
  }
  /**
   * Takes image data from a Canvas drawing, and transforms it to the appropriate
   * shape to feed into the keras model.
   * Shape:  (nb_samples, rows, columns, channels)
   * In our case, (1, 244, 244, 3)
   */
  preprocessImageData(imageData) {
    const data = imageData.data;
    let redChannel = [];
    let blueChannel = [];
    let greenChannel = [];
    let red = [];
    let blue = [];
    let green = [];
    let processed = [];
    // Separate the data by its color channel
    for (let i=0; i<data.length; i+=4) {
      red.push(data[i]);
      green.push(data[i+1]);
      blue.push(data[i+2]);
    }
    for (let i=0; i<244; i++) {
      let bgrColumn = [];
      for (let j=0; j<red.length; j+=244) {
        bgrColumn.push( [blue[i+j], green[i+j], red[i+j]]);
      }
      processed.push(deepCopy(bgrColumn));
    }
    return [processed];
  }
  render () {
    return (
      <div className="dog">
        <div className="dog-title">
          <h1>Dog Breed Classifier</h1>
        </div>
        <div className="dog-input-selector"></div>
        <div className="dog-image">
          <canvas id="canvas" width="244" height="244">
            <img src={this.state.featuredImage}></img>
          </canvas>
        </div>
        <button onClick={() => this.inputToModel()}>CLICK ME</button>
      </div>
    )
  }
}

export default Dog;
