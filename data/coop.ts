import { utcSaturdays } from "d3-time";

let SALARY = {
  "1st co-op": [24, 20, 20, 18.75, 18, 18, 23, 20, 17, 17.31, 32, 17.5, 19, 25, 20, 18, 22, 24, 18, 5, 15, 20, 18, 18, 42.9, 25, 18.5, 14, 45.5, 20, 21, 19, 21, 17.5, 20, 21.5, 25, 20, 21, 25, 18, 20, 18, 24, 20, 18, 25, 18, 43, 22.08, 18, 22, 18, 40, 20, 17, 20],
  "2nd": [22, 65, 20, 17.5, 18, 54.6, 54.6, 43.875, 39, 25.14, 33, 23, 20, 26, 20, 46.8, 35, 46.8, 22, 17, 20, 22, 35, 28, 46.8, 48.75, 18, 46.8, 25, 22, 21, 23, 58.5, 38, 21, 25, 21, 20, 28, 60, 40, 45.5, 42, 17, 20, 18, 30, 49, 22, 26, 21, 40, 26, 20, 32],
  "3rd": [28, 78, 65, 30, 30, 25, 48, 45, 45.5, 24.68, 58.5, 24, 24, 35, 24, 58.5, 38, 54.6, 47.3, 30, 24, 40, 68.9, 55.9, 55.9, 23.75, 36, 52, 24, 23, 35, 46, 65, 22, 57.2, 25, 23, 32, 33, 43, 45, 22, 22.5, 20, 24, 55, 21.33, 24, 25, 60, 52, 30, 30],
  "4th": [70, 89.375, 71.5, 52, 25, 54.6, 48, 78, 58.5, 52.494, 62.4, 62.4, 55.9, 58.5, 30, 45, 58.5, 46.15, 58, 33, 26, 48, 78, 65, 84.006, 25, 61.1, 71.5, 31, 40, 48, 58.5, 56.251, 26, 71.5, 65, 23, 62.4, 55, 65, 65, 115, 21.5, 39, 22, 58.5, 49, 30, 35, 32, 55, 65, 52.494, 32.5],
  "5th": [28, 83.2, 55, 65, 65, 65, 0, 84.5, 48, 67.5*1.3, 61.1, 59.8, 65, 55, 24, 50, 65, 54.795, 58, 37, 36, 48, 65, 61.1, 59.8, 58.5, 110.5, 55.9, 65, 35, 31, 32.5, 67.47, 29, 65, 30, 58.5, 100, 53.3, 65, 130, 29, 53.3, 39, 65, 105.13, 26.05, 38, 35, 57, 36, 52.494, 58.5],
  "6th co-op": [42, 136.5, 41, 36, 158, 92.5, 47, 40, 45, 107.9, 44, 70, 93.756, 36, 41, 44, 40, 130, 41, 127, 40, 40, 65, 40, 33, 35.1, 40.38, 29, 35, 31, 111.8, 100, 48, 130, 34, 40, 35, 70.71, 25, 39, 40, 54, 40, 31.73, 30]
};

let HACKATHON_SALARY = {
  "0": [35.66666667, 32.83333333, 54.275, 25, 16, 38, 24.75, 25,25 , 52.11666667, 43.88333333, 47.7, 33.3, 26.8, 30, 22, 28.5, 33.953],
  "1-5": [36.65, 42.2, 61,  49, 38.15, 44.46, 48.41666667, 37.71666667, 30.16666667, 68.8, 49.13333333, 65.65933333, 27.85, 44.06666667, 47.85016667,  38.66666667, 24.16666667,80, 24.7,  24.41],
  ">5": [78.67916667, 46.3, 34.72, 42.4248, 37.78333333, 50.4, 26.66666667, 52.35016667, 28.33333333, 38.16666667, 56.65 , 29.66666667, 31.83333333, 41.35, 43.425,66.6, 44.36833333, 60.226, 51, 39.83333333, 33.83333333 ]
}

