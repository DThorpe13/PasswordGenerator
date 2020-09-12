# PasswordGenerator
A random password generator built using javascript functions and loops.

I started off by selecting my Id's using variables and the querySelector method.

Then creating my strings for each possible character that can be generated into my password, from lowercased, to uppercased, to numbers, to special characters.

Before the options are given to the user, the button must be clicked, triggering that addEventListener. Inside of the event listener is where each prompt and confirm rests.

If the user follows the length guidelines in the prompt, the else statement will follow through into the confirm statements. Each confirm is a yes or no boolean. If the boolean is confirmed to be true, it will log into the possible characters that can used to randomly generate the password.

The math.random methods randomly selects characters from each string that was confirmed to be true and is sent into the value of the passwordId.

When the random password is generated, the user will recieve an alert with their password information, and the password is sent into the password box on the page.

All information selected by the user is sent into the console log.
