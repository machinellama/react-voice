# React Voice
A speech-to-text application using the Web Speech API to map spoken commands to React and HTML code segments, which are copied to an editor.

Essentially, **coding with your voice**
![enter image description here](https://media.tenor.com/images/5bcb5056e6dfe7f757018ecaa8a4b868/tenor.gif)
But of course, this isn't limited to React. You can add mappings for any language and any action you can think of. The possibilities are endless!

# How to run

To run the front-end portion of the app, run `npm run start` from the root to start a React application on port 3000
 - This utilizes the Web Speech API and is only available on Chrome and Edge as of this writing

To run the back-end portion, run `node express` to run an Express server on port 3002
 - This has a single endpoint which accepts a text, copies it to your computer's clipboard, and then executes a command to paste the text wherever your cursor is. This must be done from a backend server since a browser can't execute commands on your desktop

That's it! Once you have both running, you can click 'Start Listening' on the UI, talk into your mic, and if a command is picked up, its corresponding code will be pasted wherever your cursor is. You can leave the app running in the background and code away.

Note: No connections to the outside world are made in this app. Everything is contained to your computer, so your voice is safe.

## Config

You can modify environment variables in `src/config.js`
 - **port and express.port**: where the UI and Express servers run
 - **languages**: what languages you can select on the UI
 - **robotjs.paste**: the command for pasting copied code (will be different on different operating systems)
 - **robotjs.cleanup**: optional cleanup command (shift+alt+f is auto-format for VS Code on Windows)

## Adding commands

To add new commands:
 - Export a new function in `src/scripts/mappings`
 - Write a new command in `src/scripts/commands` under a locale
	 - **command**: the text you want the Speech API to match
	 - **callback**: function to execute after the command is found; see [react-speech-recognization documentation](https://www.npmjs.com/package/react-speech-recognition) for full details
	 - **text**: the text of the mapped command, which is used on the UI in a modal when clicking a row on the command list
	 - **name**: name of command to display on command list
	 - **isFuzzyMatch**: see [documentation](https://www.npmjs.com/package/react-speech-recognition)

Get creative! You can add mappings for different languages, for macro commands on your computer, for automated scripts, integrations with IoT, chat bots, and things I can't even imagine right now
