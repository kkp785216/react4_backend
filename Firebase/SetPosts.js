const { collection, doc, setDoc } = require("firebase/firestore")

// Add a new document in collection "cities"
async function SetPosts(db, obj) {
    const newDocRef = doc(collection(db, "Posts"));
    await setDoc(newDocRef,obj)
    return newDocRef.id;
  }

module.exports = SetPosts;