import React from 'react';
import keras from 'keras-js';
import nj from 'numjs';

import { textChars, textWindowSize, textCharsToIndices, textIndicesToChars, sanitizeText, getLast250Characters } from '../helpers';
import exampleTexts from '../exampleTexts.js';
import kerasModelWeights from '../keras/textgen/best_RNN_large_textdata_model_weights.js'
import modelPath from '../keras/textgen/best_RNN_large_textdata_model2.bin';


class Text extends React.Component {
    constructor() {
        super();
        this.state = {
            examples: exampleTexts,
            featuredText: exampleTexts[1].text,
            model: null,
            predictedText: ''
        }
        this.inputToModel = this.inputToModel.bind(this);
        this.loadModelToState = this.loadModelToState.bind(this);
        this.predictNextCharacters = this.predictNextCharacters.bind(this);
        this.renderPredictedCharacters = this.renderPredictedCharacters.bind(this);
        this.shiftInputWindow = this.shiftInputWindow.bind(this);
    }
    async componentDidMount() {
        await this.loadModelToState();
        console.log('kerasjs model weights, first layer');
        console.log(this.state.model.modelWeights);
        console.log('keras model weights, first layer');
        console.log(kerasModelWeights);
    }
    loadModelToState() {
        return new Promise(async (resolve, reject) => {
            const model = new keras.Model({
                filepath: modelPath
            });
            await this.setState({model: model});
            await this.state.model.ready();
            resolve();
        });
    }
    predictNextCharacters(inputCharacters, numCharactersToPredict = 100) {
        return new Promise(async (resolve, reject) => {
            let predictedCharacters = '';
            inputCharacters = getLast250Characters(sanitizeText(inputCharacters));
            for (let i=1; i<=numCharactersToPredict; i++) {
                let xTest = nj.zeros([1, textWindowSize, textChars.length], 'float32');
                for (let j = 0; j < inputCharacters.length; j++) {
                    xTest.set(0, j, textCharsToIndices[inputCharacters[j]], 1);
                }
                let xTestList = xTest.tolist();
                const inputData = {
                    input: Float32Array.from(xTestList.flatten(2))
                }
                let prediction = await this.inputToModel(inputData);
                predictedCharacters += prediction;
                inputCharacters = await this.shiftInputWindow(inputCharacters, prediction);
                console.log(inputCharacters);
                if (i === numCharactersToPredict) {
                    resolve(predictedCharacters);
                }
            }
        });
    }
    inputToModel(inputData) {
        return new Promise((resolve, reject) => {
            this.state.model.predict(inputData).then((outputData) => {
                let prediction;
                let predictions = new Float32Array(outputData.output);
                let max = Math.max(...predictions);
                for (const [key, value] of Object.entries(predictions)) {
                    if (value === max) {
                        prediction = textIndicesToChars[key]
                    }
                }
                resolve(prediction);
            });
        });
    }
    shiftInputWindow(input, prediction) {
        return new Promise((resolve, reject) => {
            input += prediction;
            input = input.slice(1);
            resolve(input);
        });
    }
    renderPredictedCharacters(predictedChars) {
        this.setState({predictedText: predictedChars});
    }

    render() {
        return (
            <div className="text">
                <div className="text-title">
                    <h1>Predictive Text Generator</h1>
                </div>
                <div className="text-body">
                    <textarea className="text-body-textarea" placeholder="Type input text here..." defaultValue={this.state.featuredText}>
                    </textarea>
                </div>
                <div className="text-generate-button">
                    <button onClick={() => this.predictNextCharacters(this.state.featuredText).then(this.renderPredictedCharacters)}>Generate</button>
                </div>
                <div className="text-predicted-text">
                    {this.state.predictedText}
                </div>
            </div>
        )
    }
}



export default Text;