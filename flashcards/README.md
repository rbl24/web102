# Web Development Project 2 - *Mandarin Learning Flashcards*

Submitted by: **Ryan Liu**

This web app: **Mandarin Learning Flashcards**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:


- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [ ] Cards contain images in addition to or in place of text
  - [ ] Some or all cards have images in place of or in addition to text
- [ ] Cards have different visual styles such as color based on their category
  - Example categories you can use:
    - Difficulty: Easy/medium/hard
    - Subject: Biology/Chemistry/Physics/Earth science

The following **additional** features are implemented:

* [x] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://submissions.us-east-1.linodeobjects.com/web102/1q1i4EgF.gif' title='Gif Video Walkthrough' width='' alt='Video Walkthrough' />
<img src='https://osu.zoom.us/rec/share/V6_-PRvgBB8d_evKxbGGdz9Jc1rXg-5EKMIlaX-Jo3aV9uUv3PAP2RvCl-Sfg_ig.Rwn1cM5cJbSW1Co1?startTime=1750273555000' title='Video Walkthrough - Original Link' width='' alt='Video Walkthrough' />


<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

python -m venv venv
venv\Scripts\activate.bat

npm install -D tailwindcss @tailwindcss/vite
add to vite config 
import tailwindcss from '@tailwindcss/vite'
and tailwindcss() in export

npm i -D daisyui@latest

to index.css: 
@import "tailwindcss";

/* @plugin "daisyui"; */
@plugin "daisyui" {
  themes: all;
}

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.



