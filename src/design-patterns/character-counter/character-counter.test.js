import test from 'ava'
import characterCounter from './character-counter.html'
import renderTemplate from '../../common/utils/renderTemplate'

test('date of birth should exist', t => {
  const template = renderTemplate(characterCounter)

  document.body.innerHTML += template

  t.true(document.querySelector('.char-counter'))
})
