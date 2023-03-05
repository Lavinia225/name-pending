# Sketch Shooter

Sketch Shooter is a small game and game dev tool. For the game part, it involves the player trying to hit a moving target.
For the dev part, you can create players and mobs to experiance in the game by drawing them out, filling their fields, and submitting them to the backend server.

## Usage

#### Game

When it comes to the game, press <kbd>A</kbd> or <kbd>LeftArrow</kbd> to move left, and <kbd>D</kbd> or <kbd>RightArrow</kbd> to move right. <kbd>Space</kbd> will fire bullets, but you can only have one bullet in existance at a time. If you have not selected a 'player' character yet, you will be prompted to choose one and can switch to 
another at any time using the <kbd>Select New Player</kbd> button. Enemies spawn in sequential order of insertion in the database. Songs will automatically
be chosen at random after one ends.

![Gameplay Gif](./readme_images/Game%20Play.gif)

#### Dev Mode

Select <kbd>Players</kbd> or <kbd>Mobs</kbd> to see the list of the respective entity. Then press <kbd>New Mob/Player</kbd> to create them. If wanting to edit
an existing entity instead, press <kbd>edit</kbd> underneath them. Note that when eiditing mobs, there is presently a problem where the AI will automatically
be set to "Left-and-Right" and must be reselected.

![Dev Mode Gif](./readme_images/Dev%20Mode.gif)

## Contributing

Pull requests are welcome. Please be sure to email or open an issue related to the changes you would like to make.

## Project Status

In-Progress.

#### Potential Future Plans

These may never be implemented, but I intend to at least give them an honest effort.

*   Having the enemies shoot back
*   Figure out how to make default audio level not start at 100% without requiring user interaction first
*   Sound Effects
*   Make editing mobs not automatically set their ai to "Left-and-Right"
*   More AI options
*   Animated hitbox borders
*   Implement a fail message when failing to fetch resources from server
*   Ensure that no song can play twice in a row

## Contact

If you are having trouble, or would like to make a request or query, contact thepuddingdeity@gmail.com with the email subject as Sketch-Shooter Query

## Sources

*   Game Background by my good friend DontDisMooses🌻
*   [Eraser Icon](https://www.flaticon.com/free-icons/rubber)

#### Songs

*   Angel Eyes, Legends, and Leave the World Tonight by [Kim Lightyear](https://pixabay.com/users/lightyeartraxx-26697863/)
*   Man is he Mega by [Geoffrey Burch](https://pixabay.com/users/geoffreyburch-5739114/)
*   DNX by [DSTechnician](https://pixabay.com/users/dstechnician-26430546/)

## License

[MIT](https://choosealicense.com/licenses/mit/)