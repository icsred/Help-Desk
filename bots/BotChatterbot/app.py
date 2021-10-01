from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer, ChatterBotCorpusTrainer
import pymongo

app = Flask(__name__)

# Create a new chat bot named HelpDesk
bot = ChatBot(
    "HelpDesk",
    storage_adapter='chatterbot.storage.MongoDatabaseAdapter',
    database_uri='mongodb+srv://1234:1234@cluster0.mthd1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
#The next line is use for delete previous training
#bot.storage.drop() 

trainer = ChatterBotCorpusTrainer(bot)

trainer.train('chatterbot.corpus.spanish')
trainer.export_for_training('./PGPlearn.yml')
trainer.export_for_training('./CORREOlearn.yml')
trainer.export_for_training('./HARDWARElearn.yml')
trainer.export_for_training('./MASTERSOFTlearn.yml')
trainer.export_for_training('./SOFTWARElearn.yml')
trainer.export_for_training('./OTROlearn.yml')


#Implementaciòn en Flask
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    return str(bot.get_response(userText))

if __name__ == "__main__":
    app.run()

