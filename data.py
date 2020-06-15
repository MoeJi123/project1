from splinter import Browser
from bs4 import BeautifulSoup
import re
import time
import requests
import pandas as pd

def scrapetour():

accountName = '1UYFGLZI'
apiToken = 'cnmrnujh5rfu9f2pp33q7z93iveaqvv1'

cities = ['New_York_City', 'San_Francisco', 'Boston','Denver','New_Orleans','Philadelphia']

citydata = []

for city in cities:
    
    tour_url = f'https://www.triposo.com/api/20200405/tour.json?location_ids={city}&count=10'\
    '&fields=id,name,score,price,price_is_per_person,vendor,intro,tag_labels'\
    f'&order_by=-score&account={accountName}&token={apiToken}'
    
    content = requests.get(tour_url).text

    content_json = json.loads(content)
    tourData = content_json["results"]

    top10_tour = []
    
    for each in tourData:
        tours= each["name"]
        top10_tour.append(tours)
        
    
    alchol_url = f'https://www.triposo.com/api/20200405/poi.json?tag_labels=cuisine-Cocktail'\
    f'&location_id={city}&count=10&order_by=-score&fields=name,best_for,coordinates,score,id'\
    f'&account={accountName}&token={apiToken}'
    
    al_content = requests.get(alchol_url).text
    
    al_content_json = json.loads(al_content)
    alcholData = al_content_json["results"]

    top10_bar = []
    top10_bar_cord = []
    
    for bar in alcholData:
        names = bar["name"]
        cords = bar["coordinates"]
        top10_bar.append(names)
        top10_bar_cord.append(cords)
    
    citydata.append({"selcity":city, "top10_tour":top10_tour, "top10_bar":top10_bar, "top10_bar_location":top10_bar_cord})
    
    
# Close the browser after scraping
    browser.quit()

# Return results
    return mars_data