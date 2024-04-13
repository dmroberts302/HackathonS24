
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient('https://cewxrudojjzftrspppwq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNld3hydWRvamp6ZnRyc3BwcHdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NzE3MDYsImV4cCI6MjAyODU0NzcwNn0.ln_xQNXSKRvqszwNWWl7_PJen5pOw866JFdfT6gYx2g');

const fetchPlayerData = async () => {
    try {
      const { data: players, error } = await supabase.from('player').select('*');
      if (error) {
        console.error('Error fetching player data:', error.message);
      } else {
        console.log('Player data:', players);
        
        players.forEach(player => console.log('Player name:', player.name));
        return players;
      }
    } catch (error) {
      console.error('Error fetching player data:', error.message);
      return null;
    }
  };
  
  const fetchTeamData = async () => {
    try {
      const { data: teams, error } = await supabase.from('team').select('*');
      if (error) {
        console.error('Error fetching team data:', error.message);
      } else {
        console.log('Team data:', teams);
        return teams;
      }
    } catch (error) {
      console.error('Error fetching team data:', error.message);
      return null;
    }
  };

  const insertPlayer = async (first_name, last_name) => {
    try {
      const { data, error } = await supabase
        .from('player')
        .insert([{ first_name, last_name }]); 
      
      if (error) {
        console.error('Error inserting player:', error.message);
      } else {
        console.log('Player inserted successfully:', data);
      }
    } catch (error) {
      console.error('Error inserting player:', error.message);
    }
  };
  
  module.exports = { insertPlayer, fetchPlayerData, fetchTeamData };