let SIDE_SALARY = {
  "0h / term": [35.66666667, 78.67916667, 36.65, 42.2,  61, 38.15, 25, 50.4, 26.66666667, 44.46, 48.41666667, 37.71666667, 16, 30.16666667, 49.13333333, 44.06666667, 29.66666667, 31.83333333, 47.85016667, 25, 43.425, 25, 24.16666667, 52.11666667, 66.6, 80, 33.3, 26.8, 30, 22, 28.5, 33.953, 33.83333333 ],
  "1-50h / term": [32.83333333, 54.275, 42.4248, 49, 37.78333333,52.35016667, 28.33333333, 38.16666667, 68.8, 65.65933333, 38, 41.35, 24.75, 38.66666667, 43.88333333, 24.7,   44.36833333,24.41, 39.83333333 ],
  ">50h / term": [46.3, 34.72, 27.85, 56.65,  47.7, 60.226,51 ]
}

let ADMISSION_SALARY = {
  "<=95": [46.3, 36.65, 42.2, 34.72, 50.4, 26.66666667, 44.46, 16, 28.33333333, 38.16666667, 68.8, 29.66666667, 31.83333333, 43.425, 38.66666667, 33.3, 26.8, 24.41, 22, 28.5, 33.83333333],
  ">95": [35.66666667, 78.67916667, 32.83333333, 54.275, 61, 42.4248, 49, 37.78333333, 38.15, 25, 48.41666667, 52.35016667, 37.71666667, 30.16666667, 49.13333333, 65.65933333, 27.85, 56.65, 44.06666667, 38, 41.35, 47.85016667, 24.75, 25, 25, 24.16666667, 52.11666667, 66.6, 43.88333333, 47.7, 80, 24.7, 44.36833333, 60.226, 30, 51, 39.83333333, 33.953]
}
// TODO
// California
// East Coast usa 
// GTA / Toronto
// Kitchener / Waterloo
// Midwest USA
// Other Ontario
// Ottawa / Montreal
// Pacific Northwest USA
// Remote
// West Coast Canada
// Outside NA

let WORK_LOCATION = [{
  'x': '1st',
  'value': [3, 1, 29, 11, 0, 5, 7, 0, 0, 2, 1]
}, {
  'x': '2nd',
  'value': [8, 7, 20, 10, 0, 1, 9, 1, 0, 1, 0]
}, {
  'x': '3rd',
  'value': [14, 5, 16, 15, 0,0, 4, 0, 0, 2, 1]
}, {
  'x': '4th',
  'value': [30, 7, 9, 2, 1, 0, 2, 5, 0, 1, 0]
}, {
  'x': '5th',
  'value': [18, 14, 9, 2, 0, 1, 2, 5, 0, 3, 1]
}, {
  'x': '6th',
  'value': [3, 11, 12, 5, 2, 1, 0, 1, 12, 1, 0]
}]

let GENDER_SALARY = [{
  'x': '1st',
  'value': [19.6667, 21.92304348]
}, {
  'x': '2nd',
  'value': [27.66, 32.62059524]
}, {
  'x': '3rd',
  'value': [27.9, 40.29829268]
}, {
  'x': '4th',
  'value': [43.7, 55.37990244]
}, {
  'x': '5th',
  'value': [48.65, 58.603625]
}, {
  'x': '6th',
  'value': [47.59, 63.1170625]
}]
// TODO

let FAVOURITE_LOCATION = [{
  "name": "California",
  "value": 64,
  }, {
  "name": "East Coast Canada",
  "value": 25,
  }, {
  "name": "West Coast Canada",
  "value": 7,
  }, {
  "name": "PNW USA",
  "value": 8,
  }, {
  "name": "East Coast USA",
  "value": 12,
  }, {
  "name": "Outside NA",
  "value": 3,
}]

