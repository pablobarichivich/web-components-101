// We use clases to define the structure and logic that our components
// will have. It need to extend from HTMLElement
class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;
        this._tooltipText = 'Some dummy tooltip text.';
	}
	
	// Method called when adding the element to the dom
	connectedCallback() {
        // pass text attribute set in tag to the object variable
        if (this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }
		const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';
		tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.appendChild(tooltipIcon);
    }
    
    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        this.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        this.removeChild(this._tooltipContainer);
    }
}

// customElement is use to register our components and define the html tag
// that we will use for it.
// It recibe two parameters, the tag name and the class
// The tag name need to have at least two words separated by an '-'
customElements.define('pb-tooltip', Tooltip);
