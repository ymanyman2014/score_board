<template>
  <div class="container py-4">
    <h1 class="mb-4 text-center text-white">Score Board (Admin)</h1>

    <div class="row g-4 justify-content-center">
      <div class="col-md-8">
        <div class="bg-white px-4 py-2 rounded">
          <div class="mb-3 mt-3 d-flex justify-content-center gap-2">
            <select v-model="selectedCourtIdx" class="form-select w-auto">
              <option
                v-for="(court, idx) in courts"
                :key="court.name"
                :value="idx"
              >
                {{ court.name }}
              </option>
            </select>
            <!-- Toggle buttons for sets -->
            <div class="btn-group ms-3" role="group" aria-label="Set Toggle">
              <button
                v-for="(set, idx) in [1, 2, 3]"
                :key="set"
                type="button"
                class="btn"
                :class="
                  activeSetIdx === idx ? 'btn-primary' : 'btn-outline-primary'
                "
                @click="activeSetIdx = idx"
              >
                Set {{ set }}
              </button>
            </div>
          </div>
          <div class="row align-items-center justify-content-center py-4">
            <!-- Team A Column -->
            <div class="col-5 d-flex flex-column align-items-center">
              <div class="d-flex align-items-center mb-2" style="gap: 8px">
                <select
                  v-model="courts[selectedCourtIdx].teams[0].flag"
                  class="form-select form-select-sm"
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
                  class="flag-img"
                  style="width: 32px; height: 24px"
                />
              </div>
              <input
                v-model="courts[selectedCourtIdx].teams[0].name"
                class="form-control team-input mb-3 text-center"
                style="font-size: 1.2rem; font-weight: 600"
              />
              <!-- Updated Score and Buttons Layout for Team A -->
              <div class="d-flex align-items-center justify-content-center">
                <input
                  type="number"
                  min="0"
                  class="form-control big-score-input text-center"
                  :value="
                    courts[selectedCourtIdx].teams[0].scores[activeSetIdx]
                  "
                  readonly
                  style="font-size: 2.5rem; width: 100px; font-weight: bold"
                />
                <div class="btn-group-vertical ms-2">
                  <button
                    class="btn btn-lg btn-outline-success py-0"
                    @click="
                      courts[selectedCourtIdx].teams[0].scores[activeSetIdx]++
                    "
                    type="button"
                    style="min-width: 40px"
                  >
                    ▲
                  </button>
                  <button
                    class="btn btn-lg btn-outline-secondary py-0"
                    @click="
                      courts[selectedCourtIdx].teams[0].scores[activeSetIdx] >
                        0 &&
                        courts[selectedCourtIdx].teams[0].scores[activeSetIdx]--
                    "
                    type="button"
                    style="min-width: 40px"
                  >
                    ▼
                  </button>
                </div>
              </div>
            </div>
            <!-- VS Divider -->
            <div class="col-2 d-flex flex-column align-items-center">
              <span style="font-size: 2rem; font-weight: bold; color: #673ab7"
                >VS</span
              >
            </div>
            <!-- Team B Column -->
            <div class="col-5 d-flex flex-column align-items-center">
              <div class="d-flex align-items-center mb-2" style="gap: 8px">
                <select
                  v-model="courts[selectedCourtIdx].teams[1].flag"
                  class="form-select form-select-sm"
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
                  class="flag-img"
                  style="width: 32px; height: 24px"
                />
              </div>
              <input
                v-model="courts[selectedCourtIdx].teams[1].name"
                class="form-control team-input mb-3 text-center"
                style="font-size: 1.2rem; font-weight: 600"
              />
              <!-- Updated Score and Buttons Layout for Team B -->
              <div class="d-flex align-items-center justify-content-center">
                <input
                  type="number"
                  min="0"
                  class="form-control big-score-input text-center"
                  :value="
                    courts[selectedCourtIdx].teams[1].scores[activeSetIdx]
                  "
                  readonly
                  style="font-size: 2.5rem; width: 100px; font-weight: bold"
                />
                <div class="btn-group-vertical ms-2">
                  <button
                    class="btn btn-lg btn-outline-success py-0"
                    @click="
                      courts[selectedCourtIdx].teams[1].scores[activeSetIdx]++
                    "
                    type="button"
                    style="min-width: 40px"
                  >
                    ▲
                  </button>
                  <button
                    class="btn btn-lg btn-outline-secondary py-0"
                    @click="
                      courts[selectedCourtIdx].teams[1].scores[activeSetIdx] >
                        0 &&
                        courts[selectedCourtIdx].teams[1].scores[activeSetIdx]--
                    "
                    type="button"
                    style="min-width: 40px"
                  >
                    ▼
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- League Tables (unchanged) -->
    <div class="row mt-5">
      <div
        v-if="selectedCourtIdx === 0 || selectedCourtIdx === 1"
        class="col-md-8 mb-4 offset-md-2"
      >
        <div
          class="league-table-wrapper"
          style="font-size: 0.95rem; margin-top: -2rem"
        >
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
                    min="0"
                    @input="row.played = Math.max(0, parseInt(row.played) || 0)"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.won"
                    class="form-control form-control-sm"
                    min="0"
                    @input="row.won = Math.max(0, parseInt(row.won) || 0)"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.lost"
                    class="form-control form-control-sm"
                    min="0"
                    @input="row.lost = Math.max(0, parseInt(row.lost) || 0)"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.gd"
                    class="form-control form-control-sm"
                    @input="row.gd = parseInt(row.gd) || 0"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.points"
                    class="form-control form-control-sm"
                    min="0"
                    @input="row.points = Math.max(0, parseInt(row.points) || 0)"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        v-if="selectedCourtIdx === 2 || selectedCourtIdx === 3"
        class="col-md-8 mb-3 offset-md-2"
      >
        <div
          class="league-table-wrapper"
          style="font-size: 0.95rem; margin-top: -2rem"
        >
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
                    min="0"
                    @input="row.played = Math.max(0, parseInt(row.played) || 0)"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.won"
                    class="form-control form-control-sm"
                    min="0"
                    @input="row.won = Math.max(0, parseInt(row.won) || 0)"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.lost"
                    class="form-control form-control-sm"
                    min="0"
                    @input="row.lost = Math.max(0, parseInt(row.lost) || 0)"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.gd"
                    class="form-control form-control-sm"
                    @input="row.gd = parseInt(row.gd) || 0"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    v-model.number="row.points"
                    class="form-control form-control-sm"
                    min="0"
                    @input="row.points = Math.max(0, parseInt(row.points) || 0)"
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
const activeSetIdx = ref(0); // 0: Set 1, 1: Set 2, 2: Set 3
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

