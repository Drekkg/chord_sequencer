# Chord Sequencer
The Chord Sequencer App is a song writing tool. It aids musicians during the basic song creation process. Singers, rappers, young musicians or songwriters stuck in a rut will use the Chord Sequencer to find the next chord in a progression or to spice up an already written composition. It is aimed at users that don’t have a vast knowledge of music theory. Chord Sequencer will help them stay in the flow.
![a responsive sscreenshot of Chord Sequencer](assets/images/responsive.png)

# Live Site
https://drekkg.github.io/chord_sequencer/

# Repository
https://github.com/Drekkg/chord_sequencer

# Author
Derek Garnett

### Who the Git is DerekIto?
During a long train ride I did some work on this project using the company's laptop. I have been working in VS Code as a couple of months ago Codeanywhere stopped working. I initialised my repo on the command line and proceeded to push a few commits, five in total. I opened GitHub in my browser and was shocked to see that those five commits were attributed to a user called DerekIto - someone I don't know!
Somehow my username and his got mixed up by GitHub - to be fair it was probably me, probably a typo when I entered my username on the command line. So just to clarify, as I have already clarified to student care - although my namesake is listed as a contributor with a total of five commits, the work is 100% mine(apart from Tone.js a third party library), all the commits in his name were actually made by me. 

# UX

## Target Audience
Chord Sequencer is aimed at songwriters, musicians and music students.

## Project Goal
- Get stuck songwriters out of a rut.
- Introduce modes to young musicians.
- Help music students understand the various modes.
- A teaching aid to music teachers 

Example: A musician writing a song on their guitar or piano, have written a song with two or maybe three chords and a basic melody, but they are stuck as to what they should play next. The chords they have at the moment - D Major, E Minor and G Major - sound nice and work well together. But the song sounds dull and uninspired - it’s missing something. The user opens the app and clicks on the main key selector tab and selects the key of D. They then select one of the modes - they select the first mode which is the Ionian mode. The seven coloured blocks below, then display the seven chords in the D Ionian mode: D Major - E Minor - F# Minor - G Major - A Major - B Minor - C# Diminished. The user notices that all three of the chords in their song are in the scale: D Major, E Minor and G Major. There are also four other Chords in the scale which should work in their song. The user then experiments adding the chords to their song, either on their own instrument or by auditioning it in the browser by clicking on the chord squares, which will sound the chords using an online synthesiser. By experimenting with different chords and modes, the user will discover a plethora of different chord flavours. The user will realise that the Chord Sequencer app is a beneficial aid in the creative process.

## Develepor Goals
- Create a useful tool
- Progress my Javascript and overall skills
  
## Design Choices
Striving to make an uncluttered design with an app that has so many buttons on a single page turned out to be quite the challenge. 

The chord buttons that sounds the chords are grouped togethor on mobile devices so that they are easy to click with your thumb.
On bigger screens, I restricted the interface width so that the user doesn't have to move the from one side of the screen to the other to trigger sounds.
I also tried to make easy to switch keys and modes, so the user quickly audition different keys and modes.

### Colour Choice
I used a variety of bright colours on the interface in an effort to make it look young and fun.
They also serve a purpose and will help the user to quickly identify the different chord shapes.
as follows:
Major chords are green.
Minor chords are blue.
Diminished chords are light red.
The selected mode is purple.


## Wire Frame  
The basic wireframe design.
![wireframe of chord sequencer](assets/images/wire-frame.png)

# Features
Chord Sequencer has many interactive elements i.e buttons and two distinct "states".
An instructional modal page and the main interface.

### Modal Instructional Page
The first is an instructional modal that opens when the app is first loaded.
It contains brief instructions on how to use the app. It also contains a button to close the modal and show the user the main interface and a button to stop showing the modal on load and bring the user straight to the main interface.

![screenshot of modal instructional modal](assets/images/modal-page.png)

Once the user clicks on the stop showing button, it uses local storage to stop showing the modal next time the user opens the app.
![screenshot of "Stop Showing" button](assets/images/stop-showing.png)

On the main interface is a show modal button in the shape of a question mark. Clicking on this button brings the user back to the instructional modal.

![screenshot of show modal](assets/images/show-modal.png)

### Main Interface 
The Main interface contains the core of the app. 
Up and Down arrows to select the main key/root note. 
Seven Mode selection buttons.
Seven Chord Trigger buttons.
One note length selctor button.
The interactive elements in detail:
![screenshot of the main interface](assets/images/main-interface.png)

#### The Main Key Section
![screenshot of main key](assets/images/main-key-section.png)

The Main key Box displays the main key or root note. The display changes depending on the note chosen using the arrows.

![screenshot of main key box](assets/images/main-key-box.png)

The Up and Down Arrows change the main key. The main key is displayed in the main key box. The main key is used to determine the chords in the mode. The arrows cycle through the notes. Clicking up all the way will bring you back to the starting point. The same applies to the down button. It is a user centric feature that allows the user to quickly audition different keys.

![screenshot of up and down arrows](assets/images/up-down-arrows.png)

The note length selector button is a feature that allows the user to change the length of the notes played by the chord buttons. The user can select from a whole note, half note, quarter note and an eighth note. Clicking on the button cycles through the different note lengths. 

![screenshot of note length selector](assets/images/note-length-box.png)

#### The Mode Section
The mode section consists of seven buttons each representing the different modes. The modes are Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian and Locrian. Each mode has a different flavour and a different arrangement of chords. Click here for a description of the different modes. https://www.productionmusiclive.com/blogs/news/musical-modes-and-their-emotions-characteristics-for-edm. The selected mode is highlighted in purple. The chords in the chord section will change to reflect the chords in the selected mode.

![screenshot of mode section](assets/images/modes-section.png)
## Bugs
Major hair pulling bug, where multiple event listeners were being added to a single button. Which caused a single chord button to trigger multiple notes from different keys. The bug was tracked down to event listeners being added in a for each loop each time key or mode was changed. The fix was to change the order, first create the event listeners and then have the event listener call a function that parses the inner HTML changing the chord, key and mode to be played.  




















