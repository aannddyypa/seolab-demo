from flask import Flask, render_template, request, redirect

app = Flask(__name__, template_folder="templates")

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/admin')
def admin():
    return render_template("admin.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)
