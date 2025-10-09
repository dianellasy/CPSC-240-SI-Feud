<script lang="ts">
  import { scores, currentTeam } from '$lib/stores';
  $: teamA = $scores.teamA;
  $: teamB = $scores.teamB;
  $: active = $currentTeam;
</script>

<div class="flex justify-around p-4 bg-gray-800 text-white">
  <div class="text-center">
    <h2 class={active==='teamA'?'font-bold':'font-normal'}>Team A Points</h2>
  <p class="text-2xl" style="color: #E75480">{teamA}</p>
  </div>
  <div class="text-center">
    <h2 class={active==='teamB'?'font-bold':'font-normal'}>Team B Points</h2>
  <p class="text-2xl" style="color: #E75480">{teamB}</p>
  </div>
</div>