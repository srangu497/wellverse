async function searchCondition() {
    const query = document.querySelector('#condition-lookup input').value.trim();
    const resultsDiv = document.getElementById('condition-results');

    // Clear previous results
    resultsDiv.innerHTML = '';

    if (!query) {
        resultsDiv.innerHTML = '<p>Please enter a condition to search.</p>';
        return;
    }

    resultsDiv.innerHTML = '<p>Searching...</p>';

    try {
        // Use a CORS proxy to fetch the Mayo Clinic search results page
        const corsProxy = 'https://cors-anywhere.herokuapp.com/';
        const mayoSearchUrl = `https://www.mayoclinic.org/search/search-results?q=${encodeURIComponent(query)}`;
        const response = await fetch(corsProxy + mayoSearchUrl);
        const html = await response.text();

        // Parse the HTML using DOMParser
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Extract search results
        const results = doc.querySelectorAll('.search-results .result-item');
        if (results.length === 0) {
            resultsDiv.innerHTML = '<p>No results found. Please try another search term.</p>';
            return;
        }

        // Display the results
        resultsDiv.innerHTML = Array.from(results)
            .map(result => {
                const title = result.querySelector('h3 a').textContent.trim();
                const link = result.querySelector('h3 a').href;
                const description = result.querySelector('.description')?.textContent.trim() || 'No description available.';

                return `
                    <div class="result-item">
                        <h3>${title}</h3>
                        <p>${description}</p>
                        <p><a href="${link}" target="_blank">Read more on Mayo Clinic</a></p>
                    </div>
                `;
            })
            .join('');
    } catch (error) {
        resultsDiv.innerHTML = '<p>An error occurred while searching. Please try again later.</p>';
        console.error('Error:', error);
    }
}