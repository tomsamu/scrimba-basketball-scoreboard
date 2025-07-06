// Score tablets
let homeScore = 0;
let guestScore = 0;

let homeScoreGraphic = document.getElementById('home-score');
let guestScoreGraphic = document.getElementById('guest-score');

// Start scores
homeScoreGraphic.textContent = 0;
guestScoreGraphic.textContent = 0;
// Buttons

function addHome(num) {
    homeScore += num;
    homeScoreGraphic.textContent = homeScore;
    console.log(`Home scored ${num} points. Now at: ${homeScore} points. ${homeScore > guestScore ? 'Home leads.' : 'Away Leads'}`)
}

function addGuest(num) {
    guestScore += num;
    guestScoreGraphic.textContent = guestScore;
    console.log(`Guest scored ${num} points. Now at: ${guestScore} points. ${whoLeads()}`);
}

function whoLeads() {
    if (homeScore > guestScore) {
        return "Home Leads.";
    } else if (homeScore < guestScore) {
        return "Guest leads.";
    } else if (homeScore === guestScore) {
        return "It's a tie."
    }
    
}