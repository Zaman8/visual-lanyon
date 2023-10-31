# Visual-Lanyon

Visual-Lanyon is a fork of [Lanyon](https://github.com/poole/lanyon) focused on redesigning the home page to create a more visuals-oriented experience. Visual Lanyon is a [Jekyll](http://jekyllrb.com) theme that provides a highly-specified home page layout without added complexity. For ease of reading only features that have been added or changed from Lanyon are detailed here. See [Lanyon's Documentation](https://github.com/poole/lanyon#usage) for how to get started. 


## Contents

- [Usage](#usage)
- [Options](#options)
  - [Themes](#themes)
  - [Analytics](#analytics)
- [Author](#author)
- [License](#license)


## Usage

Visual-Lanyon is a fork of [Lanyon](https://github.com/poole/lanyon), which itself is built on top of [Poole](https://github.com/poole/poole). Poole provides a fully furnished Jekyll setup—just download and start the Jekyll server. See [the Poole usage guidelines](https://github.com/poole/poole#usage) for how to install and use Jekyll.


## Options

Visual-Lanyon includes some customizable options, typically applied via classes on the `<body>` element. To understand more about customizing Visual-Lanyon, with the exception of color themes, see (https://github.com/poole/lanyon#readme).

### Themes

Themes control the feel of Visual-Lanyon by changing the color schemes. Themes can control the sidebar background color, hyper-text link color, and post title color.

Unlike Lanyon, Visual-Lanyon moves away from themes from being specified as a class in \<body\>. Rather, these values are controlled by $side-background-color, $title-color, and $link-color in the scss/themes.scss files. Colors may be specified by Hex, RGB, or HTML color codes. <br>

Visual-Lanyon ships with these defaults:

```scss
$sidebar-background-color: #4b4b4b;
$title-color: #303030;
$link-color: #268bd2;
```

If you are unfamiliar with SASS see [their documentation](https://sass-lang.com/documentation/) for more information. 

### Analytics

Visual Lanyon addes the ability to track analytics using [GoatCounter](https://www.goatcounter.com/), an open-source web analytics platform that is privacy friendly. GoatCounter can easily be set up by creating an account [here](https://www.goatcounter.com/signup) and providing your GoatCounter code in the configs file.

GoatCounter is very versitale. It is able to use Javascript trackers (as provided in this theme), tracking pixels, or server logs. Additionally, tracking can be self-hosted for those looking to gain more control over how data is collected. Check out their [Documentation](https://www.goatcounter.com/help/start) to learn more. Credit to [Martin Tournojj](https://github.com/arp242) for creating such an awesome tool!


## Author

**ZaMan8**
- <https://github.com/Zaman8>


## License

Open sourced under the [MIT license](LICENSE.md).