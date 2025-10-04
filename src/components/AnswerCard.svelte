<script lang="ts">
  import type { Answer } from '$lib/data';
  import { scores, currentTeam } from '$lib/stores';

  export let answer: Answer;
  export let questionId: number;
  export let forceReveal: boolean = false;
  export let number: number; // 1-based index for display

  function reveal() {
    if (!answer.revealed) {
      answer.revealed = true;
      scores.update(s => {
        s[$currentTeam] += answer.points;
        return s;
      });
    }
  }
</script>

<div class="flip-card">
  <button
    on:click={reveal}
    class="flip-card-inner {answer.revealed || forceReveal ? 'flipped' : ''}"
    aria-label={answer.revealed || forceReveal ? answer.text : 'Reveal answer'}
    tabindex="0"
  >
    <div class="flip-card-front flex flex-col items-center justify-center w-full h-full">
      <span class="ff-number">{number}</span>
    </div>
    <div class="flip-card-back flex flex-col items-center justify-center w-full h-full">
      <span>{answer.text}</span>
      <span>({answer.points})</span>
    </div>
  </button>
</div>

<style>
.flip-card {
  width: 16rem;        /* was 8rem */
  height: 8rem;        /* was 4rem */
  perspective: 1000px;
  display: inline-block;
  margin: 0.5rem;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s cubic-bezier(.4,2.3,.3,1);
  transform-style: preserve-3d;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 0.5rem;
  border: 2px solid #fff;
  font-size: 1.4rem;    /* bumped up from 1.1rem */
  background: #223388;
  color: #fff;
}

.flip-card-front {
  background: #07125B;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-card-back {
  background: #223388;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.ff-number {
  font-size: 2.5rem;    /* bumped up from 1.5rem */
  font-weight: bold;
  color: #FFD700;
  text-shadow: 2px 2px 0 #000, 0 0 8px #FFD700;
  margin-bottom: 0.2rem;
}
</style>
