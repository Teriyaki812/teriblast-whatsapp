<div align="center">

# Teriblast for Whatsapp Web
A customizable theme for [WhatsApp Web](https://web.whatsapp.com) that might defy the status quo

</div>

## Quickstart

The intented way to use this theme is via an extension manager. You can follow these step for a quick setup:

- Install a **userscript manager** as a browser extension ([ViolentMonkey](https://violentmonkey.github.io/) or [TamperMonkey](https://www.tampermonkey.net/)).
- Get the theme into your browser by [clicking here](https://github.com/Teriyaki812/teriblast-whatsapp/raw/main/Teriblast-WS.user.js).

### Customization
You can change any of the main accent colors here by replacing the corresponding hex values

```css
:root {
    --blast-background: #321330;
    --blast-accent: #60365d;
    --blast-border: #89919f;
}
```
Note that editing or even adding new hex values is also possible

To change the background image you can replace the following imgur link with your desired picture link. Will default to accent color if link is invalid

```css
background: url(https://i.imgur.com/12ThblS.png) !important;
```

You can also change text elements by making use of the `replaceContent` function by fetching the corresponding class name you want to modify
```js
replaceContent(className, newContent);
```

## Additional Notes
- Only dark mode is supported (will break when using light mode)
- Some elements may not work properly if "beta testing" is enabled
- You **must** have the "Add Whatsapp Doodles" toggle enabled in order for the background picture to display
