<template>
  <div class="container py-4">
    <h1 class="mb-4 text-center text-white">Score Board (Admin)</h1>
    <div class="mb-4 d-flex justify-content-center">
      <select v-model="selectedCourtIdx" class="form-select w-auto">
        <option v-for="(court, idx) in courts" :key="court.name" :value="idx">
          {{ court.name }}
        </option>
      </select>
    </div>
    <div class="row g-4 justify-content-center">
      <div class="col-md-6">
        <div class="bg-white px-4 py-2 rounded">
          <div class="text-black mb-2 mt-2">
            {{ courts[selectedCourtIdx].name }}
          </div>
          <div class="card-body admin-score-box">
            <div
              class="admin-team-row d-flex align-items-center mb-2 rounded-top"
            >
              <select
                v-model="courts[selectedCourtIdx].teams[0].flag"
                class="form-select form-select-sm me-2"
                style="width: 60px"
              >
                <option
                  v-for="country in countries"
                  :key="country.code"
                  :value="country.code"
                >
                  {{ country.emoji }}
                </option>
              </select>
              <img
                :src="getFlagUrl(courts[selectedCourtIdx].teams[0].flag)"
                :alt="courts[selectedCourtIdx].teams[0].flag"
                class="flag-img me-2"
              />
              <input
                v-model="courts[selectedCourtIdx].teams[0].name"
                class="form-control team-input me-2"
              />
              <div class="d-flex ms-auto">
                <input
                  v-for="(score, sIdx) in courts[selectedCourtIdx].teams[0]
                    .scores"
                  :key="'A' + sIdx"
                  type="number"
                  min="0"
                  class="form-control score-input ms-2"
                  v-model.number="
                    courts[selectedCourtIdx].teams[0].scores[sIdx]
                  "
                />
              </div>
            </div>
            <div
              class="admin-team-row d-flex align-items-center mb-2 rounded-bottom"
            >
              <select
                v-model="courts[selectedCourtIdx].teams[1].flag"
                class="form-select form-select-sm me-2"
                style="width: 60px"
              >
                <option
                  v-for="country in countries"
                  :key="country.code"
                  :value="country.code"
                >
                  {{ country.emoji }}
                </option>
              </select>
              <img
                :src="getFlagUrl(courts[selectedCourtIdx].teams[1].flag)"
                :alt="courts[selectedCourtIdx].teams[1].flag"
                class="flag-img me-2"
              />
              <input
                v-model="courts[selectedCourtIdx].teams[1].name"
                class="form-control team-input me-2"
              />
              <div class="d-flex ms-auto">
                <input
                  v-for="(score, sIdx) in courts[selectedCourtIdx].teams[1]
                    .scores"
                  :key="'B' + sIdx"
                  type="number"
                  min="0"
                  class="form-control score-input ms-2"
                  v-model.number="
                    courts[selectedCourtIdx].teams[1].scores[sIdx]
                  "
                />
              </div>
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
                <td>
                  <input
                    type="number"
                    v-model.number="row.played"
                    class="form-control form-control-sm"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.won"
                    class="form-control form-control-sm"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.lost"
                    class="form-control form-control-sm"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.gd"
                    class="form-control form-control-sm"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.points"
                    class="form-control form-control-sm"
                  />
                </td>
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
                <td>
                  <input
                    type="number"
                    v-model.number="row.played"
                    class="form-control form-control-sm"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.won"
                    class="form-control form-control-sm"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.lost"
                    class="form-control form-control-sm"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.gd"
                    class="form-control form-control-sm"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.points"
                    class="form-control form-control-sm"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  courts: Array,
  updateScore: Function,
  leagueTable1: Array,
  leagueTable2: Array,
});
const selectedCourtIdx = ref(0);
const leagueTable1 = props.leagueTable1;
const leagueTable2 = props.leagueTable2;

const countries = [
  { name: "Philippines", code: "ph", emoji: "🇵🇭" },
  { name: "Malaysia", code: "my", emoji: "🇲🇾" },
  { name: "Hong Kong", code: "hk", emoji: "🇭🇰" },
  { name: "Pakistan", code: "pk", emoji: "🇵🇰" },
  { name: "Thailand", code: "th", emoji: "🇹🇭" },
  { name: "India", code: "in", emoji: "🇮🇳" },
  { name: "Singapore", code: "sg", emoji: "🇸🇬" },
  { name: "South Korea", code: "kr", emoji: "🇰🇷" },
];

function getFlagUrl(code) {
  return code ? `https://flagcdn.com/24x18/${code}.png` : "";
}
</script>

<style scoped>
.card {
  min-height: 320px;
}

.league-table-wrapper {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 16px 8px 8px 8px;
}
</style>
