document.addEventListener('DOMContentLoaded', function () {
    const phoneNumberElement = document.getElementById('phoneNumber');

    phoneNumberElement.addEventListener('mouseover', function () {
        // Select the phone number text
        const phoneNumberText = this.innerText;

        // Create a temporary input element to copy the phone number to clipboard
        const tempInput = document.createElement('input');
        tempInput.value = phoneNumberText;
        document.body.appendChild(tempInput);

        // Select and copy the phone number text
        tempInput.select();
        document.execCommand('copy');

        // Remove the temporary input element
        document.body.removeChild(tempInput);

        // Display a tooltip or any visual indication
        console.log('Phone number copied!');
    });
});
