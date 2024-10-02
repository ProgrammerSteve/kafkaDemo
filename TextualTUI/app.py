from textual import on
from textual.app import App
from textual.widgets import Footer, Header, Button, Static, Label, Input
from textual.validation import Number
from textual.containers import ScrollableContainer


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
        if input_widget.type=='text':
            input_widget.value=''
        if input_widget.type=='number':
            input_widget.value=0.0
        if input_widget.type=='integer':
            input_widget.value=0
        try:
            value = float(input_value) # Validate and convert the input value to a float
            self.produced_value = value  # Update the produced_value directly in the app
            print(f"Produced value updated to: {self.produced_value}")
        except ValueError:
            print("Invalid input: Please enter a valid number")

if __name__ == "__main__":
    ProducerApp().run()