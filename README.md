# Plugin de Portal Académico para ejercicios de Dropdown
Plug in para ejercicios con dropdown

## Uso y configuración
~~~
<div class="exercise-dropdown">
  <form class="form-inline">
    <p class="bg-grey p-1">Edinburgh is one of the most famous cities in the United Kingdom not only for its ancient
      Castle or beautiful sightseeing, but also for its well-known writers such as Robert Louis Stevenson, he was the man who wrote
      <select id="pregunta1" class="custom-select">
        <option disabled selected value> -- </option>
        <option>the greatest</option>
        <option>the goodest</option>
        <option>greater</option>
      </select>
      gothic novella “Strange Case of Dr. Jekyll and Mr. Hyde” in 1886.
    </p>
  </form>
  <form class="form-inline">
    <p class="bg-grey p-1">This novella is about a lawyer named Utterson who investigates a weird set of facts
      related to his dearest old friend
      Henry.
      <select id="pregunta2" class="custom-select">
        <option disabled selected value> -- </option>
        <option>The most interesting</option>
        <option>The most boring</option>
        <option>interesting</option>
      </select>
      relevance of the story is about the nature of two opposite personalities interconnected to good and evil
      represented by
      the nice Dr. Henry Jekyll and the evil Edward Hyde.
    </p>
  </form>
  <form class="form-inline">
    <p class="bg-grey p-1">The main character Gabriel John Utterson is a loyal, tolerant and smart person, he is
      also a calm man. However, he
      becomes a perceptive and inquiring mind after listening to
      <select id="pregunta3" class="custom-select">
        <option disabled selected value> -- </option>
        <option>the shocker</option>
        <option>the most shocking</option>
        <option>the shocking</option>
      </select>
      event ever revealed by his cousin Richard Enfield, a little girl was trampled by a terrifying man in which
      Jekyll was peculiarly involved in some way.
    </p>
  </form>
</div>
~~~

JS
~~~

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var options = {
      correctAnswers: {
        "pregunta1": "pregunta1",
        "pregunta2": "pregunta2",
        "pregunta3": "pregunta3",
      ...
      },
      classSelectors: "correct,incorrect",
      correctColor: "green",
      incorrectColor: "red",
      correctTextColor: "white",
      incorrectTextColor: "white"
    };
    exerciseDropdown(options);
  });
</script>
~~~
Nota: Solo correctAnswers es imprescindible, los demás pueden no incluirse y se quedan los default.
