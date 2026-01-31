var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2026",
  "page_title": "REBUILT",
  "checkboxAs": 10,

  "prematch": [
    {
      "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": true
    },
    {
  "name": "Event",
  "code": "e",
  "type": "event",
  "defaultValue": "2026okok",
  "required": true
},
    {
      "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": true
    },
    {
      "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": true
    },
    {
      "name": "Robot",
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
      "required": true
    },
    {
      "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    {
      "name": "Auto Start Location",
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
    { "name": "Scored Fuel", "code": "sf", "type": "bool" },
    { "name": "Went to Middle", "code": "wtm", "type": "bool" },
    {
      "name": "Climb (L1)",
      "code": "ac",
      "type": "radio",
      "choices": {
        "Climbed": "Climbed<br>",
        "Attempted": "Attempted<br>",
        "Not Attempted": "Not Attempted"
      },
      "defaultValue": "Not Attempted"
    },
    { "name": "Pickup from Depot", "code": "afd", "type": "bool" },
    { "name": "Pickup from Outpost", "code": "afo", "type": "bool" }
  ],

  "teleop": [
    {
      "name": "Offensive Shift Strategy",
      "code": "oss",
      "type": "radio",
      "choices": {
        "1": "Best Scorrer<br>",
        "2": "2nd Best Scorrer<br>",
        "3": "3rd Best Scorrer<br>",
        "0": "Defense"
      },
      "defaultValue": "0"
    },
    {
      "name": "Defensive Shift Strategy",
      "code": "dss",
      "type": "radio",
      "choices": {
        "f": "Feeder<br>",
        "n": "Defense Nutural Zone<br>",
        "z": "Defense Alliance Zone"
      },
      "defaultValue": "f"
    },
    { "name": "Under Trench", "code": "ut", "type": "bool" },
    { "name": "Over Bump", "code": "ob", "type": "bool" },
    { "name": "Pickedup from Human Player", "code": "pfh", "type": "bool" },
    { "name": "Pickup from Floor", "code": "pff", "type": "bool" }
  ],

  "endgame": [
    {
      "name": "Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],

  "postmatch": [
    {
      "name": "Driver Skill",
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
    {
      "name": "Defense Rating",
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
    {
      "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
        "5": "5 (fast)"
      },
      "defaultValue": "3"
    },
    { "name": "Died/Immobilized", "code": "die", "type": "bool" },
    { "name": "Tippy<br>(almost tipped over)", "code": "tip", "type": "bool" },
    {
      "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "Was Defended", "code": "def", "type": "bool" },
    {
      "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 55
    }
  ]
}';
