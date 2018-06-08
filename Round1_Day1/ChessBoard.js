// Eloquent JavaScript : Exercice 3
// ChessBoard
/*
	Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
	At each position of the grid there is either a space or a "#" character.
	The characters should form a chessboard.

	Passing this string to console.log should show something like this:

	 # # # #
	# # # #
	 # # # #
	# # # #
	 # # # #
	# # # #
	 # # # #
	# # # #

	When you have a program that generates this pattern, define a binding size = 8
	and change the program so that it works for any size, outputting a grid of the given width and height.
 */

function board(size) {
	for (let i = 1; i<=size; i++) {
		let m = '';

		for(let j = 1; j<=size; j++) {
			if((i%2 == 1 && j%2 == 1) || (i%2 == 0 && j%2 == 0)) {
				m = m + ' ';
			} else {
				m = m + '#';
			}
		}

		console.log(m);
	}
}

board(8);
