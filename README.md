# Visual-Lanyon

Visual-Lanyon is a fork of [Lanyon](https://github.com/poole/lanyon) focused on redesigning the home page to create a more visuals-oriented experience. Visual Lanyon is a [Jekyll](http://jekyllrb.com) theme that provides a highly-specified home page layout without complexity. 


## Contents

- [Usage](#usage)
- [Options](#options)
  - [Themes](#themes)
- [Author](#author)
- [License](#license)


## Usage

Visual-Lanyon is a fork of [Lanyon](https://github.com/poole/lanyon), which itself is built on top of [Poole](https://github.com/poole/poole). Poole provides a fully furnished Jekyll setup—just download and start the Jekyll server. See [the Poole usage guidelines](https://github.com/poole/poole#usage) for how to install and use Jekyll.


## Options

Visual-Lanyon includes some customizable options, typically applied via classes on the `<body>` element. To understand more about customizing Visual-Lanyon, with the exception of color themes, see (https://github.com/poole/lanyon#readme).

### Themes

Themes control the feel of Visual-Lanyon by changing the color schemes. Themes can control the sidebar background color, hyper-text link color, and post title color.

Unlike Lanyon, Visual-Lanyon moves away from themes from being specified as a class in \<body\>. Rather, these values are controlled by $side-background-color, $title-color, and $link-color in the scss/themes.scss files. Colors may be specified by Hex, RGB, or HTML color codes. <br>

By default Visual-Lanyon ships with these defaults:

```scss
$sidebar-background-color: #4b4b4b;
$title-color: #303030;
$link-color: #268bd2;
```

If you are unfamiliar with SASS see [their documentation](https://sass-lang.com/documentation/) for more information. 

## Author

**ZaMan8**
- <https://github.com/Zaman8>


## License

Open sourced under the [MIT license](LICENSE.md).