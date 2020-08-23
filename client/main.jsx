import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { App } from '/imports/ui/App';
import { NotFound } from '/imports/ui/NotFound';
import { WhoIAm } from '/imports/ui/WhoIAm';
import { SellerInit } from '/imports/ui/SellerInit.jsx';
import { PageInitSeller } from '/imports/ui/PageInitSeller';
import { Info } from "/imports/ui/Info";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'graphql',
  cache: new InMemoryCache()
  /* Uncomment this for accounts use
  request: operation =>
    operation.setContext(() => ({
      headers: {
        authorization: Accounts._storedLoginToken()
      }
    }))
   */
});

Meteor.startup(() => {
  render(
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={App} />
          <Route path="/WhoIAm" component={WhoIAm} />
          <Route path="/SellerInit" component={SellerInit} />
          <Route path="/PageInitSeller" component={PageInitSeller} />
          <Route path="/info" component={Info} />
          <Route path='*' component={NotFound} />
        </Switch>
      </ BrowserRouter>
    </ApolloProvider>, document.getElementById('react-target'));
});
