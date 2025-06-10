from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoTokenizer, AutoModelForQuestionAnswering, pipeline

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

qa_pipeline = pipeline("question-answering", 
                       model=AutoModelForQuestionAnswering.from_pretrained("./trained"), 
                       tokenizer=AutoTokenizer.from_pretrained("./trained"))

@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        data = request.get_json(force=True)
        context = data['context']
        question = data['question']
        result = qa_pipeline(question=question, context=context)
        answer = result['answer']
        return jsonify(answer)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
