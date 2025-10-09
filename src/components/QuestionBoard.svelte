<script lang="ts">
  import type { Question } from '$lib/data';
  import AnswerCard from './AnswerCard.svelte';
  import Strikes from './Strikes.svelte';
  import { stealOpen, currentTeam, scores } from '$lib/stores';
  import { get } from 'svelte/store';

  export let question: Question;

  let strikes = 0;
  export let forceReveal: boolean = false;

  $: if (question) {
    // Reset strikes when the question changes
    strikes = 0;
  }

  function handleShowAnswers() {
    forceReveal = !forceReveal;
  }

  function addStrike() {
    strikes += 1;
    if (strikes >= 3) {
      stealOpen.set(true);
    }
  }

  function resetStrikes() {
    strikes = 0;
  }

  function handleSteal() {
    // Calculate total points already won for this question (revealed answers)
    const revealedPoints = question.answers
      .filter(ans => ans.revealed)
      .reduce((sum, ans) => sum + ans.points, 0);
    // Award to the other team
    scores.update(s => {
      const otherTeam = get(currentTeam) === 'teamA' ? 'teamB' : 'teamA';
      s[otherTeam] += revealedPoints;
      s[get(currentTeam)] -= revealedPoints;
      if (s[get(currentTeam)] < 0) s[get(currentTeam)] = 0;
      return s;
    });
    currentTeam.update(t => (t==='teamA' ? 'teamB' : 'teamA'));
    stealOpen.set(false);
    resetStrikes();
  }
</script>

<div class="p-4 bg-blue-900 text-white mb-6 rounded flex flex-col items-center">
  <h2 class="text-xl mb-2 text-center">QUESTION {question.id}</h2>
  <p class="mb-4 text-center" style="color: #E75480">{question.prompt}</p>
  <div class="w-full mb-4 flex flex-col items-center">
    {#if question.answers.length > 1}
      <div class="flex justify-center flex-wrap w-full mb-2">
        {#each question.answers.slice(0, Math.ceil(question.answers.length / 2)) as ans, i}
          <AnswerCard answer={ans} questionId={question.id} forceReveal={forceReveal} number={i + 1} />
        {/each}
      </div>
      <div class="flex justify-center flex-wrap w-full">
        {#each question.answers.slice(Math.ceil(question.answers.length / 2)) as ans, i}
          <AnswerCard answer={ans} questionId={question.id} forceReveal={forceReveal} number={i + 1 + Math.ceil(question.answers.length / 2)} />
        {/each}
      </div>
    {:else}
      <div class="flex justify-center flex-wrap w-full">
        {#each question.answers as ans, i}
          <AnswerCard answer={ans} questionId={question.id} forceReveal={forceReveal} number={i + 1} />
        {/each}
      </div>
    {/if}
  </div>
  <!-- Spacer to push strikes and controls lower -->
  <div style="height: 4.0rem;"></div>
  <div class="w-full flex flex-col items-center mt-6">
    <Strikes
      {question}
      {strikes}
      {addStrike}
      {resetStrikes}
      steal={handleSteal}
      showAnswers={handleShowAnswers}
    />
    <div class="flex gap-4 mt-4">
      <slot name="next-question-btn" />
    </div>
  </div>
</div>