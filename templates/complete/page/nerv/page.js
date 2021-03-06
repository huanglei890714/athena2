/**
 * @author <%= username %>
 * @date <%= date %>
 * @desc <%= description %>
 */
import Nerv from 'nervjs'

import '<% if (sass) { %>./<%= pageName %>.scss<% } else { %><%= pageName %>.css<%}%>'

class <%= _.upperFirst(_.camelCase(pageName)) %> extends Nerv.Component {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  render () {
    return (
      <div className='<%= pageName %>'>
      </div>
    )
  }
}

Nerv.render(<<%= _.upperFirst(_.camelCase(pageName)) %> />, document.getElementById('J_container'))
