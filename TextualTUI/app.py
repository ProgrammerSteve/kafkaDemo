from textual import on
from textual.app import App
from textual.widgets import Footer, Header, Button, Static, Label, Input
from textual.validation import Function, Number, ValidationResult, Validator

from textual.reactive import reactive
from textual.containers import ScrollableContainer


class ProducerContainer(Static):
    """Kafka producer app"""
    produced_value = reactive(0)


class NumberInput(Static):
    def compose(self):
        yield Label("Enter a Number:" )  
        yield Input(
            placeholder="Enter a number...",
            validators=[Number(minimum=0.1, maximum=1000000),  ],
            classes="numerical-input",
            id="producer-number-input-1"
        )


class ProducerApp(App):
    BINDINGS = [
        # (key,action name, description),
        ("d","toggle_dark_mode","Toggle dark mode"),
        ("a","add_stopwatch","Add"),
        ("r","remove_stopwatch","Remove"),
    ]
    CSS_PATH="./style.tcss"
    def compose(self):
        """What widgets is this app composed of?"""
        yield Header(show_clock=True)
        yield Footer()
        with ScrollableContainer(id= "numberinputs"):
            yield NumberInput()
    def action_toggle_dark_mode(self):
        self.dark=not self.dark

if __name__ == "__main__":
    ProducerApp().run()