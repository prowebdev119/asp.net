; (function () {
  'use strict'

  const tabs = document.getElementsByClassName('tab')

  function handleTabs (tab) {
    let id = tab.getAttribute('aria-controls')
    document.getElementById(id).classList.add('is-active')
    tab.classList.add('is-active')
  }

  if (tabs.length > 0) {
    for (let i = 0; i < tabs.length; i++) {
      let tab = tabs[i]
      tab.addEventListener('click', function (e) {
        e.preventDefault()

        const tabsContainer = this.closest('.tabs')
        const tabPanels = tabsContainer.getElementsByClassName('tab-panel')

        // Do nothing if item is active
        if (this.classList.contains('is-active')) {
          return
        }
        // Remove active classes
        for (let i = 0; i < tabs.length; i++) {
          tabs[i].classList.remove('is-active')
        }
        for (let i = 0; i < tabPanels.length; i++) {
          tabPanels[i].classList.remove('is-active')
        }

        handleTabs(this)
      })
      if (tab.classList.contains('is-active')) {
        handleTabs(tab)
      }
    }
  }
}())
