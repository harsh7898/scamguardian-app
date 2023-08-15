# Scamguardian Application

This project is an SMS/IM (Short Message Service/Instant Messaging) filtering application designed to classify messages as spam or not. The application utilizes Natural Language Processing (NLP) techniques and a Multinomial Naive Bayes classifier to determine the classification.




## About the Application

The SMS/IM Filtering Application aims to help users distinguish between spam and legitimate messages. It employs techniques like text preprocessing, feature extraction (Bag of Words), and classification using the Multinomial Naive Bayes algorithm to predict whether an incoming message is spam or not.

## Demo

![Animation](https://github.com/harsh7898/scamguardian-app/assets/46092423/038f8768-29f7-4895-9c95-4c7c4db3092a)


## Prerequisites

Before using the SMS/IM Filtering Application, ensure you have the following prerequisites:

- Python 3.6+
- Required libraries (Install using `pip install -r requirements.txt`):
  - pandas
  - numpy
  - seaborn
  - nltk
  - scikit-learn
  - flask
- Google Cloud Run account (for deployment)

## Run Locally

Clone the project

```bash
  git clone https://github.com/harsh7898/scamguardian-app.git
```

Go to the project directory

```bash
  cd scamguardian-app
```


Start the server

```bash
  python main.py
```


## Usage

- Enter an SMS/IM Message:
- In the application, enter or copy an SMS/IM message that you want to classify as spam or not.
- Click "Predict": After entering the message, click the "Predict" button to analyze the message using the Naive Bayes classifier.
- View Prediction: The application will provide a prediction about whether the message is classified as "Its a Spam" or "Not a Spam message."
- If the message is a spam then it will show an alert of red colour around the textbox to aware user more regarding the spam message they received.



## Model Building

The application's core functionality is based on a Multinomial Naive Bayes classifier trained on a dataset of labeled SMS/IM messages. The model is used to classify messages as spam or not.



## Creating Docker Image

Create requirements.txt file and write all necessary pip installations:

```bash
Flask
Joblib
scikit-learn==X.X.X
```

Create a 'Dockerfile':

```
FROM python:3.9
WORKDIR /app
COPY . /app
RUN pip install -r requirements.txt
EXPOSE 5000
CMD ["python", "app.py"]
```

Building docker image:

```bash
docker build -t username/image-name:version .
```

Run docker image:

```bash
docker container run -d -p:5000:5000 username/image-name:version
```

Push docker image to dockerhub:
```bash
docker push username/image-name:version
```

Link to my docker image:

https://hub.docker.com/r/harshs78/spamguardian-app




## GCP Deployment

Create file 'app.yaml'

```bash
runtime: python39 # your python version
```

Installing google cloud sdk installer

Run following commands:

```bash
gcloud init
```
```bash
gcloud app deploy app.yaml --project projectname
```