let COMPANY_WORK_COUNT = {
 "data": {
  "Khan Academy": 1,
  "500px":	1,
  "A Thinking Ape":	1,
  "Abra":	1,
  "Addepar":	2,
  "ADP":	1,
  "Advanced Micro Devices (AMD)":	1,
  "Alation":	1,
  "AMD":	2,
  "Apple":	2,
  "ARUP":	1,
  "Autonomic":	1,
  "Auvik Networks Inc":	1,
  "Avidbots Corp":	1,
  "Bank of America Merrill Lynch":	1,
  "Bank of Montreal":	1,
  "Behaviour Interactive":	2,
  "BigRoad":	1,
  "Bloomberg":	8,
  "Bluejay Networks":	1,
  "BMO Capital Markets":	1,
  "Bunch":	1,
  "Cambridge Mobile Telematics":	1,
  "Capco":	1,
  "Capital One":	2,
  "Carrot":	1,
  "CBC/Radio-Canada":	1,
  "Ceridian": 	1,
  "CIBC":	3,
  "Citadel Securities":	6,
  "Climax Media":	1,
  "cognite":	1,
  "ConsenSys":	1,
  "Cruise LLC":	1,
  "Ctrl V":	1,
  "CuteTax Inc":	1,
  "Dapper Labs":	1,
  "darkmatter":	1,
  "Databricks":	3,
  "Datadog":	1,
  "DF/Net Software":	1,
  "ESCRYPT Canada":	2,
  "eSentire":	1,
  "Facebook":	16,
  "Faire":	2,
  "Finastra":	2,
  "Focal Healthcare":	2,
  "Focal Systems":	1,
  "Genesys":	2,
  "Globality Inc":	1,
  "Google":	7,
  "Grain Discovery":	1,
  "HealthIM":	1,
  "Horizons School of Technology":	1,
  "HubHead":	1,
  "Hudson River Trading":	1,
  "Humu":	1,
  "IBM":	3,
  "Imply":	1,
  "Infor":	1,
  "Jane Street":	7,
  "John Hancock":	1,
  "Khazanah": 	1,
  "Kik Interactive":	1,
  "Klyck.io":	1,
  "Lambton Colloge":	1,
  "LCBO":	2,
  "Lending Loop":	1,
  "Lens Immersive":	2,
  "Lifion By ADP":	1,
  "Lightspeed":	1,
  "Loblaw Digital":	1,
  "Localintel":	1,
  "Lyft":	2,
  "LyricFind":	1,
  "Manulife":	1,
  "Medley":	1,
  "Microsoft":	2,
  "Miovision":	3,
  "MongoDB":	1,
  "Mozilla Corporation":	1,
  "National Instruments":	1,
  "Nuance Communications":	1,
  "Nymi":	1,
  "ODAIA Intelligence":	1,
  "OICR":	1,
  "OLAP Vision":	1,
  "OMERS":	1,
  "Ontario Teachers' Pension Plan":	1,
  "Oracle":	4,
  "Pagerduty":	1,
  "Paper Co":	1,
  "PlanGrid":	2,
  "Playstation":	1,
  "Postmates":	2,
  "Pratt and Whitney":	1,
  "PureFacts":	1,
  "PVelocity":	1,
  "QuEra Computing":	2,
  "Quizlet": 	1,
  "Quora":	1,
  "Qwantech":	1,
  "Rangle.io":	1,
  "Rave Inc":	2,
  "Rediron Technologies":	1,
  "Reebee":	1,
  "Rewind.io":	1,
  "RocScience":	1,
  "Safe Software":	1,
  "SAP":	2,
  "Self-employed under E-Coop: Tutturu":	1,
  "Shape Security":	1,
  "Shopify":	9,
  "Snap Inc":	2,
  "Snowflake":	1,
  "Solace":	1,
  "Spatial":	2,
  "Splunk":	7,
  "Sprout":	1,
  "Square":	1,
  "Square Enix Montreal":	1,
  "SSIMWAVE":	1,
  "StackAdapt":	1,
  "Stripe":	4,
  "Taplytics":	1,
  "Tealbook":	1,
  "Telus":	1,
  "The Trade Desk":	2,
  "Thomson Reuters":	1,
  "ThoughtWire":	1,
  "TripAdvisor":	1,
  "Tulip Retail":	1,
  "Tumblr":	1,
  "Ubisoft Toronto":	2,
  "Uken Games":	1,
  "University of Toronto":	1,
  "UWaterloo":	1,
  "Veeva Systems":	4,
  "Veriday":	1,
  "Vigilant - DRW":	1,
  "Wayfair":	1,
  "White rabbit.ai":	1,
  "Wind River":	1,
  "Wish":	6,
  "Woodbine Entertainment Group":	2,
  "Yahoo":!	5,
  "YugaByte":	2,
  "YuJa":	1,
  "Zazzle":	1,
  "ZeMind":	1,
  "Zynga":	1,
},
 "metadata": {}
};
// TODO

