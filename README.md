# Tennis-Score-Tracker
Create a NodeJS server that can render a tennis game and provides an API that returns the score as the game progresses. For more information about tennis score and rules see http://tennis.about.com/cs/beginners/a/beginnerscore.htm.

The minimum UI in pseudo html you’ll need is:

-------
<div>Player 1</div><div>${player1Score}</div>
<div>Player 2</div><div>${player2Score}</div>

<div>Player ${playerThatWon} won!</div>

<button>Player 1 scored</button>
<button>Player 2 scored</button>

<button>Reset Game</button>
-------

Requirements:

-    The server is written in Node
-    The state of the game is kept on the server and the client is used to show said state
-    You can use Player1 and Player2 as the player names and not need to deal with having the user add this information
-    Add tests for your logic

Notes:

-    The server only needs to handle a single game at a time to avoid having to deal with multiple sessions. You are welcome to make it more advance but is not required
-    You will be adding functionality/testing to your project once you come to on-site interviews with some of our engineers so we expect you to understand the work
-    You can write your project in any version of Node you want and we won’t be really looking at styling so feel free to keep it simple
-    The actual logic of the problem is meant to be straightforward with no intentionally hidden gotchas
-    Please provide tests for your logic. Feel free to use the api or just test the logic directly