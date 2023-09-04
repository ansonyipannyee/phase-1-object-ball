function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22, 
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12, 
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17, 
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26, 
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19, 
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10, 
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12, 
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24, 
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33, 
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6, 
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

console.log(gameObject());

function numPointsScored(playerName) {
    for (const team in gameObject()) {
        if (gameObject()[team].players.hasOwnProperty(playerName)) {
            return gameObject()[team].players[playerName].points;
        }
    }
    return 'Player not found';
}

console.log(numPointsScored("Alan Anderson"));

function shoeSize(playerName) {
    for (const team in gameObject()) {
        if (gameObject()[team].players.hasOwnProperty(playerName)) {
            return gameObject()[team].players[playerName].shoe;
        }
    }
    return 'Player not found';
}

console.log(shoeSize("Alan Anderson"));

function teamColors(teamName) {
    for (const team in gameObject()) {
        if (gameObject()[team].teamName === teamName) {
            return gameObject()[team].colors;
        }
    }
    return 'Team not found';
}

console.log(teamColors("Brooklyn Nets"));

function teamNames() {
    const teams = gameObject();
    return [teams.home.teamName, teams.away.teamName];
}

console.log(teamNames());

function playerNumbers(teamName) {
    const team = teamName === gameObject().home.teamName ? 'home' : 'away';
    const players = gameObject()[team].players;
    return Object.values(players).map(player => player.number);
}

console.log(playerNumbers("Brooklyn Nets"));

function playerStats(playerName) {
    for (const team in gameObject()) {
        if (gameObject()[team].players.hasOwnProperty(playerName)) {
            return gameObject()[team].players[playerName];
        }
    }
    return null;
}

console.log(playerStats("Alan Anderson"));

function bigShoeRebounds() {
    let maxShoeSize = 0;
    let maxRebounds = 0;

    for (const team in gameObject()) {
        const players = gameObject()[team].players;
        for (const player in players) {
            const currentShoeSize = players[player].shoe;
            if (currentShoeSize > maxShoeSize) {
                maxShoeSize = currentShoeSize;
                maxRebounds = players[player].rebounds;
            }
        }
    }
    return maxRebounds;
}

console.log(bigShoeRebounds());

function mostPointsScored() {
    let maxPoints = 0;
    let playerWithMostPoints = '';

    for (const team in gameObject()) {
        const players = gameObject()[team].players;
        for (const player in players) {
            const currentPoints = players[player].points;
            if (currentPoints > maxPoints) {
                maxPoints = currentPoints;
                playerWithMostPoints = player;
            }
        }
    }

    return playerWithMostPoints;
}

console.log(mostPointsScored());

function winningTeam() {
    let homePoints = 0;
    let awayPoints = 0;

    for (const team in gameObject()) {
        const players = gameObject()[team].players;
        for (const player in players) {
            if (team === 'home') {
                homePoints += players[player].points;
            } else {
                awayPoints += players[player].points;
            }
        }
    }

    if (homePoints > awayPoints) {
        return gameObject().home.teamName;
    } else if (awayPoints > homePoints) {
        return gameObject().away.teamName;
    } else {
        return "It's a tie!";
    }
}

console.log(winningTeam());

function playerWithLongestName() {
    let longestName = '';

    for (const team in gameObject()) {
        const players = gameObject()[team].players;
        for (const player in players) {
            if (player.length > longestName.length) {
                longestName = player;
            }
        }
    }

    return longestName;
}

console.log(playerWithLongestName());