/* Toggle button group theme */
.btn-group .btn {
  background: #fff;
  color: #673ab7;
  border: 1.5px solid #673ab7;
  font-weight: 600;
  transition: background 0.2s, color 0.2s;
}

.btn-group .btn.btn-primary,
.btn-group .btn:active,
.btn-group .btn.active {
  background: #673ab7 !important;
  color: #fff !important;
  border-color: #673ab7 !important;
}

.btn-group .btn:not(.btn-primary):hover {
  background: #ede7f6;
  color: #512da8;
  border-color: #673ab7;
}

/* Theme the selectedCourt dropdown */
.form-select.w-auto {
  background: #fff;
  color: #673ab7;
  border: 1.5px solid #673ab7;
  font-weight: 600;
  transition: border 0.2s, box-shadow 0.2s;
}

.form-select.w-auto:focus {
  border-color: #512da8;
  box-shadow: 0 0 0 0.15rem #ede7f6;
}

.form-select.w-auto option {
  color: #673ab7;
  font-weight: 600;
}

/* THEME FOR THE ARROW UP BUTTON */
.btn-group-vertical .btn-outline-success.py-0 {
  background: #fff;
  color: #673ab7;
  border: 1.5px solid #673ab7;
  font-weight: 700;
  transition: background 0.2s, color 0.2s;
}

.btn-group-vertical .btn-outline-success.py-0:hover,
.btn-group-vertical .btn-outline-success.py-0:focus {
  background: #673ab7;
  color: #fff;
  border-color: #673ab7;
}
</style>
