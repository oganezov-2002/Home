function acceptCookies() {
    document.getElementById('cookieBanner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'all');
}

function declineCookies() {
    document.getElementById('cookieBanner').style.display = 'none';
    localStorage.setItem('cookiesAccepted', 'none');
}

function openSettings() {
    document.getElementById('cookieSettingsModal').style.display = 'flex';
}

function closeSettings() {
    document.getElementById('cookieSettingsModal').style.display = 'none';
}

function saveSettings() {
    const analytics = document.getElementById('analyticsCookies').checked;
    const marketing = document.getElementById('marketingCookies').checked;
    const functional = document.getElementById('functionalCookies').checked;
    
    localStorage.setItem('analyticsCookies', analytics);
    localStorage.setItem('marketingCookies', marketing);
    localStorage.setItem('functionalCookies', functional);
    
    closeSettings();
    document.getElementById('cookieBanner').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookieBanner').style.display = 'flex';
    }
});
