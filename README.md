#### Web Component smapshot
### wc-smapshot-pictures

## Description

Smapshot offers a web component that you can reuse to integrate into your website with a simple customizable element.

Here is an overview:

![enter image description here](https://raw.githubusercontent.com/Vince17/wc-smapshot-pictures/main/screenshot.png)

**This web component is created with [Lit Element](https://lit.dev/)**

## Setup
Add the header tag script : 

    <script type="module" src="https://cdn.jsdelivr.net/gh/Vince17/wc-smapshot-pictures@main/element_smapshot.js"></script>

To use this web component, you must insert this tag : 

    <element_smapshot></element_smapshot>

There are 4 parameters in attribute :

-   looping (allows to slide to infinity)
-   limit (by default this value is set to 10)
-   lat (you have to define the latitude)
-   long (you have to define the longitude)

*Exemple (displays 15 pictures (looping)) with the coordinates of Yverdon):*

    <element_smapshot looping limit="15" lat="46.783502" long="6.644687"></element_smapshot>

### wc-smapshot-map

## Description

https://carto.com/help/building-maps/basemap-list/
