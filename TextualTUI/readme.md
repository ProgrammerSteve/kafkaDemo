# Textual App

## Setup Env
- To create env folder for conda `conda create --name textual_env python=3.12 pip`
- To download requirements from a environment.yml file and create a ./env file `conda env create --name textual_env --file environment.yml`

## Updating Env
- While in the conda terminal in the current directory, activate the conda environment `conda activate ./env`
- Run `conda install <package_name>` or `pip install <package_name>` followed by the desired library to install into the conda env
- To create a new environment.yml file for conda `conda env export --no-builds > environment.yml`

## Running the application
- To run the conda environment `conda activate textual_env`
- Run the command `textual run app.py` in a terminal to run the app

## To run a debug terminal: 
- run `textual run --dev app.py` in one terminal
- run  `textual console` in a new terminal after starting the app
    
## Deactivate the application
- `[ctrl/cmd]+c` to close the application
- `conda deactivate` to turn off the conda environment in the conda terminal

## Libraries installed on conda env
- ```pip install textual```
- ```pip install textual-dev```

## Note
- In Textual, css files can have .tcss as a file extension to work with a vscode extension
- ```Textual Syntax Highlighter``` vscode extension is for the css file
- ```textual-dev``` is for debugging with textual