let FAVOURITE_COMPANIES = {
 "data": [
    [ "Grand Rounds", 1.0, 1 ], 
    

    
  ], "metadata": {}
}

let GRADE_SALARY = [
// coop 1
{"y": 20, "x":	85, "term":0, "size":8},
{"y": 20, "x":	80, "term":0, "size":7},

{"y": 20, "x":	95, "term":0, "size":5},
{"y": 20, "x":	70, "term":0, "size":3},
{"y": 18, "x":	75, "term":0, "size":3},
{"y": 25, "x":	85, "term":0, "size":3},
{"y": 15, "x":	90, "term":0, "size":2},
{"y": 20, "x":	90, "term":0, "size":2},

  {"y": 20, "x":	65, "term":0, "size":2},
  {"y": 40, "x":	70, "term":0, "size":1},
  {"y": 43, "x":	75, "term":0, "size":1},
  {"y": 24, "x":	80, "term":0, "size":1},
  {"y": 32, "x":	80, "term":0, "size":1},
  {"y": 5, "x":	85, "term":0, "size":1},
  {"y": 43, "x":	85, "term":0, "size":1},
  {"y": 24, "x":	90, "term":0, "size":1},
  {"y": 46, "x":	95, "term":0, "size":1},

//coop 2
{"y": 20, "x":	90, "term":1, "size":5},

{"y": 20, "x":	85, "term":1, "size":4},
{"y": 25, "x":	85, "term":1, "size":3},
{"y": 20, "x":	80, "term":1, "size":3},
{"y": 45, "x":	95, "term":1, "size":3},
{"y": 60, "x":	95, "term":1, "size":2},
{"y": 50, "x":	90, "term":1, "size":2},
{"y": 20, "x":	75, "term":1, "size":2},
{"y": 25, "x":	80, "term":1, "size":2},
{"y": 35, "x":	85, "term":1, "size":2},
{"y": 47, "x":	85, "term":1, "size":2},
{"y": 25, "x":	90, "term":1, "size":2},

  {"y": 22, "x":	65, "term":1, "size":1},
  {"y": 17, "x":	70, "term":1, "size":1},
  {"y": 18, "x":	70, "term":1, "size":1},
  {"y": 40, "x":	70, "term":1, "size":1},
  {"y": 28, "x":	80, "term":1, "size":1},
  {"y": 38, "x":	80, "term":1, "size":1},
  {"y": 55, "x":	80, "term":1, "size":1},
  {"y": 28, "x":	85, "term":1, "size":1},
  {"y": 39, "x":	85, "term":1, "size":1},
  {"y": 55, "x":	85, "term":1, "size":1},
  {"y": 30, "x":	90, "term":1, "size":1},
  {"y": 42, "x":	90, "term":1, "size":1},
  {"y": 65, "x":	90, "term":1, "size":1},
  {"y": 22, "x":	95, "term":1, "size":1},
//coop 3
{"y":25, "x":	90, "term":2, "size":4},
{"y":25, "x":	85, "term":2, "size":4},
{"y":20, "x":	75, "term":2, "size":3},
{"y":45, "x":	85, "term":2, "size":3},
{"y":45, "x":	95, "term":2, "size":3},
{"y":52, "x":	85, "term":2, "size":2},
{"y":55, "x":	85, "term":2, "size":2},
{"y":30, "x":	90, "term":2, "size":2},
{"y":55, "x":	90, "term":2, "size":2},
{"y":60, "x":	65, "term":2, "size":2},
{"y":30, "x":	75, "term":2, "size":2},

  {"y":24, "x":	65, "term":2, "size":1},
  {"y":23, "x":	70, "term":2, "size":1},
  {"y":65, "x":	70, "term":2, "size":1},
  {"y":25, "x":	75, "term":2, "size":1},
  {"y":35, "x":	75, "term":2, "size":1},
  {"y":65, "x":	75, "term":2, "size":1},
  {"y":20, "x":	80, "term":2, "size":1},
  {"y":30, "x":	80, "term":2, "size":1},
  {"y":40, "x":	80, "term":2, "size":1},
  {"y":48, "x":	80, "term":2, "size":1},
  {"y":69, "x":	80, "term":2, "size":1},
  {"y":30, "x":	85, "term":2, "size":1},
  {"y":35, "x":	85, "term":2, "size":1},
  {"y":25, "x":	95, "term":2, "size":1},
  {"y":36, "x":	95, "term":2, "size":1},
  {"y":78, "x":	95, "term":2, "size":1},

//coop 4
{"y":60, "x":	90, "term":3, "size":5},
{"y":60, "x":	95, "term":3, "size":3},
{"y":65, "x":	95, "term":3, "size":2},

{"y":55, "x":	80, "term":3, "size":2},
{"y":25, "x":	85, "term":3, "size":2},
{"y":30, "x":	85, "term":3, "size":2},
{"y":50, "x":	90, "term":3, "size":2},

  {"y":26, "x":	75, "term":3, "size":1},
  {"y":48, "x":	75, "term":3, "size":1},
  {"y":72, "x":	75, "term":3, "size":1},
  {"y":52, "x":	80, "term":3, "size":1},
  {"y":62, "x":	80, "term":3, "size":1},
  {"y":22, "x":	85, "term":3, "size":1},
  {"y":35, "x":	85, "term":3, "size":1},
  {"y":46, "x":	85, "term":3, "size":1},
  {"y":48, "x":	85, "term":3, "size":1},
  {"y":53, "x":	85, "term":3, "size":1},
  {"y":65, "x":	85, "term":3, "size":1},
  {"y":72, "x":	85, "term":3, "size":1},
  {"y":78, "x":	85, "term":3, "size":1},
  {"y":22, "x":	90, "term":3, "size":1},
  {"y":25, "x":	90, "term":3, "size":1},
  {"y":30, "x":	90, "term":3, "size":1},
  {"y":45, "x":	90, "term":3, "size":1},
  {"y":56, "x":	90, "term":3, "size":1},
  {"y":65, "x":	90, "term":3, "size":1},
  {"y":115, "x":	90, "term":3, "size":1},
  {"y":25, "x":	95, "term":3, "size":1},
  {"y":33, "x":	95, "term":3, "size":1},
  {"y":39, "x":	95, "term":3, "size":1},
  {"y":52, "x":	95, "term":3, "size":1},
  {"y":55, "x":	95, "term":3, "size":1},
  {"y":70, "x":	95, "term":3, "size":1},
  {"y":78, "x":	95, "term":3, "size":1},
  {"y":84, "x":	95, "term":3, "size":1},
  {"y":89, "x":	95, "term":3, "size":1},
//coop 5
{"y":60, "x":	85, "term":4, "size":4},
{"y":65, "x":	85, "term":4, "size":2},
{"y":65, "x":	90, "term":4, "size":2},

{"y":29, "x":	75, "term":4, "size":2},
{"y":55, "x":	75, "term":4, "size":2},
{"y":40, "x":	85, "term":4, "size":2},
{"y":50, "x":	85, "term":4, "size":2},

  {"y":65, "x":	70, "term":4, "size":1},
  {"y":0, "x":	75, "term":4, "size":1},
  {"y":36, "x":	75, "term":4, "size":1},
  {"y":65, "x":	75, "term":4, "size":1},
  {"y":30, "x":	80, "term":4, "size":1},
  {"y":55, "x":	80, "term":4, "size":1},
  {"y":59, "x":	80, "term":4, "size":1},
  {"y":65, "x":	80, "term":4, "size":1},
  {"y":24, "x":	85, "term":4, "size":1},
  {"y":36, "x":	85, "term":4, "size":1},
  {"y":56, "x":	85, "term":4, "size":1},
  {"y":105, "x":	85, "term":4, "size":1},
  {"y":130, "x":	85, "term":4, "size":1},
  {"y":48, "x":	90, "term":4, "size":1},
  {"y":28, "x":	95, "term":4, "size":1},
  {"y":33, "x":	95, "term":4, "size":1},
  {"y":37, "x":	95, "term":4, "size":1},
  {"y":50, "x":	95, "term":4, "size":1},
  {"y":53, "x":	95, "term":4, "size":1},
  {"y":65, "x":	95, "term":4, "size":1},
  {"y":85, "x":	95, "term":4, "size":1},
  {"y":88, "x":	95, "term":4, "size":1},
  {"y":100, "x":	95, "term":4, "size":1},
  {"y":111, "x":	95, "term":4, "size":1},
  {"y":26, "x":	100, "term":4, "size":1},
  {"y":31, "x":	100, "term":4, "size":1},
//coop 6
{"y":40, "x":	90, "term":5, "size":6},
{"y":40, "x":	95, "term":5, "size":6},
{"y":35, "x":	90, "term":5, "size":4},
{"y":30, "x":	90, "term":5, "size":2},
{"y":95, "x":	90, "term":5, "size":2},
{"y":110, "x":	95, "term":5, "size":2},

  {"y":30, "x":	85, "term":5, "size":2},
  {"y":34, "x":	85, "term":5, "size":1},
  {"y":44, "x":	85, "term":5, "size":1},
  {"y":130, "x":	85, "term":5, "size":1},
  {"y":158, "x":	85, "term":5, "size":1},
  {"y":25, "x":	90, "term":5, "size":1},
  {"y":44, "x":	90, "term":5, "size":1},
  {"y":35, "x":	95, "term":5, "size":1},
  {"y":65, "x":	95, "term":5, "size":1},
  {"y":71, "x":	95, "term":5, "size":1},
  {"y":100, "x":	95, "term":5, "size":1},
  {"y":130, "x":	95, "term":5, "size":1},
  {"y":42, "x":	100, "term":5, "size":1},
]

