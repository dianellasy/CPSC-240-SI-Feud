<script lang="ts">
  import { questions as importedQuestions } from '$lib/data';
  import Scoreboard from '../components/Scoreboard.svelte';
  import QuestionBoard from '../components/QuestionBoard.svelte';
  import { currentTeam, stealOpen } from '$lib/stores';

  let questions = importedQuestions.map(q => ({
    ...q,
    answers: q.answers.map(a => ({ ...a }))
  }));
  let currentQuestionIndex = 0;
  let selectedTeam: 'teamA' | 'teamB' = 'teamA';
  let forceReveal = false;

  function resetAnswers(index: number) {
    questions[index]?.answers.forEach(ans => ans.revealed = false);
  }

  $: {
    resetAnswers(currentQuestionIndex);
  }

  function nextQuestion() {
    resetAnswers(currentQuestionIndex + 1);
    currentQuestionIndex += 1;
    forceReveal = false;
    currentTeam.set(selectedTeam);
    stealOpen.set(false);
  }

  $: if (questions[currentQuestionIndex] && forceReveal) {
    forceReveal = false;
  }
</script>

<svelte:head>
  <title>CPSC 240 SI Feud</title>
</svelte:head>

<main class="centered-main max-w-3xl mx-auto">
  <h1 class="main-title text-4xl mb-6">CPSC 240 SI Feud</h1>

  <div class="centered-scoreboard">
    <Scoreboard />
  </div>

  <div class="my-4 centered-select">
    <label class="mr-2 font-bold">Select Team for Next Question:</label>
    <select bind:value={selectedTeam} class="border rounded px-2 py-1">
      <option value="teamA">Team A</option>
      <option value="teamB">Team B</option>
    </select>
  </div>

  <div class="centered-questionboard">
    <QuestionBoard question={questions[currentQuestionIndex]} forceReveal={forceReveal}>
      <button
        slot="next-question-btn"
        on:click={nextQuestion}
        class="next-question-btn px-4 py-2 rounded centered-btn"
      >
        Next Question
      </button>
    </QuestionBoard>
  </div>

  <footer class="page-footer">
    Made with 💛 by Dianella Sy, CPSC 240 SI Leader
  </footer>
</main>

<style>
  :global(body) {
    background: #07125B;
    color: #fff;
    margin: 0;
    min-height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    font-family: 'Clarendon', 'Bookman Old Style', 'Bookman', 'Times New Roman', serif;
    font-weight: bold;
  }

  .centered-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    width: 100vw;
    color: #fff;
    text-align: center;
    padding-top: 2rem;
  }

  .main-title {
    color: #FFD700;
  }

  .centered-scoreboard {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
  }

  .centered-select {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .centered-questionboard {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .centered-btn {
    display: block;
    margin: 1rem auto 0 auto;
  }

  label,
  select,
  button,
  input,
  textarea {
    color: #fff;
  }

  select,
  input,
  textarea {
    background: #07125B;
    border: 1px solid #fff;
  }

  .next-question-btn {
    color: #000 !important;
    background-color: #90ee90 !important;
    font-weight: bold;
    border: none;
    transition: background 0.2s, color 0.2s;
  }

  .next-question-btn:hover:not(:disabled),
  :global(button.bg-gray-600:hover),
  :global(button.bg-yellow-500:hover) {
    background-color: #FFD700 !important;
    color: #000 !important;
  }

  .next-question-btn:disabled {
    color: #888 !important;
    background: #eee !important;
  }

  :global(button.bg-gray-600),
  :global(button.bg-yellow-500),
  :global(button.bg-red-600) {
    transition: background 0.2s, color 0.2s;
  }

  .page-footer {
    margin-top: 3.5rem;
    font-size: 0.875rem;
    color: #fff;
  }
</style>
