import test from 'ava'
import dateOfBirth from './date-of-birth.html'
import renderTemplate from '../../common/utils/renderTemplate'

test('date of birth should exist', t => {
  const template = renderTemplate(dateOfBirth)

  document.body.innerHTML += template

  t.true(document.querySelector('.form-date'))
})
