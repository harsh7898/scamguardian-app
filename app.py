from flask import Flask, request, jsonify, render_template
import joblib

app = Flask(__name__)

# Load the pre-trained model and CountVectorizer
model = joblib.load('model.joblib')
count_vectorizer = joblib.load('count_vectorizer.joblib')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        text = request.form['text']
        new_text_data = count_vectorizer.transform([text])
        prediction = model.predict(new_text_data)
        return jsonify({'prediction': int(prediction[0])})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
