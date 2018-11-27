const Firestore = require('@google-cloud/firestore');

const OldFirestore = new Firestore({
  projectId: 'YOUR_OLD_PROJECT_ID',
  keyFilename: 'json/OldFirebase.json',
});

const NewFirestore = new Firestore({
  projectId: 'YOUR_NEW_PROJECT_ID',
  keyFilename: 'json/NewFirebase.json',
});

const settings = {timestampsInSnapshots: true};

OldFirestore.settings(settings);
NewFirestore.settings(settings);

OldFirestore.getCollections().then((collections) => {
  collections.forEach((collection) => {

    collection.get().then((querySnapshot) => {
      querySnapshot.forEach((documentSnapshot) => {

        NewFirestore.collection(collection.id).doc(documentSnapshot.id).set(documentSnapshot.data())

        let documentRef = OldFirestore.collection(collection.id).doc(documentSnapshot.id)

        documentRef.getCollections().then((subCollections) => {

          subCollections.forEach((subCollection) => {

            subCollection.get().then((subQuerySnapshot) => {

              subQuerySnapshot.forEach((subDocSnapshot) => {
                NewFirestore.collection(collection.id).doc(documentSnapshot.id).collection(subCollection.id).doc(subDocSnapshot.id).set(subDocSnapshot.data())
              })

            })
          })

        }).catch((error) => {console.log(error)})

      })

    })

  })

})
