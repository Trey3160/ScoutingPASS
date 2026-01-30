var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "REEFSCAPE",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
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
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    }
  ],
  "auton": [
    { "name": "Leave Starting Line",
      "code": "al",
      "type": "bool"
    },
    { "name": "Shoot Preload",
      "code": "shp",
      "type": "bool"
    },
    { "name": "Climbed Durring Auto",
      "code": "wtm",
      "type": "counter"
    },
    { "name": "Grabed from middle",
      "code": "agm",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Offensive Shift Strategy",
      "code": "oss",
      "type": "radio",
      "choices": {
        "1": "Best Scorrer",
        "2": "2nd Best Scorrer",
        "3": "3rd Best Scorrer",
        "0": "Defense"
      },
      "defaultValue": "0"
    },
    { "name": "Defensive Shift Strategy",
      "code": "dss",
      "type": "radio",
      "choices": {
        "f": "Feeder",
        "n": "Defense Nutural",
        "z": "Defense Alliance Zone"
      },
      "defaultValue": "f"
    },
  ],
  "endgame": [
    { "name": "Final Robot Status",
      "code": "efs",
      "type":"radio",
      "choices": {
        "3": "L3",
        "2": "L2",
        "1": "L1",
      },
      "defaultValue": "1"
    }
  ],
  "postmatch": [
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "1": "Below Average<br>",
        "2": "Average<br>",
        "3": "Good<br>",
        "4": "Excellent<br>",
        "0": "Did not play defense"
      },
      "defaultValue": "x"
    },
    
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
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
