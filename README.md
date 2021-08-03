# wc-smapshot-pictures

******************************************

Add the follow tag : <script type="module" src="url_script"></script>

To use this web component, you must insert this tag : <element_smapshot></element_smapshot>

There are 4 parameters in attribute :
- looping (allows to slide to infinity)
- limit (by default this value is set to 10)
- lat (you have to define the latitude)
- long (you have to define the longitude)

Exemple (displays 15 pictures (looping)) with the coordinates of Yverdon):

<element_smapshot looping limit="15" lat="46.783502" long="6.644687"></element_smapshot>
