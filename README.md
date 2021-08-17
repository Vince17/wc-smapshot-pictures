# Web Components - Smapshot

**Web components are created with [Lit Element](https://lit.dev/)**

## wc-smapshot-pictures

### Description
  

Smapshot offers a web component that you can reuse to integrate into your website with a simple customizable element.
  

You have two different web components, the first one is an overview of the photos available on smapshot and the second one displays a map with the footprint of a specific smapshot photo.
  

Here is an overview of the smapshot pictures component :

![enter image description here](https://raw.githubusercontent.com/Vince17/wc-smapshot-pictures/master/screenshot.png)

### Setup


Add the header tag script :


	<script type="module" src="https://cdn.jsdelivr.net/gh/Vince17/wc-smapshot-pictures@master/element_smapshot.js"></script>
  

To use this web component, you must insert this tag :
  

	<element_smapshot></element_smapshot>


There are 4 parameters in attribute :

- lat (you have to define the latitude) **\***

- long (you have to define the longitude) **\***

- looping (allows to slide to infinity)

- limit (by default this value is set to 10)

- lightMode (to force light mode)

- darkMode (to force dark mode)
 

By default the web component detects the device theme to switch to light/dark mode :

![The dark mode](https://raw.githubusercontent.com/Vince17/wc-smapshot-pictures/master/screenshot_light_dark.png)

*Exemple (displays 15 pictures (looping)) with the coordinates of Yverdon):*


	<element_smapshot looping limit="15" lat="46.783502" long="6.644687"></element_smapshot>


## wc-smapshot-map

### Description

The second web components displays a map with the footprint of a specific smapshot photo.

Here is an overview of the smapshot map component :

![enter image description here](https://raw.githubusercontent.com/Vince17/wc-smapshot-pictures/master/screenshot_map.png)

### Setup


Add the header tag script : 


	<script type="module" src="https://cdn.jsdelivr.net/gh/Vince17/wc-smapshot-pictures@master/map_smapshot.js"></script>
 

To use this web component, you must insert this tag : 


	<map_smapshot></map_smapshot>
 

There are 4 parameters in attribute :

- original_id (ID of your picture from smapshot) **\***

- colorStryle (by default the color is blue, but you can change it)

- attriubtionCust (by default the text is 'Map data &copy;  <a  target="_blank"  href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>')

- urlMapLight (URL of the light map)

- urlMapDark (URL of the dark map)

- lightMode (to force light mode)

- darkMode (to force dark mode)


Basemap of the web component : https://carto.com/help/building-maps/basemap-list/

By default the web component detects the device theme to switch to light/dark mode :

![The dark mode](https://raw.githubusercontent.com/Vince17/wc-smapshot-pictures/master/screenshot_map_light_dark.png)

*Exemple :*

	<map-smapshot lightMode colorStyle='red' attributionCust='HEIG-VD' colorStyle='#c10000' urlMapLight='https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png' original_id='VD1510ChateauDOex'></map-smapshot>
