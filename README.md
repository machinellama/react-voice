# This repo is deprecated and will no longer be updated

# React Voice
A speech-to-text application using Web Speech API to map spoken commands to React and HTML code segments, which are copied to an editor.

Essentially, **coding with your voice**

![enter image description here](https://media.tenor.com/images/5bcb5056e6dfe7f757018ecaa8a4b868/tenor.gif)

But of course, this isn't limited to React. You can add mappings for any language and any action you can think of. The possibilities are endless!

# How to run

First run `npm install` to download dependencies

Front-end: run `npm run start` from the root to start a React application on port 3000
 - This utilizes the Web Speech API and is only available on Chrome and Edge as of this writing

Back-end: run `node express` to run an Express server on port 3002
 - This has a single endpoint which accepts a text, copies it to your computer's clipboard, and then executes a command to paste the text wherever your cursor is. This must be done from a backend server since a browser can't execute commands on your desktop

That's it! Once you have both running, you can click 'Start Listening' on the UI, talk into your mic, and if a command is picked up, its corresponding code will be pasted wherever your cursor is. You can leave the app running in the background and code away.

Note: No connections to the outside world are made in this app. Everything is contained to your computer, so your voice is safe.

## Config

You can modify environment variables in `src/config.js`
 - **port and express.port**: where the UI and Express servers run
 - **listenOnStartup**: start listening as soon as the app starts
 - **languages**: define selectable languages
 - **defaultLanguage**: default language
 - **robotjs.cleanup**: optional cleanup command after pasting; you need to uncomment this in the config file to use; the default there is shift+alt+f = auto-format for VS Code on Windows

## Adding commands

To add new commands:
 - Export a new function in `src/scripts/mappings.js`
 - Write a new command in `src/scripts/commands.js` under a locale
	 - **command**: the text you want the Speech API to match
	 - **callback**: function to execute after the command is found; see [react-speech-recognization documentation](https://www.npmjs.com/package/react-speech-recognition) for full details
	 - **commandText**: the text of the mapped command, which is used in the command list modal
	 - **description**: short description of command to display on command list
	 - **isFuzzyMatch**: see [documentation](https://www.npmjs.com/package/react-speech-recognition)

Get creative! You can add mappings for different coding languages, voice interactions on your UI, npm or git commands, macro commands on your computer, scripts to automate tedious tasks, IoT integration, chat bots, and things I can't even imagine right now.

## Adding languages

To add a new language:
 - Add the language in `src/config.js`
 - Add commands for the language in `src/scripts/commands.js`

Note: best results are in English; your mileage will vary with other languages. I tried Spanish, Japanese, and Chinese in this app. Spanish was pretty smooth, but the Web Speech API had issues recognizing end of speech for Chinese and Japanese commands, so the `finalTranscript` property takes a long time to populate in some cases for those languages.

## Libraries used

- [React Speech Recognition](https://www.npmjs.com/package/react-speech-recognition): A hook-based React wrapper around Web Speech API
- [clipboardy](https://www.npmjs.com/package/clipboardy): Used to copy text to your computer's clipboard
- [robotjs](https://www.npmjs.com/package/robotjs): Used to programatically click a combination of keys; used here to paste previously copied text
