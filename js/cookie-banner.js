// Show cookie banner immediately if preferences aren't set
window.addEventListener('DOMContentLoaded', () => {
    if (!localStorage.getItem('cookiePreferences')) {
        document.querySelector('.cookie-banner').classList.add('show');
    }
});

// Handle cookie acceptance
function acceptCookies() {
    const preferences = {
        essential: true,
        analytics: true,
        marketing: true,
        personalization: true
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    hideBanner();
    applyCookiePreferences(preferences);
}

// Handle cookie rejection
function rejectCookies() {
    const preferences = {
        essential: true, // Essential cookies are always enabled
        analytics: false,
        marketing: false,
        personalization: false
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    hideBanner();
    applyCookiePreferences(preferences);
}

// Open cookie settings modal
function openCookieSettings() {
    const modal = document.getElementById('settingsModal');
    const overlay = document.getElementById('overlay');
    modal.classList.add('show');
    overlay.classList.add('show');

    // Load saved preferences
    const savedPreferences = JSON.parse(localStorage.getItem('cookiePreferences') || '{}');
    document.getElementById('analyticsCookies').checked = savedPreferences.analytics || false;
    document.getElementById('marketingCookies').checked = savedPreferences.marketing || false;
    document.getElementById('personalizationCookies').checked = savedPreferences.personalization || false;
}

// Close cookie settings modal
function closeCookieSettings() {
    const modal = document.getElementById('settingsModal');
    const overlay = document.getElementById('overlay');
    modal.classList.remove('show');
    overlay.classList.remove('show');
}

// Save cookie preferences
function saveCookiePreferences() {
    const preferences = {
        essential: true, // Always enabled
        analytics: document.getElementById('analyticsCookies').checked,
        marketing: document.getElementById('marketingCookies').checked,
        personalization: document.getElementById('personalizationCookies').checked
    };

    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    applyCookiePreferences(preferences);
    closeCookieSettings();
    hideBanner();
}

// Apply cookie preferences
function applyCookiePreferences(preferences) {
    console.log('Applying cookie preferences:', preferences);
    // Here you would implement the actual cookie management
    // For example:
    if (preferences.analytics) {
        // Enable analytics cookies
        console.log('Analytics cookies enabled');
    }
    if (preferences.marketing) {
        // Enable marketing cookies
        console.log('Marketing cookies enabled');
    }
    if (preferences.personalization) {
        // Enable personalization cookies
        console.log('Personalization cookies enabled');
    }
}

// Hide the banner with animation
function hideBanner() {
    const banner = document.querySelector('.cookie-banner');
    banner.style.opacity = '0';
    banner.style.transform = 'translateX(-50%) translateY(100px)';
    setTimeout(() => {
        banner.style.visibility = 'hidden';
    }, 500);
}

// Close modal when clicking overlay
document.getElementById('overlay').addEventListener('click', closeCookieSettings);
