var config_data = `
{
  "dataFormat": "tsv",
  "title": "Scouting PASS 2025",
  "page_title": "DECODE",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Width",
      "code": "wid",
      "type": "number",
      "defaultValue": "18"
    },
    { "name": "Length",
      "code": "len",
      "type": "number",
      "defaultValue": "18"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "Tank",
        "O": "Omni",
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    
    { "name": "Floor pickup Artifact",
      "code": "fpu",
      "type": "bool"
    },
    { "name": "Human Player Pickup Artifact",
       "code": "fpu",
       "type": "bool"
    },
    { "name": "# of Autos",
      "code": "aut",
      "type": "text",
      "size": 20,
      "maxSize": 250
    },
    {"name": "Apriltag Alignment?",
     "code": "tag",
     "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
