/*
v0.1 13/01/23

Rodrigo Aizpuru + https://chat.openai.com/
 */
(function () {
  function exerciseDropdown(options) {
    var defaultSettings = {
      correctAnswers: {},
      classSelectors: "correct,incorrect",
      correctColor: "green",
      incorrectColor: "red",
      correctTextColor: "white",
      incorrectTextColor: "white"
    };
    var settings = Object.assign({}, defaultSettings, options);
    var exerciseDropdown = document.querySelector(".exercise-dropdown");
    var allSelectTag = exerciseDropdown.querySelectorAll("select");

    allSelectTag.forEach(function(select) {
      select.addEventListener("change", function() {
        var selectedOption = select.options[select.selectedIndex];
        var selectedValue = selectedOption.value;
        var questionId = select.id;
        var isSelectedCorrect = settings.correctAnswers[questionId].trim().toLowerCase() === selectedValue.trim().toLowerCase();
        select.classList.remove(...settings.classSelectors.split(','));
        select.classList.add(isSelectedCorrect ? "correct" : "incorrect");
        select.setAttribute("style", `background-color: ${isSelectedCorrect ? settings.correctColor : settings.incorrectColor}; color: ${isSelectedCorrect ? settings.correctTextColor : settings.incorrectTextColor};`);
      });
    });
  }
  window.exerciseDropdown = exerciseDropdown;
})();
