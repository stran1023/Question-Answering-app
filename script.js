document.getElementById('qa-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var context = document.getElementById('context').value;
  var question = document.getElementById('question').value;
  const answerTextarea = document.getElementById('answer');
  answerTextarea.innerText = '';
  if (context.trim() === '' || question.trim() === '') {
    alert('Please fill in the Context and Question fields.');
  } else {
    fetch('http://localhost:5000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'context': context,
        'question': question,
      }),
    })
    .then(response => response.json())
    .then(data => {
      if (data && data.trim() !== '') {
        answerTextarea.innerText = data;
      } else {
        answerTextarea.innerText = 'Can not find the answer.';
      }
      const event = new Event('change');
      answerTextarea.dispatchEvent(event);
    });
  }
});
