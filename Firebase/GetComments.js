const {collection, getDocs} = require('firebase/firestore/lite');

// Get a list of cities from your database
async function getComments(db) {
    const citiesCol = collection(db, "Comments");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

module.exports = getComments