function preload () { // load sort and save
    let score = {
      ini: window.localStorage.getItem('ini'),
      value: window.localStorage.getItem('score')
    };
    let scores = [];
  
    if (window.localStorage.getItem('scores') === null) {
      scores.push(score);
    } else {
      scores = JSON.parse(window.localStorage.getItem('scores'));
      if (scores[0].ini !== score.ini && score[0].value !== score.value) {
        scores.push(score);
      }
    }
    window.localStorage.setItem('scores', JSON.stringify(scores));
  }
  
  function renderScores (obj) {
  
    let ul = document.querySelector('ul')
    ul.innerHTML = '';
    let scores = JSON.parse(window.localStorage.getItem('scores'));
    if (scores !== null) {
      let sortedScores = sort(scores);
      for (let key in sortedScores) {
        let li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = 'initials : ' + sortedScores[key].ini + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Score : ' + sortedScores[key].value;
        ul.appendChild(li);
      }
    }
  }
  
  function sort (obj) {
    if (obj === null) {
      return obj ;
    }
   let scoreArray = [];
   let newArray = [];
    obj.forEach(function (element) {

      scoreArray.push(element.value)
    })
    scoreArray.sort(function (a, b) { return b - a })
    scoreArray.forEach(function (element) {
      for (let key in obj) {
        if (element === obj[key].value) {
          newArray.push(obj[key]);
        }
      }
    })
    return newArray;
  }
  
  preload();
  renderScores();
  
  document.querySelector('#return').addEventListener('click', function () {
    window.location.href = 'index.html';
  })
  
  document.querySelector('#clear').addEventListener('click', function () {
  window.localStorage.clear();
  renderScores ();
  
  })
