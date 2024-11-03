from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json
from groq import Groq
import time

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load API key
working_dir = os.path.dirname(os.path.abspath(__file__))
with open(os.path.join(working_dir, "config.json")) as config_file:
    config_data = json.load(config_file)

GROQ_API_KEY = config_data.get("GROQ_API_KEY")
os.environ["GROQ_API_KEY"] = GROQ_API_KEY

client = Groq()

# Rate limiting variables
RATE_LIMIT = 20  # Maximum 20 requests per minute
rate_limit_store = {}

# Premade requests
premade_requests = {
    "What is LifeVault?": (
        "LifeVault is an innovative platform designed to help you manage your digital life securely and efficiently. "
        "We offer a variety of tools for file storage, sharing, and collaboration tailored to meet your needs."
    ),
    "How does file storage work in LifeVault?": (
        "LifeVault allows you to securely store your files on IPFS, ensuring easy access and sharing capabilities. "
        "You can upload, retrieve, and manage your files through our user-friendly interface."
    ),
    "Can I share files with others?": (
        "Yes, LifeVault enables you to share files with specific individuals or groups by providing access controls. "
        "You can manage permissions easily from your dashboard."
    ),
    "How do I get started with LifeVault?": (
        "To get started, visit our <a href='https://lifevault.vercel.app/login' style='color: blue; text-decoration: underline;'>Login</a> page. "
        "If you don't have an account, select 'Sign Up' to create one and explore our features!"
    ),
    "Why use LifeVault for file management?": (
        "LifeVault offers secure, decentralized storage solutions that enhance data privacy and accessibility. "
        "Check out our <a href='https://lifevault.vercel.app' style='color: blue; text-decoration: underline;'>home page</a> for more information."
    ),
    "What features does LifeVault offer?": (
        "LifeVault provides features such as secure file uploads, retrieval, access sharing, and collaboration tools. "
        "Visit our <a href='https://lifevault.vercel.app' style='color: blue; text-decoration: underline;'>website</a> to learn more about each feature."
    ),
    "How do I create an account?": (
        "To sign up, go to the <a href='https://lifevault.vercel.app/login' style='color: blue; text-decoration: underline;'>Login</a> page and select 'Sign Up.' "
        "Fill in your details, and you’ll be ready to manage your files in no time!"
    ),
    "Where can I find more information about LifeVault?": (
        "For detailed information about all our features, visit our <a href='https://lifevault.vercel.app' style='color: blue; text-decoration: underline;'>home page</a>. "
        "You can explore everything we offer and how it can benefit you."
    )
}

def is_rate_limited(ip):
    current_time = time.time()
    if ip not in rate_limit_store:
        rate_limit_store[ip] = []

    # Filter out requests older than 60 seconds
    rate_limit_store[ip] = [t for t in rate_limit_store[ip] if current_time - t < 60]

    if len(rate_limit_store[ip]) >= RATE_LIMIT:
        return True
    rate_limit_store[ip].append(current_time)
    return False

@app.route('/')
def health_check():
    return "Healthy", 200

@app.route('/lifevault-chatbot', methods=['POST'])
def chat():
    ip = request.remote_addr
    if is_rate_limited(ip):
        return jsonify({"error": "Rate limit exceeded. Please wait and try again."}), 429

    data = request.json
    user_prompt = data.get('prompt')

    if user_prompt in premade_requests:
        return jsonify({"response": premade_requests[user_prompt]})

    messages = [
        {'role': "system", "content": "You are an AI assistant for LifeVault. Provide helpful and accurate information about LifeVault's services."},
        {"role": "user", "content": user_prompt}
    ]

    try:
        response = client.chat.completions.create(
            model="llama-3.1-8b-instant",
            messages=messages
        )
        assistant_response = response.choices[0].message.content
        return jsonify({"response": assistant_response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get("PORT", 5000)))