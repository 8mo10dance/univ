import * as React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Digiweb, GleeManages, GleeManageDetail } from 'pages'

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/digiweb" component={Digiweb} />
        <Route path="/glee_manages/:id">
          <GleeManageDetail />
        </Route>
        <Route path="/glee_manages" component={GleeManages} />
      </Switch>
    </Router>
  )
}
