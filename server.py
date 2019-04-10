from flask import Flask, render_template, redirect

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('gameplay')
def black_jack():
    return render_template("game.html")

if __name__ == '__main__':
    app.run()
