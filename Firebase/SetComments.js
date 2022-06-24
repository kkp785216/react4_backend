const { collection, doc, setDoc } = require("firebase/firestore")

// Add a new document in collection "cities"
async function setComments(db, query) {
  const newDocRef = doc(collection(db, "Comments"));
  await setDoc(
    newDocRef,
    {
      _id: newDocRef.id,
      name: query.name,
      email: query.email,
      website: query.website,
      message: query.message,
      post_url: query.url,
      date: new Date().getTime(),
      save_checked: query.save_checked
    }
  )
  return newDocRef.id;
}

module.exports = setComments;