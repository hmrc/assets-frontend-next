import test from 'ava'
import nunjucks from 'nunjucks'
import dateOfBirth from './date-of-birth.html'
import renderTemplate from '../../common/utils/renderTemplate'

test("date of birth should exist", t => {
  template = renderTemplate(dateOfBirth)

  document.body.innerHTML += template

  t.true(document.querySelector('.form-date'))
})
