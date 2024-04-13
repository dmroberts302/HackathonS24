
const { insertPlayer, fetchPlayerData, fetchTeamData } = require('./supabase');

const fetchData = async () => {
  const players = await fetchPlayerData();
  const teams = await fetchTeamData();

  console.log('Fetched players:', players);
  console.log('Fetched teams:', teams);
};
const addPlayer = async () => {
    await insertPlayer('John', "Doe"); 
  };
  
  fetchData();


