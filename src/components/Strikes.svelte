<script lang="ts">
  import { stealOpen } from '$lib/stores';
  import type { Question } from '$lib/data';

  export let question: Question;
  export let strikes: number;
  export let addStrike: () => void;
  export let steal: () => void;
  export let showAnswers: () => void;
</script>

<div class="p-4">
  <p>Strikes: {Array(strikes).fill('❌').join(' ')}</p>
  {#if $stealOpen}
    <button on:click={steal} class="mt-2 px-4 py-2 bg-red-600 text-white rounded">
      Steal!
    </button>
  {/if}
  {#if !($stealOpen)}
  <button on:click={addStrike} class="mt-2 px-4 py-2 bg-white text-black rounded mr-2">
      Add Strike
    </button>
  {/if}
  <button on:click={showAnswers} class="mt-2 px-4 py-2 bg-white text-black rounded">
    {#if question.forceReveal}
      Hide Answers
    {:else}
      Show Answers
    {/if}
  </button>
</div>
<style>
  button:hover {
    background-color: #E75480 !important;
    color: white !important;
  }
</style>
