#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  diego_bot.py
#  
#Diego Bot Pruebas (@diegoPruebaBot)
 
 
from telegram.ext import Updater, CommandHandler
 
def start(update, context):
    update.message.reply_text('Hola, a continuación te presento una lista de acciones que ayudaran a solucionar tu problema')
 
 
if __name__  == '__main__': 
    updater = Updater(token = '1869153187:AAHOW61_Hau_Z0YDt7KmnicQKTVVlNG6EOk', use_context= True)
    dp = updater.dispatcher
    #add handler de comando
    dp.add_handler(CommandHandler('start', start))
    updater.start_polling() #genera ciclo infinito
    updater.idle()          #   ""    ""   ""