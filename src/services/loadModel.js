const tf = require("@tensorflow/tfjs-node");
async function loadModel() {
  return tf.loadGraphModel(
    "https://storage.googleapis.com/submissionmlgc-abdullahazzam/submissions-model/model.json"
  );
}
module.exports = loadModel;
