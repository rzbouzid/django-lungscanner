# LungScan 🫁  
A Django-based web application for uploading and analyzing chest X-ray images.

## 📖 Overview
This project is a hackathon prototype for a **lung disease detection web app**.  
Right now, the HTML page (built with Django templates) allows users to:
- Upload an X-ray image from their computer.
- Submit it to a mock prediction endpoint.
- Receive and display **simulated diagnostic probabilities** for various lung conditions.

In its current state, the app uses **placeholder predictions** (random values) to demonstrate the frontend flow and UI behavior.

---

## ⚙️ How the Final Integration Will Work

### 🧠 Model (AWS SageMaker → EC2)
Later today, the team will deploy our trained CNN model to **Amazon SageMaker**.  
Once deployed, the **model endpoint** will be hosted on an **EC2 instance (AWS VM)** for real-time inference.

The Django backend will connect to this endpoint like so:
```python
import boto3, json

runtime = boto3.client('sagemaker-runtime', region_name='us-west-2')
response = runtime.invoke_endpoint(
    EndpointName='LungScan-Model-Endpoint',
    ContentType='application/x-image',
    Body=image_file.read()
)
prediction = json.loads(response['Body'].read().decode())

