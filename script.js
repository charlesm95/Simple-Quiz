(document).ready(function () {
  
    $('.answer-option').click(function () {
      $('.answer-option').off('click');
      var selectedOption = $(this);
      var isCorrect = selectedOption.data('correct');
      showFeedback(isCorrect);
    });

    function showFeedback(isCorrect) {
      var feedbackElement = $('#feedback');
      if (isCorrect) {
        feedbackElement.text('Correct! Well done.');
        feedbackElement.addClass('correct');
      } else {
        feedbackElement.text('Incorrect. Try again.');
        feedbackElement.addClass('incorrect');
      }
    }
  });
