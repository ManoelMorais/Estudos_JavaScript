const scriptURL = 'https://script.google.com/macros/s/AKfycby_rnRHnUszM0yPCHgT1d88ntc_w3r5TachTMHwAcvlhkrhXD2r7vSvSOYkp_7up7h0sQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
