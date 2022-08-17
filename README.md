# Random Advice Generator

A simple app that generates random advice using the [Advice Slip JSON API](https://api.adviceslip.com/).

This was a solution to a frontendmentor challenge. I wanted to change it using a different API, however I couldn't find one that worked or was interesting to me, so I stuck with this and changed the color scheme a bit.

(There might be an issue where it seemingly only generates random advice once -- in the docs it should only be cached for 2 seconds before getting a different result)

### Built with

- ReactJS
- SCSS

### Useful resources

- [reactjs - How to display svg icons(.svg files) in UI using React Component? - Stack Overflow](https://stackoverflow.com/questions/42296499/how-to-display-svg-icons-svg-files-in-ui-using-react-component) - Here's where I got the bright idea to make the Dice svg as a React  Component... though I'm not too sure if I'm violating any best practices by doing that lol
- [Creating Glow Effects with CSS / Coder's Block](https://codersblock.com/blog/creating-glow-effects-with-css/) - This helped me to create the glow effects for the button's hover and active states

### Continued development

I could use a different API for this, and maybe add a toggle dark/light mode feature.
