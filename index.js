// Adds 'reverse' to all Strings.
String.prototype.reverse = function() {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;
	
	this.processedContent = function processedContent () {
		return this.content.toLowerCase();
	}

	// Returns true for palindrome, false otherwise.
	this.palindrome = function palindrome () {
		return this.processedContent() === this.processedContent().reverse();	
	}
}