<template>
  <div class="container py-4">
    <div class="mb-4 text-center">
      <img
        src="@/images/Banner.png"
        alt="Scoreboard Banner"
        class="img-fluid"
        style="max-height: 120px"
      />
    </div>

    <div class="row g-4">
      <div class="col-md-3" v-for="(court, cIdx) in courts" :key="court.id">
        <div style="background-color: none">
          <div class="text-white text-center">
            <h4 class="mb-0">{{ court.name.toUpperCase() }}</h4>
          </div>
          <div class="card-body">
            <div
              class="team-row d-flex align-items-center text-white mt-4"
              style="
                border: 1px solid #fff;
                padding: 10px;
                border-radius: 8px 8px 0px 0px;
              "
            >
              <img
                :src="getFlagUrl(court.teams[0].flag)"
                :alt="court.teams[0].flag"
                class="me-2 flag-img"
              />
              <span class="team-name flex-grow-1">{{
                court.teams[0].name
              }}</span>
              <span
                v-for="(score, sIdx) in court.teams[0].scores"
                :key="'A' + sIdx"
                class="score ms-2"
                >{{ score }}</span
              >
            </div>
            <div
              class="team-row d-flex align-items-center text-white"
              style="
                border: 1px solid #fff;
                padding: 10px;
                border-radius: 0px 0px 8px 8px;
              "
            >
              <img
                :src="getFlagUrl(court.teams[1].flag)"
                :alt="court.teams[1].flag"
                class="me-2 flag-img"
              />
              <span class="team-name flex-grow-1">{{
                court.teams[1].name
              }}</span>
              <span
                v-for="(score, sIdx) in court.teams[1].scores"
                :key="'B' + sIdx"
                class="score ms-2"
                >{{ score }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- League Tables -->
    <div class="row mt-5">
      <div class="col-md-6 mb-4">
        <div class="league-table-wrapper" style="font-size: 0.95rem">
          <h5 class="text-center mb-2" style="font-size: 1.1rem">
            Live League Table
          </h5>
          <table class="table table-bordered league-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Played</th>
                <th>Won</th>
                <th>Lost</th>
                <th>G/D</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in leagueTable1" :key="row.team">
                <td>{{ row.team }}</td>
                <td>{{ row.played }}</td>
                <td>{{ row.won }}</td>
                <td>{{ row.lost }}</td>
                <td>{{ row.gd }}</td>
                <td>{{ row.points }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="league-table-wrapper" style="font-size: 0.95rem">
          <h5 class="text-center mb-2" style="font-size: 1.1rem">
            Live League Table
          </h5>
          <table class="table table-bordered league-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>Played</th>
                <th>Won</th>
                <th>Lost</th>
                <th>G/D</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in leagueTable2" :key="row.team">
                <td>{{ row.team }}</td>
                <td>{{ row.played }}</td>
                <td>{{ row.won }}</td>
                <td>{{ row.lost }}</td>
                <td>{{ row.gd }}</td>
                <td>{{ row.points }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  courts: Array,
  leagueTable1: Array,
  leagueTable2: Array,
});
const leagueTable1 = props.leagueTable1;
const leagueTable2 = props.leagueTable2;

function getFlagUrl(code) {
  return code ? `https://flagcdn.com/24x18/${code}.png` : "";
}
</script>

<style scoped>
.card {
  min-height: auto;
}
.team-row {
  font-size: 1.2rem;
}
.flag-img {
  width: 24px;
  height: 18px;
  object-fit: cover;
  border-radius: 2px;
  border: 1px solid #ccc;
}
.team-name {
  min-width: 120px;
  font-weight: 500;
}
.score {
  min-width: 24px;
  display: inline-block;
  text-align: center;
}
.league-table-wrapper {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 16px 8px 8px 8px;
}
.league-table th {
  background: #d6cbe9;
  color: #222;
  text-align: center;
  font-weight: 600;
}
.league-table td {
  background: #fff;
  text-align: center;
}
</style>
