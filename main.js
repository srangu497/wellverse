function searchCondition() {
    const query = document.querySelector('#condition-lookup input').value.trim();

    if (!query) {
        alert('Please enter a condition to search.');
        return;
    }

    // Construct the Mayo Clinic search URL
    const mayoSearchUrl = `https://www.mayoclinic.org/search/search-results?q=${encodeURIComponent(query)}`;

    // Open the Mayo Clinic search results page in a popup box
    window.open(
        mayoSearchUrl,
        'MayoClinicSearch',
        'width=800,height=600,scrollbars=yes,resizable=yes'
    );
}

// Emergency conditions and steps
const emergencyConditions = {
    "Heart Attack": [
        "Call 911 immediately.",
        "Have the person sit down and stay calm.",
        "Loosen tight clothing.",
        "If available, give aspirin (unless allergic).",
        "Perform CPR if the person becomes unconscious and stops breathing."
    ],
    "Stroke": [
        "Call 911 immediately.",
        "Check for FAST symptoms: Face drooping, Arm weakness, Speech difficulty.",
        "Keep the person comfortable and calm.",
        "Do not give food or drink.",
        "Note the time symptoms started."
    ],
    "Choking": [
        "Ask if the person can cough or speak.",
        "If not, perform the Heimlich maneuver.",
        "Call 911 if the object does not dislodge.",
        "Continue abdominal thrusts until help arrives."
    ],
    "Severe Bleeding": [
        "Call 911 immediately.",
        "Apply firm pressure to the wound with a clean cloth.",
        "Elevate the injured area if possible.",
        "Do not remove embedded objects; apply pressure around them."
    ],
    "Burns": [
        "Cool the burn under running water for 10-20 minutes.",
        "Cover the burn with a sterile, non-stick dressing.",
        "Do not apply ice, butter, or ointments.",
        "Call 911 for severe burns or if the burn covers a large area."
    ],
    "Allergic Reaction": [
        "Call 911 if the person has difficulty breathing or swelling.",
        "Use an epinephrine auto-injector (EpiPen) if available.",
        "Keep the person calm and monitor their breathing.",
        "Lay the person flat and elevate their legs if they feel faint."
    ],
    "Asthma Attack": [
        "Help the person use their inhaler (2 puffs every 4 minutes).",
        "Encourage slow, deep breaths.",
        "Call 911 if symptoms do not improve after 10 minutes.",
        "Monitor the person until help arrives."
    ],
    "Seizure": [
        "Do not restrain the person.",
        "Clear the area of sharp or dangerous objects.",
        "Place the person on their side to keep the airway clear.",
        "Call 911 if the seizure lasts more than 5 minutes."
    ],
    "Poisoning": [
        "Call Poison Control at 1-800-222-1222 or 911.",
        "Do not induce vomiting unless instructed by a professional.",
        "Provide details about the poison (e.g., container, label).",
        "Monitor the person for symptoms like difficulty breathing."
    ],
    "Heat Stroke": [
        "Call 911 immediately.",
        "Move the person to a cool, shaded area.",
        "Cool the person with wet cloths or a fan.",
        "Do not give fluids if the person is unconscious."
    ],
    "Hypothermia": [
        "Call 911 immediately.",
        "Move the person to a warm, dry place.",
        "Remove wet clothing and cover with blankets.",
        "Do not apply direct heat or give alcohol."
    ],
    "Fracture": [
        "Call 911 if the fracture is severe or the bone is visible.",
        "Immobilize the injured area.",
        "Apply a cold pack to reduce swelling.",
        "Do not attempt to realign the bone."
    ],
    "Electric Shock": [
        "Call 911 immediately.",
        "Turn off the power source if safe to do so.",
        "Do not touch the person if they are still in contact with electricity.",
        "Check for breathing and perform CPR if necessary."
    ],
    "Drowning": [
        "Call 911 immediately.",
        "Remove the person from the water if safe to do so.",
        "Check for breathing and perform CPR if necessary.",
        "Keep the person warm and monitor their condition."
    ],
    "Snake Bite": [
        "Call 911 immediately.",
        "Keep the person calm and still to slow the spread of venom.",
        "Keep the bite area below the level of the heart.",
        "Do not apply ice or attempt to suck out the venom."
    ],
    "Dog Bite": [
        "Wash the wound with soap and water.",
        "Apply an antibiotic ointment and cover with a clean bandage.",
        "Seek medical attention for deep wounds or if the dog is unknown.",
        "Monitor for signs of infection."
    ],
    "Eye Injury": [
        "Do not rub or apply pressure to the eye.",
        "Flush the eye with clean water if a chemical is involved.",
        "Cover the eye with a sterile dressing.",
        "Seek immediate medical attention."
    ],
    "Nosebleed": [
        "Sit the person down and lean them slightly forward.",
        "Pinch the soft part of the nose for 10-15 minutes.",
        "Apply a cold pack to the bridge of the nose.",
        "Seek medical attention if bleeding persists."
    ],
    "Fainting": [
        "Lay the person flat on their back.",
        "Elevate their legs to improve blood flow.",
        "Loosen tight clothing.",
        "Call 911 if the person does not regain consciousness quickly."
    ],
    "Panic Attack": [
        "Encourage slow, deep breaths.",
        "Reassure the person and stay calm.",
        "Move to a quiet, safe space.",
        "Seek medical attention if symptoms persist or worsen."
    ],
    "Head Injury": [
        "Call 911 if the person loses consciousness or has severe symptoms.",
        "Keep the person still and avoid moving their head.",
        "Apply a cold pack to reduce swelling.",
        "Monitor for signs of a concussion."
    ],
    "Chest Pain": [
        "Call 911 immediately if the pain is severe or persistent.",
        "Have the person sit down and stay calm.",
        "Loosen tight clothing.",
        "Monitor their breathing and provide CPR if necessary."
    ],
    "Diabetic Emergency": [
        "Give the person a sugary drink or snack if they are conscious.",
        "Call 911 if the person is unconscious or unresponsive.",
        "Monitor their condition until help arrives.",
        "Do not give food or drink if the person is unconscious."
    ],
    "Anaphylaxis": [
        "Call 911 immediately.",
        "Use an epinephrine auto-injector (EpiPen) if available.",
        "Lay the person flat and elevate their legs.",
        "Monitor their breathing and provide CPR if necessary."
    ],
    "Heat Exhaustion": [
        "Move the person to a cool, shaded area.",
        "Have them drink water or a sports drink.",
        "Loosen tight clothing and apply cool, wet cloths.",
        "Seek medical attention if symptoms worsen."
    ],
    "Broken Tooth": [
        "Rinse the mouth with warm water.",
        "Apply a cold pack to reduce swelling.",
        "Save any broken pieces of the tooth if possible.",
        "See a dentist as soon as possible."
    ],
    "Sprain": [
        "Rest the injured area and avoid putting weight on it.",
        "Apply ice to reduce swelling (20 minutes at a time).",
        "Compress the area with an elastic bandage.",
        "Elevate the injured area above heart level."
    ],
    "Sunburn": [
        "Move out of the sun and into a cool, shaded area.",
        "Apply aloe vera or a cool compress to the affected area.",
        "Drink plenty of fluids to stay hydrated.",
        "Avoid further sun exposure until healed."
    ],
    "Insect Sting": [
        "Remove the stinger if visible by scraping it off with a card.",
        "Wash the area with soap and water.",
        "Apply a cold pack to reduce swelling.",
        "Seek medical attention if there is an allergic reaction."
    ]
    ,
    "Carbon Monoxide Poisoning": [
        "Move the person to fresh air immediately.",
        "Call 911 or emergency services.",
        "Administer oxygen if available and trained to do so.",
        "Do not re-enter the area until it is deemed safe."
    ],
    "Alcohol Poisoning": [
        "Call 911 immediately.",
        "Keep the person awake and sitting up if possible.",
        "Turn the person on their side to prevent choking if unconscious.",
        "Do not leave the person alone."
    ],
    "Hypoglycemia": [
        "Give the person a sugary drink or snack.",
        "If unconscious, do not give food or drink.",
        "Call 911 if the person does not respond.",
        "Monitor their condition until help arrives."
    ],
    "Hyperglycemia": [
        "Encourage the person to drink water.",
        "Monitor blood sugar levels.",
        "Call 911 if symptoms worsen or if the person is unconscious.",
        "Do not give insulin unless prescribed."
    ],
    "Kidney Stones": [
        "Drink plenty of fluids to help pass the stone.",
        "Take over-the-counter pain relievers.",
        "Seek medical attention if the pain is severe or persistent.",
        "Monitor for blood in urine or fever."
    ],
    "Appendicitis": [
        "Call 911 if the person has severe abdominal pain.",
        "Do not give food or drink.",
        "Keep the person comfortable and calm.",
        "Monitor for fever or vomiting."
    ],
    "Gallbladder Attack": [
        "Call 911 if the person has severe abdominal pain.",
        "Do not give food or drink.",
        "Keep the person comfortable and calm.",
        "Monitor for fever or jaundice."
    ],
    "Pneumonia": [
        "Call 911 if the person has difficulty breathing.",
        "Keep the person comfortable and calm.",
        "Encourage deep breathing and coughing.",
        "Monitor for fever or chest pain."
    ],
    "Kidney Infection": [
        "Call 911 if the person has severe abdominal or back pain.",
        "Encourage fluid intake.",
        "Monitor for fever or changes in urination.",
        "Seek medical attention if symptoms worsen."
    ],
    "Urinary Tract Infection": [
        "Encourage fluid intake.",
        "Monitor for fever or changes in urination.",
        "Seek medical attention if symptoms worsen.",
        "Avoid caffeine and alcohol."
    ],
    "Constipation": [
        "Encourage fluid intake and high-fiber foods.",
        "Consider over-the-counter laxatives.",
        "Seek medical attention if symptoms persist.",
        "Monitor for severe abdominal pain."
    ],
    "Diarrhea": [
        "Encourage fluid intake to prevent dehydration.",
        "Avoid dairy, caffeine, and fatty foods.",
        "Seek medical attention if symptoms persist.",
        "Monitor for signs of dehydration."
    ],
    "Nausea and Vomiting": [
        "Encourage the person to rest.",
        "Offer clear fluids in small sips.",
        "Avoid solid foods until symptoms improve.",
        "Seek medical attention if symptoms persist."
    ],
    "Acid Reflux": [
        "Encourage the person to sit upright.",
        "Avoid spicy or fatty foods.",
        "Consider over-the-counter antacids.",
        "Seek medical attention if symptoms persist."
    ],
    "Gastroenteritis": [
        "Encourage fluid intake to prevent dehydration.",
        "Avoid solid foods until symptoms improve.",
        "Seek medical attention if symptoms persist.",
        "Monitor for signs of dehydration."
    ],
    "Food Poisoning": [
        "Encourage fluid intake to prevent dehydration.",
        "Avoid solid foods until symptoms improve.",
        "Seek medical attention if symptoms persist.",
        "Monitor for signs of dehydration."
    ],
    "Stomach Ulcer": [
        "Avoid spicy or acidic foods.",
        "Consider over-the-counter antacids.",
        "Seek medical attention if symptoms worsen.",
        "Monitor for signs of bleeding."
    ],
    "Diverticulitis": [
        "Encourage fluid intake and a high-fiber diet.",
        "Consider over-the-counter pain relievers.",
        "Seek medical attention if symptoms worsen.",
        "Monitor for fever or severe abdominal pain."
    ],
    "Irritable Bowel Syndrome": [
        "Encourage a high-fiber diet.",
        "Consider over-the-counter medications.",
        "Seek medical attention if symptoms worsen.",
        "Monitor for changes in bowel habits."
    ],
    "Celiac Disease": [
        "Avoid gluten-containing foods.",
        "Consider over-the-counter medications for symptoms.",
        "Seek medical attention if symptoms worsen.",
        "Monitor for signs of malnutrition."
    ],

};

// Populate the dropdown with conditions
function populateEmergencyConditions() {
    const select = document.getElementById('condition-select');
    Object.keys(emergencyConditions).forEach(condition => {
        const option = document.createElement('option');
        option.value = condition;
        option.textContent = condition;
        select.appendChild(option);
    });
}

// Show steps for the selected condition
function showEmergencyGuide() {
    const condition = document.getElementById('condition-select').value;
    const instructionsDiv = document.getElementById('emergency-instructions');

    if (!condition) {
        instructionsDiv.innerHTML = '<p>Please select a condition to view instructions.</p>';
        return;
    }

    const steps = emergencyConditions[condition];
    instructionsDiv.innerHTML = `
        <h3>Steps for ${condition}</h3>
        <ol>
            ${steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
}

// Populate the dropdown when the page loads
document.addEventListener('DOMContentLoaded', populateEmergencyConditions);