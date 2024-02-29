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




## Bugs
Major hair pulling bug, where multiple event listeners were being added to a single button. Which caused a single chord button to trigger multiple notes from different keys. The bug was tracked down to event listeners being added in a for each loop each time key or mode was changed. The fix was to change the order, first create the event listeners and then have the event listener call a function that parses the inner HTL changing the chord, key and mode to be played.  




















