var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026ilch",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Location",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "clickRestriction": "one",
      "dimensions": "7 10",
      "allowableResponses": "4 11 18 25 32 39 46 53 60 67",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Climb (L1)",
      "code": "ac",
      "type": "radio",
      "choices": {
        "1": "Climbed<br>",
        "0.5": "Attempted<br>",
        "0": "Not Attempted"
      },
      "defaultValue": "0"
    },
    {"name": "Scored in auto",
      "code": "sia",
      "type" : "bool"
      },
    { "name": "Pickup from Depot",
      "code": "afd",
      "type": "bool"
    },
    { "name": "Pickup from Outpost",
      "code": "afo",
      "type": "bool"
    },
    { "name": "Pickup from Neutral Zone",
      "code": "aff",
      "type": "bool"
    }
  ],
  "teleop": [
   {"name": "Scoring durring offense shift",
     "code": "sdos",
     "type": "radio",
     "choices":{
       "1": "Best Scorer<br>",
       "2": "2nd Best Scorer<br>",
       "3": "3rd Best Scorer<br>",
       "4": "Did Not Score"
       },
       "defaultValue": "4"
      },
    { "name": "Feeding during defense shift",
      "code": "fdds",
      "type": "bool"
    },
    { "name": "Pickup from Depot",
      "code": "tfd",
      "type": "bool"
    },
    { "name": "Pickup from Outpost",
      "code": "tfo",
      "type": "bool"
    },
    { "name": "Pickup from Floor",
      "code": "tff",
      "type": "bool"
    }
  ],
  "endgame": [
    { "name": "Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "0.5": "Attempted<br>",
        "0": "Not Attempted"
      },
      "defaultValue": "0"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue":"3"
    },
    { "name": "Crossed Bump",
      "code": "bmp",
      "type": "bool"
    },
    { "name": "Crossed Trench",
      "code": "tre",
      "type": "bool"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}`;
