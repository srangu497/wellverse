function searchCondition() {
  const query = document.getElementById('condition-search').value;
  document.getElementById('condition-results').innerText = `Searching for: ${query}`;
}

function checkSymptoms() {
  const symptoms = document.getElementById('symptoms').value;
  document.getElementById('symptom-results').innerText = `Analyzing symptoms: ${symptoms}`;
}

function showEmergencyGuide() {
  document.getElementById('emergency-instructions').innerText = "Call 911 for emergencies. Stay calm and follow basic first aid.";
}