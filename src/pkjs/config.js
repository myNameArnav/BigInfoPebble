module.exports = [
  {
    "type": "heading",
    "defaultValue": "Watchface Settings"
  },
  {
    "type": "text",
    "defaultValue": "Customize your watchface appearance and preferences."
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Theme"
      },
      {
        "type": "color",
        "messageKey": "BacklightColorDay",
        "label": "Backglight Color",
        "defaultValue": "0xFFAA55",
        "sunlight": false,
        "layout": "COLOR",
        "description": "Set backlight to BLACK to use the system default",
        "capabilities": ["PLATFORM_EMERY"]
      },
      {
        "type": "color",
        "messageKey": "BackgroundColorDay",
        "label": "Background Color",
        "defaultValue": "0xFFFFFF",
        "allowGray": true
      },
      {
        "type": "color",
        "messageKey": "TextColorDay",
        "label": "Text Color",
        "defaultValue": "0x000000",
        "capabilities": ["NOT_COLOR"]
      },
      {
        "type": "color",
        "messageKey": "TimeColorDay",
        "label": "Time Color",
        "defaultValue": "0x000000",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "DateColorDay",
        "label": "Date Color",
        "defaultValue": "0x000000",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "WeatherColorDay",
        "label": "Weather Color",
        "defaultValue": "0x000000",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "HealthColorDay",
        "label": "Health Color",
        "defaultValue": "0x000000",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "SunColorDay",
        "label": "Sun Time Color",
        "defaultValue": "0x000000",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "MoonColorDay",
        "label": "Moon Color",
        "defaultValue": "0x000000",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "BatteryColorDay",
        "label": "Battery Color",
        "defaultValue": "0x000000",
        "capabilities": ["COLOR"]
      },
      {
        "type": "select",
        "messageKey": "TimeFont",
        "label": "Time Font",
        "defaultValue": "0",
        "options": [
          { "label": "Original Tallbolder", "value": "0" },
          { "label": "Changa One", "value": "1" },
          { "label": "Anton", "value": "2" },
          { "label": "Big Shoulders Black", "value": "3" },
          { "label": "Kode Mono Bold", "value": "4" },
          { "label": "JetBrains ExtraBold", "value": "5" },
          { "label": "Share Tech Mono", "value": "6" },
          { "label": "Orbitron Black", "value": "7" },
          { "label": "Nova Square", "value": "8" },
          { "label": "Monoton", "value": "9" }
        ]
      },
      {
        "type": "toggle",
        "messageKey": "ZeroPad12Hour",
        "label": "Leading Zero in 12-Hour Time",
        "description": "Show `01:05` instead of `1:05` when the watch uses 12-hour time.",
        "defaultValue": false
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Night Theme"
      },
      {
        "type": "toggle",
        "messageKey": "NightTheme",
        "label": "Enable Night Theme After Sunset",
        "defaultValue": true
      },
      {
        "type": "color",
        "messageKey": "BacklightColorNight",
        "label": "Night Backglight Color",
        "defaultValue": "0xFF5500",
        "sunlight": false,
        "layout": "COLOR",
        "description": "Set backlight to BLACK to use the system default",
        "capabilities": ["PLATFORM_EMERY"]
      },
      {
        "type": "color",
        "messageKey": "BackgroundColorNight",
        "label": "Night Background Color",
        "defaultValue": "0x000000",
        "allowGray": true
      },
      {
        "type": "color",
        "messageKey": "TextColorNight",
        "label": "Night Text Color",
        "defaultValue": "0xFFFFFF",
        "capabilities": ["NOT_COLOR"]
      },
      {
        "type": "color",
        "messageKey": "TimeColorNight",
        "label": "Night Time Color",
        "defaultValue": "0xFFFFFF",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "DateColorNight",
        "label": "Night Date Color",
        "defaultValue": "0xFFFFFF",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "WeatherColorNight",
        "label": "Night Weather Color",
        "defaultValue": "0xFFFFFF",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "HealthColorNight",
        "label": "Night Health Color",
        "defaultValue": "0xFFFFFF",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "SunColorNight",
        "label": "Night Sun Time Color",
        "defaultValue": "0xFFFFFF",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "MoonColorNight",
        "label": "Night Moon Color",
        "defaultValue": "0xFFFFFF",
        "capabilities": ["COLOR"]
      },
      {
        "type": "color",
        "messageKey": "BatteryColorNight",
        "label": "Night Battery Color",
        "defaultValue": "0xFFFFFF",
        "capabilities": ["COLOR"]
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Date"
      },
      {
        "type": "toggle",
        "messageKey": "ShowDate",
        "label": "Show Date",
        "defaultValue": true
      },
      {
        "type": "toggle",
        "messageKey": "ShowDate2",
        "label": "Show additional Date",
        "description": "`YYYY` or `Day`",
        "defaultValue": false,
        "capabilities": ["NOT_DISPLAY_144x168"]
      },
      {
        "type": "toggle",
        "messageKey": "AltDate",
        "label": "Alternate Date Format",
        "description": "Toggle between `Day Mon DD` and `YYYY-MM-DD`",
        "defaultValue": false
      }
    ]
  },
  {
    "type": "section",
    "capabilities": ["HEALTH"],
    "items": [
      {
        "type": "heading",
        "defaultValue": "Health"
      },
      {
        "type": "toggle",
        "messageKey": "ShowSteps",
        "label": "Show Steps",
        "defaultValue": true
      },
      {
        "type": "toggle",
        "messageKey": "ShowHR",
        "label": "Show Heartrate",
        "defaultValue": false,
        "description": "Health data is updated every minute",
        "capabilities": ["NOT_PLATFORM_APLITE", "NOT_PLATFORM_FLINT", "NOT_PLATFORM_GABBRO"]
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Location"
      },
      {
        "type": "toggle",
        "messageKey": "ShowSun",
        "label": "Show Sunrise/Sunset",
        "defaultValue": false
      },
      {
        "type": "toggle",
        "messageKey": "ShowMoon",
        "label": "Show Moonphase",
        "defaultValue": false
      },
      {
        "type": "toggle",
        "messageKey": "ShowWeather",
        "label": "Show Weather",
        "defaultValue": true
      },
      {
        "type": "toggle",
        "messageKey": "TemperatureUnit",
        "label": "Use Fahrenheit",
        "defaultValue": false
      },
      {
        "type": "slider",
        "messageKey": "WeatherInterval",
        "label": "Weather Update Interval (hours)",
        "defaultValue": 2,
        "min": 1,
        "max": 6,
        "step": 1
      },
      {
        "type": "input",
        "messageKey": "Latitude",
        "defaultValue": "",
        "label": "Manual Location - Latitude",
        "attributes": {
          "placeholder": "eg: 40.7127 (leave blank to use GPS)",
          "type": "number",
          "min": "-90",
          "max": "90",
          "step": ".000001"
        }
      },
      {
        "type": "input",
        "messageKey": "Longitude",
        "defaultValue": "",
        "label": "Manual Location - Longitude",
        "description": "Leave both blank to use GPS location for weather & sun times",
        "attributes": {
          "placeholder": "eg: -74.0061 (leave blank to use GPS)",
          "type": "number",
          "min": "-180",
          "max": "180",
          "step": ".000001"
        }
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Preferences"
      },
      {
        "type": "toggle",
        "messageKey": "ShowPhoneBattery",
        "label": "Show Phone Battery",
        "defaultValue": true
      },
      {
        "type": "text",
        "defaultValue": "Hourly Notification"
      },
      {
        "type": "toggle",
        "messageKey": "PeriodicVibrate",
        "label": "  - Vibrate",
        "defaultValue": false
      },
      {
        "type": "toggle",
        "messageKey": "PeriodicSound",
        "label": "  - Sound",
        "defaultValue": false,
        "capabilities": ["NOT_PLATFORM_APLITE", "NOT_PLATFORM_BASALT", "NOT_PLATFORM_CHALK", "NOT_PLATFORM_DIORITE", "NOT_PLATFORM_GABBRO"]
      },
      {
        "type": "text",
        "defaultValue": "Bluetooth Disconnect Notification"
      },
      {
        "type": "toggle",
        "messageKey": "BluetoothVibrate",
        "label": "  - Vibrate",
        "defaultValue": false
      },
      {
        "type": "toggle",
        "messageKey": "BluetoothSound",
        "label": "  - Sound",
        "defaultValue": false,
        "capabilities": ["NOT_PLATFORM_APLITE", "NOT_PLATFORM_BASALT", "NOT_PLATFORM_CHALK", "NOT_PLATFORM_DIORITE", "NOT_PLATFORM_GABBRO"]
      },
      {
        "type": "slider",
        "messageKey": "Volume",
        "label": "Speaker Volume",
        "description": "Set volume to `0` to use the system default",
        "defaultValue": 50,
        "min": 0,
        "max": 100,
        "step": 5,
        "capabilities": ["NOT_PLATFORM_APLITE", "NOT_PLATFORM_BASALT", "NOT_PLATFORM_CHALK", "NOT_PLATFORM_DIORITE", "NOT_PLATFORM_GABBRO"]
      }
    ]
  },
  {
    "type": "submit",
    "defaultValue": "Save Settings"
  }
];
