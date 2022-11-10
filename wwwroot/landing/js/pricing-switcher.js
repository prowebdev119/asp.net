; (function () {
  'use strict'
  const pricingSwitchers = document.querySelectorAll('.pricing-switcher')

  if (pricingSwitchers.length > 0) {
    for (let i = 0; i < pricingSwitchers.length; i++) {
      const pricingSwitcher = pricingSwitchers[i]
      const pricingInputEl = pricingSwitcher.querySelector('input')
      const pricingOutputEls = pricingSwitcher.parentNode.querySelectorAll('.pricing-item-price')
      const pricingOutput = []
      for (let i = 0; i < pricingOutputEls.length; i++) {
        const pricingOutputEl = pricingOutputEls[i]
        const pricingOutputObj = {}
        pricingOutputObj.currency = pricingOutputEl.parentNode.querySelector('.pricing-item-price-currency')
        pricingOutputObj.amount = pricingOutputEl.parentNode.querySelector('.pricing-item-price-amount')
        pricingOutputObj.after = pricingOutputEl.parentNode.querySelector('.pricing-item-price-after')
        pricingOutputObj.data = JSON.parse(
          pricingOutputEl.getAttribute('data-price-output')
        )
        pricingOutput.push(pricingOutputObj)
      }
      handlePricingSwitch(pricingInputEl, pricingOutput)
      window.addEventListener('change', function () {
        handlePricingSwitch(pricingInputEl, pricingOutput)
      })
    }
  }

  function handlePricingSwitch (inputEl, output) {
    for (let i = 0; i < output.length; i++) {
      const outputObj = output[i]
      const inputElValue = inputEl.checked ? 1 : 0
      if (outputObj.currency) outputObj.currency.innerHTML = outputObj.data[inputElValue][0]
      if (outputObj.amount) outputObj.amount.innerHTML = outputObj.data[inputElValue][1]
      if (outputObj.after) outputObj.after.innerHTML = outputObj.data[inputElValue][2]
    }
  }
}())
