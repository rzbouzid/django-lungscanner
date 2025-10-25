from django.shortcuts import render
import random

def mock_predict(image_file):
    """
    Temporary fake prediction function.
    Returns random probabilities for demo purposes.
    """
    diseases = [
        "Pneumonia",
        "Tuberculosis",
        "Cardiomegaly",
        "Fibrosis",
        "No Finding"
    ]
    # generate random probabilities between 0–1
    return {d: random.random() for d in diseases}

def upload_view(request):
    """
    Handles the upload form and prediction display.
    """
    prediction = None

    if request.method == "POST":
        image_file = request.FILES.get("xray")   # "xray" matches <input name="xray">
        if image_file:
            # later you'll replace this with SageMaker call
            prediction = mock_predict(image_file)

    # renders upload.html and passes the result dict to it
    return render(request, "upload.html", {"prediction": prediction})
