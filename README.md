# Tennis-Score-Tracker
Create a NodeJS server that can render a tennis game and provides an API that returns the score as the game progresses. For more information about tennis score and rules see http://tennis.about.com/cs/beginners/a/beginnerscore.htm.

To start, run:
`npm run devStart`
`npm run mainServer`

You'll need two terminals to create this. Once both have successfully launched, head over to [http://127.0.0.1:5500/](http://127.0.0.1:5500/).

Test Logic:
1) p1 -> p1 (30:0) -> p1
This should result in 40:0, and p1 should be declared the winner.

2) p1 -> p2 -> (15:15) p1 -> p2 (30:30) -> p1 (40:30) -> p1
This should result in 40:30 (I didn't want to use ADV:30 since that's not how TV scores are shown), and p1 should be declared the winner.

3) p1 -> p2 -> p1 -> p2 -> p1 -> p2 (40:40) -> p1 -> p1
This should result in ADV:40, and p1 should be declared the winner.

4) p1 -> p2 -> p1 -> p2 -> p1 -> p2 (40:40) -> p1 -> p2 (40:40) -> p2 -> p2
This should result in 40:ADV, and p2 should be declared the winner.

5) Immediately after the winner has been announced, any further point increases will result in an alert.
This will prompt the user to reset the game, as the current game is now over.

6) Note that all of the test logic above can be reversed (e.g. p1 and p2 swapped).