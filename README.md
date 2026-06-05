# BigInfo Remix

A simple, clean Pebble watchface with a large, easy-to-read font. Displays the essentials at a glance, all configurable so you can hide what you don't need.

This remix is based on BigInfo and keeps the same information-dense layout, but focuses on making the main time display easier to read at a glance. The original Tallbolder font has a great large blocky look, but its `8` and `0` can look similar from certain viewing angles, especially on a small watch screen. This remix adds a configurable time font selector so you can keep the original look or choose an alternate font with clearer digit shapes.

## What's Different in This Remix

- **Selectable time fonts** -- choose Original Tallbolder or one of nine alternate display fonts from the settings page.
- **Clearer `8` and `0` options** -- the bundled alternate fonts were chosen after emulator screenshot comparisons, with special attention to separating `8` from `0`.
- **Remix-friendly defaults** -- date, weather, steps, phone battery, and the night theme are enabled by default to match the dense black-background layout.
- **Startup data refresh** -- when weather, sun/night theme, or phone battery are enabled, the watchface requests fresh data when it starts instead of waiting for the next interval.

## Features

- **Large time display** -- tall bold font, 12 or 24-hour format, with selectable font options
- **Custom color options** -- configurable backlight, background and text colors. Optionally switches colors based on sunrise/sunset
- **Date** -- year, day, month, date, and ISO 8601 date
- **Step counter** -- today's steps via Pebble Health
- **Heartrate** -- beats per mintute via Pebble Health
- **Weather** -- current temperature and conditions via [Open-Meteo](https://open-meteo.com/) (no API key required), with configurable temperature unit and update interval
- **Sunrise & sunset times** -- sun times from your location. Uses times from [Open-Meteo](https://open-meteo.com/) if weather is enabled, otherwise calculated on device
- **Custom location** -- specify manual latitude and longitude coordinates, or use phone's GPS for location
- **Moon phase** -- 29-phase moon icon and weather conditions use the [weather-icons](https://github.com/erikflowers/weather-icons) font
- **Watch battery meter** -- color-coded bar (green/yellow/red) with fallback to black and white
- **Phone battery meter** -- reports the connected phone's battery life from supported devices
- **Bluetooth notification** -- icon and optional vibration and/or sound alert on disconnect
- **Hourly notification** -- optional periodic vibration and/or sound

## Want to try it?
Download on the Pebble store: https://apps.repebble.com/5eda31d774a34edeb1c87a39

## Supported Platforms

| Platform | Model |
|----------|-------|
| Aplite | Pebble, Pebble Steel |
| Basalt | Pebble Time, Pebble Time Steel |
| Diorite | Pebble 2 |
| Emery | Pebble Time 2 |
| Flint | Pebble 2 Duo |
| Gabbro | Pebble Round 2 |

## Screenshots

![screenshot-flint-0](screenshots/pebble_screenshot_2026-04-29_13-37.png)
![screenshot-flint-1](screenshots/pebble_screenshot_2026-04-27_07-24.png)
![screenshot-flint-2](screenshots/pebble_screenshot_2026-04-29_13-45.png)
![screenshot-flint-3](screenshots/pebble_screenshot_2026-04-21_13-15-46.png)

![screenshot-emery-0](screenshots/pebble_screenshot_2026-04-29_06-23-32.png)
![screenshot-emery-1](screenshots/pebble_screenshot_2026-04-29_14-08-19.png)
![screenshot-emery-2](screenshots/pebble_screenshot_2026-04-29_21-43-30.png)

![screenshot-gabbro-0](screenshots/pebble_screenshot_2026-05-18_10-52-37.png)
![screenshot-gabbro-1](screenshots/pebble_screenshot_2026-05-18_10-55-36.png)
![screenshot-gabbro-2](screenshots/pebble_screenshot_2026-05-18_10-57-13.png)
