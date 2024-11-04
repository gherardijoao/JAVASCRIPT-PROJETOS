document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const checkBtn = document.getElementById('check-btn');
    const result = document.getElementById('result');

    // Check if string is palindrome
    function isPalindrome(str) {
        // Keep only alphanumeric characters and convert to lowercase
        const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
        
        // Compare with its reverse
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    // Handle the palindrome check
    function checkPalindrome() {
        // Clear previous styling
        result.className = '';
        
        // Check for empty input
        if (!textInput.value.trim()) {
            alert('Please input a value');
            return;
        }

        const inputText = textInput.value;
        const isPal = isPalindrome(inputText);
        
        // Set the result text
        result.textContent = `${inputText} is ${isPal ? 'a' : 'not a'} palindrome`;
        
        // Add appropriate styling class
        result.classList.add(isPal ? 'palindrome' : 'not-palindrome');
    }

    // Event listeners
    checkBtn.addEventListener('click', checkPalindrome);
    
    // Add Enter key support
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPalindrome();
        }
    });
});