let MISSED_INTERVIEW = [{
  "name": "Yes",
  "value": 11,
},{
  "name": "No",
  "value": 25
}]

let LATE_INTERVIEW = [{
"name": "Yes",
"value": 16,
},{
"name": "No",
"value": 19
}]

let LATE_INTERVIEWER = [{
"name": "Yes",
"value": 34,
},{
"name": "No",
"value": 2
}]

let FAVOURITE_COOP = {
  "ADP":	1,
  "Alarm.com":	1,
  "Apple":	1,
  "Bloomberg":	1,
  "Facebook":	5,
  "Google":	2,
  "Grain Discovery":	1,
  "Humu":	1,
  "Jane Street":	2,
  "Manulife":	1,
  "MongoDB":	1,
  "Nvidia":	1,
  "QuEra Computing":	1,
  "Shopify":	2,
  "Splunk":	2,
  "Stripe":	1,
  "The Trade Desk":	1,
  "whiterabbit.ai":	1,
  "Wish":	3,
  "Zazzle":	1,
  "Zynga":	1,
}

let FAVOURITE_COOP_REASON = [{
    "name": "Culture & Environment", 
    "value":	7},
  {"name": "Pay", 
    "value":	7},
  {"name": "Perks", 
    "value":	6},
  {"name": "Work & Projects", 
    "value":	13},
  {"name": "Location", 
    "value":	2},
  {"name": "Team & Co-workers", 
    "value":	6},
  {"name": "Friendships", 
    "value":	7},
  {"name": "Intern Experience", 
    "value":	6
}]

export {
  SALARY,
  WORK_LOCATION,
  FAVOURITE_LOCATION,
  HACKATHON_SALARY,
  SIDE_SALARY,
  ADMISSION_SALARY,
  COMPANY_WORK_COUNT,
  FAVOURITE_COMPANIES,
  GRADE_SALARY,
  GENDER_SALARY,
  MISSED_INTERVIEW,
  LATE_INTERVIEW,
  LATE_INTERVIEWER,
  FAVOURITE_COOP,
  FAVOURITE_COOP_REASON
}
