import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { NotFound } from '/imports/ui/NotFound';
import { WhoIAm } from '/imports/ui/WhoIAm';
import { BrowserRouter, Switch, Route  } from 'react-router-dom';

Meteor.startup(() => {
  render(<BrowserRouter>
    <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/WhoIAm" component={WhoIAm}/>
        <Route path='*' component={NotFound} />
    </Switch>
</ BrowserRouter>, document.getElementById('react-target'));
});
