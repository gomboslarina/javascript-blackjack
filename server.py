from flask import Flask, render_template, redirect, request

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/gameplay')
def black_jack():
    player_name = request.args.get("player_name")
    return render_template("game.html", player_name=player_name)

if __name__ == '__main__':
    app.run(debug=True)
