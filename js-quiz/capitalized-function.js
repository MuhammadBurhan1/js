function capitalizeWords(str) {
    // Split the string into words
    const words = str.split(' ');
    
    // Capitalize the first letter of each word and join them back into a string
    const capitalizedWords = words.map(word => {
        if (word.length === 0) return word; // Handle empty words (e.g., multiple spaces)
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    
    // Join the words back into a single string
    return capitalizedWords.join(' ');
}

// Example usage:
console.log(capitalizeWords('hello world')); // Output: "Hello World"
console.log(capitalizeWords('javaScript is fun')); // Output: "Javascript Is Fun"
console.log(capitalizeWords('  multiple   spaces  ')); // Output: "  Multiple   Spaces  "
