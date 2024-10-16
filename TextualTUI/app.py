from textual import on
from textual.app import App
from textual.widgets import Footer, Header, Button, Static, Label, Input
from textual.validation import Number
from textual.containers import ScrollableContainer
import requests
import math


class NumberInput(Static):
    def compose(self):
        yield Label("Enter a Number:" )  
        yield Input(
            placeholder="Enter a number...",
            validators=[Number(minimum=0.1, maximum=1000000),  ],
            classes="numerical-input",
            id="producer-number-input-1"
        )
class SendButton(Static):
    def compose(self):
        yield Button("Send", id="send")
class ProducerApp(App):
    BINDINGS = [
        # (key,action name, description),
        ("d","toggle_dark_mode","Toggle dark mode"),
    ]
    CSS_PATH="./style.tcss"
    def compose(self):
        """What widgets is this app composed of?"""
        self.produced_value = 0.0  # Initialize produced_value in the app
        yield Header(show_clock=True)
        yield Footer()
        with ScrollableContainer(id= "numberinputs"):
            yield NumberInput()
        yield SendButton()
    def action_toggle_dark_mode(self):
        self.dark=not self.dark
    @on(Button.Pressed,"#send")
    async def handle_submit(self):
        print("pressed")
        input_widget = self.query_one("#producer-number-input-1", Input)
        input_value = input_widget.value

        try:
            value = int(float(input_value))
            self.produced_value = value
            input_widget.value=""
            print(f"Produced value updated to: {self.produced_value}")
        except ValueError:
            self.produced_value = math.nan
            print(f"Invalid input: value set to NaN")

        if not math.isnan(self.produced_value):
            response = requests.post('http://localhost:8081/send', json={'number': str(self.produced_value)})
            print("Response:", response.status_code, response.json())
        else:
            print("Cannot send NaN value to the server.")

if __name__ == "__main__":
    ProducerApp().run()