function calculateInheritance() {
    // Get input values
    const propertyType = document.getElementById('propertyType').value.trim();
    const plotSize = parseFloat(document.getElementById('plotSize').value);
    const brothers = parseInt(document.getElementById('brothers').value);
    const sisters = parseInt(document.getElementById('sisters').value);

    if (isNaN(plotSize) || isNaN(brothers) || isNaN(sisters)) {
        alert("Please enter valid numbers.");
        return;
    }

    if (!propertyType) {
        alert("Please enter the property type.");
        return;
    }

    // Calculate shares
    const sisterShare = 1;
    const brotherShare = 2;

    const totalShares = (sisters * sisterShare) + (brothers * brotherShare);
    const shareValue = plotSize / totalShares;

    // Calculate individual shares
    const brotherShareValue = shareValue * brotherShare;
    const sisterShareValue = shareValue * sisterShare;

    // Display results
    let resultText = `<p>Total ${propertyType.charAt(0).toUpperCase() + propertyType.slice(1)}: ${plotSize} ${propertyType}</p>`;
    resultText += `<p>Each Brother will receive: ${brotherShareValue.toFixed(2)} ${propertyType}</p>`;
    resultText += `<p>Each Sister will receive: ${sisterShareValue.toFixed(2)} ${propertyType}</p>`;

    document.getElementById('result').innerHTML = resultText;
}
