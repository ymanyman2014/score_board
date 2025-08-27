<script setup>
import { reactive, onMounted, watch, onUnmounted } from "vue";
import axios from "axios";

const courts = reactive([]);
const leagueTable1 = reactive([]);
const leagueTable2 = reactive([]);

// Fetch data from backend
async function fetchData() {
  const [courtsRes, table1Res, table2Res] = await Promise.all([
    axios.get("http://localhost:3001/api/courts"),
    axios.get("http://localhost:3001/api/leagueTable1"),
    axios.get("http://localhost:3001/api/leagueTable2"),
  ]);
  courts.splice(0, courts.length, ...courtsRes.data);
  leagueTable1.splice(0, leagueTable1.length, ...table1Res.data);
  leagueTable2.splice(0, leagueTable2.length, ...table2Res.data);
}

let pollInterval = null;
onMounted(() => {
  fetchData();
  pollInterval = setInterval(fetchData, 2000); // Poll every 2 seconds
});
onUnmounted(() => {
  if (pollInterval) clearInterval(pollInterval);
});

// Watch and update backend when data changes
watch(
  courts,
  (val) => {
    axios.put("http://localhost:3001/api/courts", val);
  },
  { deep: true }
);
watch(
  leagueTable1,
  (val) => {
    axios.put("http://localhost:3001/api/leagueTable1", val);
  },
  { deep: true }
);
watch(
  leagueTable2,
  (val) => {
    axios.put("http://localhost:3001/api/leagueTable2", val);
  },
  { deep: true }
);

function updateScore(courtIdx, setIdx, delta) {
  // ...existing code...
}
</script>

<template>
  <div class="bg-scoreboard">
    <router-view
      :courts="courts"
      :updateScore="updateScore"
      :leagueTable1="leagueTable1"
      :leagueTable2="leagueTable2"
    />
  </div>
</template>

<style scoped>
.bg-scoreboard {
  min-height: 100vh;
  min-width: 100vw;
  background: url("@/images/bg_score_board.jpg") no-repeat center center fixed;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
