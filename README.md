# Visual-Lanyon

Visual-Lanyon is a fork of [Lanyon](https://github.com/poole/lanyon) focused on redesigning the home page to create a more visuals-oriented experience. Visual Lanyon is a [Jekyll](http://jekyllrb.com) theme that allows for design flexibility displaying posts on the home page. 

![Lanyon](https://f.cloud.github.com/assets/98681/1825266/be03f014-71b0-11e3-9539-876e61530e24.png)
![Lanyon with open sidebar](https://f.cloud.github.com/assets/98681/1825267/be04a914-71b0-11e3-966f-8afe9894c729.png)


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

Unlike Lanyon, Visual-Lanyon moves themes from being specified as a class in \<body\> to the themes.scss file. Themes can control the sidebar background color, hyper-text link color, and post title color.

These values are controlled by $side-background-color, $title-color, and $link-color in the scss/themes.scss. Colors may be specified by Hex, RGB, or HTML color codes. <br>

By default Visual-Lanyon ships with these defaults:

```scss
$sidebar-background-color: #4b4b4b;
$title-color: #303030;
$link-color: #268bd2;
```

If you are unfamiliar with scss see [their documentation](https://sass-lang.com/documentation/)

## Author

**ZaMan8**
- <https://github.com/Zaman8>


## License

Open sourced under the [MIT license](LICENSE.md).