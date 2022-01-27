# Hands-free face detection run game
A temple run game controlled using face positions.

## Prerequisites

Download and install Python 3.x ([link](https://www.python.org/downloads/))

Clone the repository

    git clone https://github.com/priyanksharma7/temple-run.git

(Optional) Create and activate a virtual environment

    python -m venv virtual_env
    .\virtual_env\Scripts\activate

Install dependencies

    pip install opencv-contrib-python imutils pyautogui flask

## How to run

`game.py` : A python program that uses Haar Cascade Classifier for face detection and Opencv KCF tracker to register face movements from the camera's live stream. [Using the `pyutogui` library].  

    python game.py
Note: Press 'q' to exit.

`app.py` : A Flask web application that implements the game controls logic and displays the Temple Run game as well as instructions together on a webpage.

    python app.py
Note: Press 'Ctrl+C' in the terminal to exit.

***
