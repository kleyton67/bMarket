import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { SellerCollection } from '/imports/api/seller';
import './apollo'

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

const insertSeller =() =>{
  SellerCollection.insert({userName, name, pass})
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: 'Do the Tutorial',
      url: 'https://www.meteor.com/tutorials/react/creating-an-app'
    });

    insertLink({
      title: 'Follow the Guide',
      url: 'http://guide.meteor.com'
    });

    insertLink({
      title: 'Read the Docs',
      url: 'https://docs.meteor.com'
    });

    insertLink({
      title: 'Discussions',
      url: 'https://forums.meteor.com'
    });
    insertSeller({
      userName: 'marcelo67',
      name: 'Marcelo Lapis',
      pass: 'mamão'
    });
    insertSeller({
      userName: 'joao67',
      name: 'João Beringo',
      pass: 'mamão'
    });
    insertSeller({
      userName: 'aguia67',
      name: 'Aguiar Medeiroa',
      pass: 'mamão'
    });
    insertSeller({
      userName: 'j67',
      name: 'Jaqueline Amarelo',
      pass: 'mamão'
    });
    insertSeller({
      userName: 'crg48',
      name: 'Cristiane Justiça',
      pass: 'mamão'
    });

  }
});
