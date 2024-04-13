// Define a class to represent teams
class Team {
    constructor(id, eloRating) {
        this.id = id;
        this.eloRating = eloRating;
    }
}

// Function to initialize Elo rating for a team
function initializeElo(team) {
    if (team.eloRating === null || team.eloRating === undefined) {
        team.eloRating = 200;
    }
}

// Function to calculate the expected score for a team
function expectedScore(teamA, teamB) {
    return 1 / (1 + Math.pow(10, (teamB.eloRating - teamA.eloRating) / 400));
}

// Function to update Elo ratings for teams after a match
function updateElo(teamA, teamB, outcome) {
    const kFactor = 32; // Adjust this based on desired sensitivity
    const eloDifference = Math.abs(teamA.eloRating - teamB.eloRating);

    console.log(`Before update: Team A Elo: ${teamA.eloRating}, Team B Elo: ${teamB.eloRating}`);

    // Set initial Elo rating if team's Elo is 200 (no games played or new team)
    if (teamA.eloRating === 200) teamA.eloRating = 1500;
    if (teamB.eloRating === 200) teamB.eloRating = 1500;

    // Adjusted significant difference values for Elo rating of 200
    const significantlyHigher = 800; // Adjusted from 400
    const significantlySimilar = 300; // Adjusted from 100

    // Case 1: Team A eloRating is significantly higher than Team B eloRating
    if (eloDifference > significantlyHigher) { 
        switch (outcome) {
            // Team A wins
            case 'win': 
                teamA.eloRating += kFactor * (1 - expectedScore(teamA, teamB));
                teamB.eloRating -= kFactor * expectedScore(teamA, teamB);
                break;
            
            // Team A loses
            case 'lose':
                teamA.eloRating -= kFactor * (expectedScore(teamA, teamB) * 2);
                teamB.eloRating += kFactor * (1 - expectedScore(teamA, teamB) * 2);
                break;
            
            // Team A and Team B tie
            case 'draw':
                teamA.eloRating -= kFactor * (expectedScore(teamA, teamB) / 2);
                teamB.eloRating += kFactor * (expectedScore(teamA, teamB) / 2);
                break;
        }
    }
    // Case 2: Team A eloRating and Team B eloRating are significantly similar
    else if (eloDifference <= significantlyHigher && eloDifference >= significantlySimilar) { 
        switch (outcome) {
            // Team A wins
            case 'win':
                teamA.eloRating += kFactor * (1 - expectedScore(teamA, teamB));
                teamB.eloRating -= kFactor * expectedScore(teamA, teamB);
                break;
            
            // Team A loses
            case 'lose':
                teamA.eloRating -= kFactor * expectedScore(teamA, teamB);
                teamB.eloRating += kFactor * (1 - expectedScore(teamA, teamB));
                break;
            
            // Team A and Team B tie
            case 'draw':
                const averageElo = (teamA.eloRating + teamB.eloRating) / 2;
                teamA.eloRating = averageElo;
                teamB.eloRating = averageElo;
                break;
        }
    } 
    // Case 3: Team B eloRating is significantly higher than Team A eloRating
    else {
        switch (outcome) {
            // Team A loses
            case 'win': 
                teamA.eloRating -= kFactor * expectedScore(teamA, teamB);
                teamB.eloRating += kFactor * (1 - expectedScore(teamA, teamB));
                break;
            
            // Team A wins
            case 'lose':
                teamA.eloRating += kFactor * (1 - expectedScore(teamA, teamB) * 2);
                teamB.eloRating -= kFactor * (expectedScore(teamA, teamB) * 2);
                break;
            
            // Team A and Team B tie
            case 'draw':
                teamA.eloRating -= kFactor * (expectedScore(teamA, teamB) / 2);
                teamB.eloRating += kFactor * (expectedScore(teamA, teamB) / 2);
                break;
        }
    }

    console.log(`After update: Team A Elo: ${teamA.eloRating}, Team B Elo: ${teamB.eloRating}`);
}

// Function to find a match for a team
function findMatch(team, pool) {
    let bestMatch = null;
    let minEloDifference = Infinity;
    for (const opponent of pool) {
        const eloDifference = Math.abs(opponent.eloRating - team.eloRating);
        if (eloDifference < minEloDifference) {
            minEloDifference = eloDifference;
            bestMatch = opponent;
        }
    }
    return bestMatch;
}